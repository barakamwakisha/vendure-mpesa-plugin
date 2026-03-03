import crypto, { X509Certificate } from "crypto"

import { Injectable } from "@nestjs/common"
import {
    ActiveOrderService,
    CreateRefundResult,
    CurrencyCode,
    Logger,
    Order,
    OrderService,
    OrderStateTransitionError,
    Payment,
    PaymentMethod,
    Refund,
    RequestContext,
    TransactionalConnection,
} from "@vendure/core"
import axios, { AxiosError, AxiosInstance } from "axios"

import { mpesaPaymentMethodHandler } from "../config/mpesa.handler"
import {
    LIVE_BASE_URL,
    REVERSAL_CALLBACK_ENDPOINT,
    SANDBOX_BASE_URL,
    STK_PUSH_CALLBACK_ENDPOINT,
    loggerCtx,
} from "../constants"
import {
    MpesaConfig,
    MpesaTransactionInitiation,
    MpesaTransactionVerification,
    ReversalCallbackPayload,
    ReversalResponse,
    STKCallbackPayload,
    STKPushResponse,
    STKStatusResponse,
    TokenResponse,
} from "../types"
import { formatPhoneNumber } from "../util/phone-utils"

@Injectable()
export class MpesaService {
    private _accessTokenCache = new Map<
        string,
        { token: string; expiryDate: Date }
    >()

    constructor(
        private activeOrderService: ActiveOrderService,
        private connection: TransactionalConnection,
        private orderService: OrderService,
    ) {}

    async initiateStkPush(
        ctx: RequestContext,
        phoneNumber: string,
    ): Promise<MpesaTransactionInitiation> {
        const sessionOrder = await this.activeOrderService.getActiveOrder(
            ctx,
            undefined,
        )
        if (!sessionOrder) {
            return {
                success: false,
                transactionId: "",
                message: "No active order found for session",
            }
        }

        const order = await this.orderService.findOne(ctx, sessionOrder.id, [
            "customer",
        ])
        if (!order) {
            return {
                success: false,
                transactionId: "",
                message: "No order found for active session",
            }
        }

        const { totalWithTax, customer, currencyCode, code } = order
        if (!customer) {
            return {
                success: false,
                transactionId: "",
                message: "No customer found for active order",
            }
        }

        if (currencyCode !== CurrencyCode.KES) {
            return {
                success: false,
                transactionId: "",
                message: "Mpesa only supports KES currency",
            }
        }

        try {
            const config = await this.getMpesaConfig(ctx)

            const { shortCodeType } = config
            const transactionType =
                shortCodeType === "paybill"
                    ? "CustomerPayBillOnline"
                    : "CustomerBuyGoodsOnline"
            const timestamp = this.getCurrentTimestamp()

            const client = await this.getRequestClient(config)

            const formattedPhoneNumber = formatPhoneNumber(phoneNumber)
            const { data } = await client.post<STKPushResponse>(
                "/stkpush/v1/processrequest",
                {
                    BusinessShortCode: config.shortCode,
                    Password: this.getLnmPassword(config, timestamp),
                    Timestamp: timestamp,
                    TransactionType: transactionType,
                    Amount: Math.trunc(totalWithTax / 100),
                    PartyA: formattedPhoneNumber,
                    PartyB: config.shortCode,
                    PhoneNumber: formattedPhoneNumber,
                    CallBackURL: `${config.vendureHost}/${STK_PUSH_CALLBACK_ENDPOINT}`,
                    AccountReference: code,
                    TransactionDesc: `${code} Mpesa Payment`,
                },
            )

            if (data.ResponseCode !== "0") {
                return {
                    success: false,
                    transactionId: "",
                    message: data.ResponseDescription,
                }
            }

            await this.orderService.updateCustomFields(ctx, order.id, {
                mpesaCheckoutRequestID: data.CheckoutRequestID,
            })

            return {
                success: true,
                transactionId: data.CheckoutRequestID,
                message: data.ResponseDescription,
            }
        } catch (error) {
            Logger.error(
                `Could not initiate STK push ${(error as Error).message}`,
                loggerCtx,
            )
            if (error instanceof AxiosError) {
                Logger.error(
                    JSON.stringify(error.response?.data, null, 2),
                    loggerCtx,
                )
            }

            return {
                success: false,
                transactionId: "",
                message: "Could not initiate STK push",
            }
        }
    }

