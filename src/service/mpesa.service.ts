import { Inject, Injectable } from "@nestjs/common"
import {
    Logger,
    OrderService,
    Payment,
    PaymentService,
    RequestContext,
    TransactionalConnection
} from "@vendure/core"
import { PaymentStateMachine } from "@vendure/core/dist/service/helpers/payment-state-machine/payment-state-machine"
import axios, { AxiosInstance } from "axios"

import {
    CALLBACK_URL_ENDPOINT,
    LIVE_BASE_URL,
    MPESA_PLUGIN_INIT_OPTIONS,
    SANDBOX_BASE_URL,
    loggerCtx
} from "../constants"
import { MpesaPluginOptions } from "../mpesa.plugin"
import { STKPushResponse, STKStatusResponse, TokenResponse } from "../types"

@Injectable()
export class MpesaService {
    private _accessToken: string
    private _accessTokenExpiryDate: Date

    constructor(
        @Inject(MPESA_PLUGIN_INIT_OPTIONS)
        private pluginOptions: MpesaPluginOptions,
        private connection: TransactionalConnection,
        private paymentStateMachine: PaymentStateMachine,
        private orderService: OrderService,
        private paymentService: PaymentService
    ) {}

    async initiateStkPush(
        amount: number,
        phoneNumber: string,
        orderCode: string
    ) {
        const client = await this.getRequestClient()

        const { shortCodeType } = this.pluginOptions
        const transactionType =
            shortCodeType === "paybill"
                ? "CustomerPayBillOnline"
                : "CustomerBuyGoodsOnline"
        const timestamp = this.getCurrentTimestamp()

        try {
            const { data } = await client.post<STKPushResponse>(
                "/stkpush/v1/processrequest",
                {
                    BusinessShortCode: this.pluginOptions.shortCode,
                    Password: this.getTransactionPassword(timestamp),
                    Timestamp: timestamp,
                    TransactionType: transactionType,
                    Amount: amount,
                    PartyA: phoneNumber,
                    PartyB: this.pluginOptions.shortCode,
                    PhoneNumber: phoneNumber,
                    CallBackURL: this.getCallBackUrl(),
                    AccountReference: orderCode,
                    TransactionDesc: "Vendure Order Payment"
                }
            )

            return data
        } catch (err) {
            Logger.error("Could not initiate STK push", loggerCtx)
        }
    }

    async checkTransactionStatus(transactionId: string) {
        const client = await this.getRequestClient()

        const { shortCode } = this.pluginOptions
        const timestamp = this.getCurrentTimestamp()
        const password = this.getTransactionPassword(timestamp)

        try {
            const { data } = await client.post<STKStatusResponse>(
                "/stkpushquery/v1/query",
                {
                    BusinessShortCode: shortCode,
                    Password: password,
                    Timestamp: timestamp,
                    CheckoutRequestID: transactionId
                }
            )

            const success = data.ResultCode === "0" && data.ResponseCode === "0"

            return {
                success
            }
        } catch (err) {
            Logger.error(
                `Couldn't query transaction ${transactionId} status`,
                loggerCtx
            )
            return {
                success: false
            }
        }
    }

    async settlePayment(ctx: RequestContext, transactionId: string) {
        const transactionStatus =
            await this.checkTransactionStatus(transactionId)

        if (!transactionStatus.success) {
            Logger.info(
                `Transaction ${transactionId} was not successful`,
                loggerCtx
            )
            return transactionStatus
        }

        const payment = await this.getPaymentByTransactionId(ctx, transactionId)

        if (payment) {
            await this.orderService.settlePayment(ctx, payment.id)
        }

        return transactionStatus
    }

    private getBaseUrl(): string {
        return this.pluginOptions.environment === "sandbox"
            ? SANDBOX_BASE_URL
            : LIVE_BASE_URL
    }

    private getCallBackUrl(): string {
        return `${this.pluginOptions.vendureHost}/${CALLBACK_URL_ENDPOINT}`
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

    private getTransactionPassword(timestamp: string): string {
        const { shortCode, passkey } = this.pluginOptions
        return Buffer.from(`${shortCode}${passkey}${timestamp}`).toString(
            "base64"
        )
    }

    private async getAccessToken(): Promise<string> {
        if (
            this._accessToken &&
            this._accessTokenExpiryDate &&
            this._accessTokenExpiryDate > new Date()
        ) {
            return this._accessToken
        }

        const { consumerKey, consumerSecret } = this.pluginOptions
        const url = `${this.getBaseUrl()}/oauth/v1/generate?grant_type=client_credentials`
        const auth = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`

        try {
            const { data } = await axios.get<TokenResponse>(url, {
                headers: { Authorization: auth }
            })

            this._accessToken = data.access_token
            this._accessTokenExpiryDate = new Date()
            this._accessTokenExpiryDate.setSeconds(
                this._accessTokenExpiryDate.getSeconds() +
                    parseInt(data.expires_in) -
                    60
            )

            return data.access_token
        } catch (err) {
            Logger.error(
                "Could not authenticate to the Mpesa API. Please check your consumer key, secret and environment configuration.",
                loggerCtx
            )
            return ""
        }
    }

    private async getRequestClient(): Promise<AxiosInstance> {
        const accessToken = await this.getAccessToken()
        return axios.create({
            baseURL: `${this.getBaseUrl()}/mpesa`,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    private async getPaymentByTransactionId(
        ctx: RequestContext,
        transactionId: string
    ): Promise<Payment | undefined> {
        const payment = await this.connection
            .getRepository(ctx, Payment)
            .findOne({
                where: { transactionId },
                relations: ["order", "order.payments", "refunds"]
            })

        if (!payment) {
            Logger.error(
                `There isn't a payment related with the transaction ID ${transactionId}`,
                loggerCtx
            )
            return
        }

        return payment
    }
}
