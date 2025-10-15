import crypto, { X509Certificate } from "crypto"

import { Injectable } from "@nestjs/common"
import {
    CreateRefundResult,
    Logger,
    OrderService,
    Payment,
    PaymentMethod,
    Refund,
    RequestContext,
    TransactionalConnection,
} from "@vendure/core"
import axios, { AxiosError, AxiosInstance } from "axios"

import {
    LIVE_BASE_URL,
    REVERSAL_CALLBACK_ENDPOINT,
    SANDBOX_BASE_URL,
    STK_PUSH_CALLBACK_ENDPOINT,
    loggerCtx,
} from "../constants"
import {
    MpesaConfig,
    MpesaPaymentStatus,
    MpesaTransactionVerification,
    ReversalResponse,
    STKPushResponse,
    STKStatusResponse,
    TokenResponse,
} from "../types"

@Injectable()
export class MpesaService {
    private _accessTokenCache = new Map<
        string,
        { token: string; expiryDate: Date }
    >()

    constructor(
        private connection: TransactionalConnection,
        private orderService: OrderService,
    ) {}

    async initiateStkPush(
        config: MpesaConfig,
        amount: number,
        phoneNumber: string,
        orderCode: string,
    ) {
        const client = await this.getRequestClient(config)

        const { shortCodeType } = config
        const transactionType =
            shortCodeType === "paybill"
                ? "CustomerPayBillOnline"
                : "CustomerBuyGoodsOnline"
        const timestamp = this.getCurrentTimestamp()

        try {
            const { data } = await client.post<STKPushResponse>(
                "/stkpush/v1/processrequest",
                {
                    BusinessShortCode: config.shortCode,
                    Password: this.getLnmPassword(config, timestamp),
                    Timestamp: timestamp,
                    TransactionType: transactionType,
                    Amount: amount,
                    PartyA: phoneNumber,
                    PartyB: config.shortCode,
                    PhoneNumber: phoneNumber,
                    CallBackURL: `${config.vendureHost}/${STK_PUSH_CALLBACK_ENDPOINT}`,
                    AccountReference: orderCode,
                    TransactionDesc: `${orderCode} Mpesa Payment`,
                },
            )

            return data
        } catch (error) {
            Logger.error("Could not initiate STK push", loggerCtx)
            if (error instanceof AxiosError) {
                Logger.error(
                    JSON.stringify(error.response?.data, null, 2),
                    loggerCtx,
                )
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

        if (!payment) {
            return {
                status: MpesaPaymentStatus.NOT_FOUND,
                transactionId,
                message: "No payment found for this transaction ID",
            }
        }

        const paymentState = payment.state

        let status: MpesaPaymentStatus
        let message: string

        switch (paymentState) {
            case "Settled":
                status = MpesaPaymentStatus.SUCCESS
                message = "Payment has been successfully completed"
                break
            case "Declined":
            case "Error":
            case "Cancelled":
                status = MpesaPaymentStatus.FAILED
                message = "Payment has failed"
                break
            case "Authorized":
            case "Created":
                status = MpesaPaymentStatus.PENDING
                message = "Payment is still pending"
                break
            default:
                status = MpesaPaymentStatus.PENDING
                message = `Payment is in ${paymentState} state`
                break
        }

        return {
            status,
            transactionId,
            message,
            paymentState,
        }
    }

    async handleStkPushCallback(
        ctx: RequestContext,
        transactionId: string,
        mpesaReceiptNumber?: string,
    ) {
        const payment = await this.getPaymentByTransactionId(ctx, transactionId)
        if (!payment) {
            Logger.warn(
                `No payment found for transaction ${transactionId}`,
                loggerCtx,
            )
            return
        }

        const config = await this.getPaymentMethodConfig(ctx, payment)
        if (!config) {
            Logger.error(
                `No payment method config found for payment ${payment.id}`,
                loggerCtx,
            )
            return
        }

        const { isSuccessful, message } = await this.checkTransactionStatus(
            config,
            transactionId,
        )

        if (isSuccessful) {
            Logger.info(
                `Transaction ${transactionId} was successful`,
                loggerCtx,
            )

            if (mpesaReceiptNumber) {
                payment.metadata = {
                    ...payment.metadata,
                    mpesaReceiptNumber,
                }
                await this.connection.getRepository(ctx, Payment).save(payment)
            }

            await this.orderService.settlePayment(ctx, payment.id)
        } else {
            Logger.info(
                `Transaction ${transactionId} was not successful. ${message}`,
                loggerCtx,
            )

            await this.orderService.cancelPayment(ctx, payment.id)
            await this.orderService.transitionToState(
                ctx,
                payment.order.id,
                "ArrangingAdditionalPayment",
            )
        }
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

        const config = await this.getPaymentMethodConfig(ctx, payment)
        if (!config) {
            Logger.error(
                `No payment method config found for payment ${payment.id}`,
                loggerCtx,
            )
            return {
                state: "Failed",
                transactionId: "",
                metadata: {
                    errorMessage: "No payment method config found for payment",
                },
            }
        }

        const client = await this.getRequestClient(config)
        try {
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
                    TransactionID: payment.metadata.mpesaReceiptNumber,
                    Amount: Math.trunc(payment.amount / 100),
                    Occasion: reason,
                },
            )

            return {
                state: "Pending",
                transactionId: data.OriginatorConversationID,
                metadata: {},
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
                transactionId: "",
                metadata: {
                    errorMessage: "Could not reverse payment",
                },
            }
        }
    }

    async handleReversalCallback(
        ctx: RequestContext,
        transactionId: string,
        resultType: "0" | "1",
    ) {
        const refund = await this.connection
            .getRepository(ctx, Refund)
            .findOne({
                where: { transactionId },
            })

        if (!refund) {
            Logger.warn(
                `No refund found for transaction ${transactionId}`,
                loggerCtx,
            )
            return
        }

        if (resultType === "0") {
            await this.orderService.settleRefund(ctx, {
                id: refund.id,
                transactionId,
            })
            Logger.info(`Refund ${transactionId} settled`, loggerCtx)
        } else {
            await this.orderService.transitionRefundToState(
                ctx,
                refund.id,
                "Failed",
            )
            Logger.info(`Refund ${transactionId} failed`, loggerCtx)
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
            Logger.error(
                `There isn't a payment related with the transaction ID ${transactionId}`,
                loggerCtx,
            )
            return
        }

        return payment
    }

    private async getPaymentMethodConfig(
        ctx: RequestContext,
        payment: Payment,
    ): Promise<MpesaConfig | undefined> {
        const paymentWithMethod = await this.connection
            .getRepository(ctx, Payment)
            .findOne({
                where: { id: payment.id },
            })

        if (!paymentWithMethod?.method) {
            return undefined
        }

        const paymentMethodCode = paymentWithMethod.method

        const paymentMethod = await this.connection
            .getRepository(ctx, PaymentMethod)
            .findOne({
                where: { code: paymentMethodCode },
            })

        if (!paymentMethod) {
            return undefined
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