    async checkTransactionStatus(config: MpesaConfig, transactionId: string) {
        const client = await this.getRequestClient(config)

        const { shortCode } = config
        const timestamp = this.getCurrentTimestamp()
        const password = this.getLnmPassword(config, timestamp)

        try {
            const { data } = await client.post<STKStatusResponse>(
                "/stkpushquery/v1/query",
                {
                    BusinessShortCode: shortCode,
                    Password: password,
                    Timestamp: timestamp,
                    CheckoutRequestID: transactionId,
                },
            )

            const isSuccessful =
                data.ResultCode === "0" && data.ResponseCode === "0"

            return { isSuccessful, message: data.ResultDesc }
        } catch (error) {
            Logger.error(
                `Couldn't query transaction ${transactionId} status`,
                loggerCtx,
            )

            if (error instanceof AxiosError) {
                Logger.error(
                    JSON.stringify(error.response?.data, null, 2),
                    loggerCtx,
                )
            }

            return {
                isSuccessful: false,
                message: "Could not query transaction status",
            }
        }
    }

    async verifyMpesaPayment(
        ctx: RequestContext,
        transactionId: string,
    ): Promise<MpesaTransactionVerification> {
        const payment = await this.getPaymentByTransactionId(ctx, transactionId)
        if (payment) {
            return {
                status: "SUCCESS",
                transactionId,
                message: "Payment has been successfully completed",
            }
        }

        const order = await this.connection.getRepository(ctx, Order).findOne({
            where: {
                customFields: {
                    mpesaCheckoutRequestID: transactionId,
                },
            },
        })
        if (!order) {
            // The mpesaCheckoutRequestID custom field is set to null when the payment is failed
            return {
                status: "FAILED",
                transactionId,
                message: "Payment has failed",
            }
        }

        return {
            status: "PENDING",
            transactionId,
            message: "Payment is still pending",
        }
    }

    async handleStkPushCallback(
        ctx: RequestContext,
        payload: STKCallbackPayload,
    ) {
        const { CheckoutRequestID, CallbackMetadata } = payload.Body.stkCallback

        const config = await this.getMpesaConfig(ctx)

        const { isSuccessful, message } = await this.checkTransactionStatus(
            config,
            CheckoutRequestID,
        )
        if (!isSuccessful) {
            Logger.warn(
                `Transaction ${CheckoutRequestID} failed. ${message}`,
                loggerCtx,
            )

            // Flag the transaction as failed by setting the internal checkoutRequestID custom field on the order to null
            const order = await this.connection
                .getRepository(ctx, Order)
                .findOne({
                    where: {
                        customFields: {
                            mpesaCheckoutRequestID: CheckoutRequestID,
                        },
                    },
                })
            if (!order) return

            await this.orderService.updateCustomFields(ctx, order.id, {
                mpesaCheckoutRequestID: null,
            })
            return
        }

        this.connection.withTransaction(ctx, async () => {
            const order = await this.connection
                .getRepository(ctx, Order)
                .findOne({
                    where: {
                        customFields: {
                            mpesaCheckoutRequestID: CheckoutRequestID,
                        },
                    },
                })
            if (!order) return

            if (order.state !== "ArrangingPayment") {
                const transitionResult =
                    await this.orderService.transitionToState(
                        ctx,
                        order.id,
                        "ArrangingPayment",
                    )

                if (transitionResult instanceof OrderStateTransitionError) {
                    Logger.error(
                        `Error transitioning order ${order.code} to ArrangingPayment state: ${transitionResult.message}`,
                        loggerCtx,
                    )
                    return
                }
            }

            const MpesaReceiptNumber =
                CallbackMetadata?.Item?.find(
                    item => item.Name === "MpesaReceiptNumber",
                )?.Value ?? "N/A"

            const addPaymentToOrderResult =
                await this.orderService.addPaymentToOrder(ctx, order.id, {
                    method: mpesaPaymentMethodHandler.code,
                    metadata: {
                        CheckoutRequestID,
                        MpesaReceiptNumber,
                    },
                })

            if (!(addPaymentToOrderResult instanceof Order)) {
                Logger.error(
                    `Error adding payment to order ${order.code}: ${addPaymentToOrderResult.message}`,
                    loggerCtx,
                )
                return
            }

            Logger.info(
                `Mpesa Payment ${MpesaReceiptNumber} added to order ${order.code}`,
                loggerCtx,
            )
        })
    }

