import { Body, Controller, Post } from "@nestjs/common"
import {
    ChannelService,
    LanguageCode,
    Logger,
    RequestContext
} from "@vendure/core"

import { CALLBACK_URL_ENDPOINT, loggerCtx } from "../constants"
import { MpesaService } from "../service/mpesa.service"
import { STKCallbackPayload } from "../types"

@Controller(CALLBACK_URL_ENDPOINT)
export class CallbackWebhookController {
    constructor(
        private channelService: ChannelService,
        private mpesaService: MpesaService
    ) {}

    @Post()
    async handleCallback(@Body() payload: STKCallbackPayload) {
        const { CheckoutRequestID, ResultCode } = payload.Body.stkCallback
        Logger.info(
            `Mpesa Callback ${CheckoutRequestID}, status: ${ResultCode}`,
            loggerCtx
        )

        const ctx = await this.createRequestContext()
        this.mpesaService.settlePayment(ctx, CheckoutRequestID)
    }

    private async createRequestContext(): Promise<RequestContext> {
        const channel = await this.channelService.getDefaultChannel()
        return new RequestContext({
            apiType: "admin",
            isAuthorized: true,
            authorizedAsOwnerOnly: false,
            channel,
            languageCode: LanguageCode.en
        })
    }
}