    async reversePayment(
        ctx: RequestContext,
        transactionId: string,
        reason?: string,
    ): Promise<CreateRefundResult> {
        const payment = await this.getPaymentByTransactionId(ctx, transactionId)
        if (!payment) {
            Logger.warn(
                `No payment found for transaction ${transactionId}`,
                loggerCtx,
            )
            return {
                state: "Failed",
                transactionId: "",
                metadata: {
                    errorMessage: "No payment found for transaction",
                },
            }
        }

        try {
            const config = await this.getMpesaConfig(ctx)
            const client = await this.getRequestClient(config)

            const { data } = await client.post<ReversalResponse>(
                "/reversal/v1/request",
                {
                    CommandID: "TransactionReversal",
                    ReceiverParty: config.shortCode,
                    RecieverIdentifierType: "11",
                    Remarks: `Mpesa Reversal${reason ? `: ${reason}` : ""}`,
                    Initiator: config.initiatorName,
                    SecurityCredential: this.getSecurityCredential(config),
                    QueueTimeOutURL: `${config.vendureHost}/${REVERSAL_CALLBACK_ENDPOINT}`,
                    ResultURL: `${config.vendureHost}/${REVERSAL_CALLBACK_ENDPOINT}`,
                    TransactionID: payment.metadata.MpesaReceiptNumber,
                    Amount: Math.trunc(payment.amount / 100),
                },
            )

            if (data.ResponseCode !== "0") {
                return {
                    state: "Failed",
                    transactionId: payment.metadata.MpesaReceiptNumber,
                }
            }

            return {
                state: "Validating",
                transactionId: payment.metadata.MpesaReceiptNumber,
                metadata: {
                    conversationID: data.OriginatorConversationID,
                },
            }
        } catch (error) {
            Logger.error(
                `Could not reverse payment ${transactionId}`,
                loggerCtx,
            )
            if (error instanceof AxiosError) {
                Logger.error(
                    JSON.stringify(error.response?.data, null, 2),
                    loggerCtx,
                )
            }
            return {
                state: "Failed",
                transactionId: payment.metadata.MpesaReceiptNumber,
            }
        }
    }

    async handleReversalCallback(
        ctx: RequestContext,
        payload: ReversalCallbackPayload,
    ) {
        const { ResultCode, ResultDesc, TransactionID } = payload.Result

        const refund = await this.connection
            .getRepository(ctx, Refund)
            .findOne({
                where: { transactionId: TransactionID },
            })

        if (!refund) {
            Logger.warn(
                `No refund found for transaction ${TransactionID}`,
                loggerCtx,
            )
            return
        }

        if (ResultCode === "0") {
            await this.orderService.settleRefund(ctx, {
                id: refund.id,
                transactionId: TransactionID,
            })
            Logger.info(`Refund ${TransactionID} settled`, loggerCtx)
        } else {
            await this.orderService.transitionRefundToState(
                ctx,
                refund.id,
                "Failed",
            )
            Logger.info(
                `Refund ${TransactionID} failed. ${ResultDesc}`,
                loggerCtx,
            )
        }
    }

    private async getPaymentByTransactionId(
        ctx: RequestContext,
        transactionId: string,
    ): Promise<Payment | undefined> {
        const payment = await this.connection
            .getRepository(ctx, Payment)
            .findOne({
                where: { transactionId },
                relations: ["order", "order.payments", "refunds"],
            })

        if (!payment) {
            Logger.warn(
                `There isn't a payment related with the transaction ID ${transactionId}`,
                loggerCtx,
            )
            return
        }

        return payment
    }

    private async getMpesaConfig(ctx: RequestContext): Promise<MpesaConfig> {
        const paymentMethod = await this.connection
            .getRepository(ctx, PaymentMethod)
            .findOne({
                where: { code: mpesaPaymentMethodHandler.code },
            })

        if (!paymentMethod) {
            Logger.error("Mpesa payment method not found", loggerCtx)
            throw new Error("Mpesa payment method not found")
        }

        const config = Object.fromEntries(
            (
                paymentMethod.handler.args as { name: string; value: unknown }[]
            ).map(({ name, value }) => [name, value]),
        ) as unknown as MpesaConfig

        return config
    }

    private async getRequestClient(
        config: MpesaConfig,
    ): Promise<AxiosInstance> {
        const accessToken = await this.getAccessToken(config)

        return axios.create({
            baseURL: `${this.getBaseUrl(config)}/mpesa`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }

    private getBaseUrl(config: MpesaConfig): string {
        return config.environment === "sandbox"
            ? SANDBOX_BASE_URL
            : LIVE_BASE_URL
    }

    private getCurrentTimestamp(): string {
        const now = new Date()
        const year = now.getFullYear()
        const month = (now.getMonth() + 1).toString().padStart(2, "0")
        const day = now.getDate().toString().padStart(2, "0")
        const hours = now.getHours().toString().padStart(2, "0")
        const minutes = now.getMinutes().toString().padStart(2, "0")
        const seconds = now.getSeconds().toString().padStart(2, "0")

        return `${year}${month}${day}${hours}${minutes}${seconds}`
    }

    private getLnmPassword(config: MpesaConfig, timestamp: string): string {
        const { shortCode, passkey } = config
        return Buffer.from(`${shortCode}${passkey}${timestamp}`).toString(
            "base64",
        )
    }

    private async getAccessToken(config: MpesaConfig): Promise<string> {
        const cacheKey = `${config.consumerKey}:${config.environment}`
        const cached = this._accessTokenCache.get(cacheKey)

        if (cached && cached.expiryDate > new Date()) {
            return cached.token
        }

        const { consumerKey, consumerSecret } = config
        const url = `${this.getBaseUrl(config)}/oauth/v1/generate?grant_type=client_credentials`
        const auth = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`

        try {
            const { data } = await axios.get<TokenResponse>(url, {
                headers: { Authorization: auth },
            })

            const expiryDate = new Date()
            expiryDate.setSeconds(
                expiryDate.getSeconds() + parseInt(data.expires_in) - 60,
            )

            this._accessTokenCache.set(cacheKey, {
                token: data.access_token,
                expiryDate,
            })

            return data.access_token
        } catch (error) {
            Logger.error(
                "Could not authenticate to the Mpesa API. Please check your consumer key, secret and environment configuration.",
                loggerCtx,
            )
            if (error instanceof AxiosError) {
                Logger.error(
                    JSON.stringify(error.response?.data, null, 2),
                    loggerCtx,
                )
            }
            return ""
        }
    }

    private getSecurityCredential(config: MpesaConfig): string {
        const passwordBuffer = Buffer.from(config.initiatorPassword)
        const cert = new X509Certificate(
            this.rebuildPemFromSingleLineCert(config.apiCertificate),
        )

        const encryptedPassword = crypto.publicEncrypt(
            {
                key: cert.publicKey,
                padding: crypto.constants.RSA_PKCS1_PADDING,
            },
            passwordBuffer,
        )
        return encryptedPassword.toString("base64")
    }

    private rebuildPemFromSingleLineCert(input: string): string {
        let s = String(input).trim()
        s = s.replace(/\\n/g, "\n")

        s = s
            .replace(/-----BEGIN CERTIFICATE-----/g, "")
            .replace(/-----END CERTIFICATE-----/g, "")

        const base64Only = s.replace(/\s+/g, "")

        if (!/^[A-Za-z0-9+/=]+$/.test(base64Only) || base64Only.length < 100) {
            throw new Error(
                "Input does not look like a valid base64 certificate payload.",
            )
        }

        const folded = base64Only.match(/.{1,64}/g)!.join("\n")

        return `-----BEGIN CERTIFICATE-----\n${folded}\n-----END CERTIFICATE-----\n`
    }
}
