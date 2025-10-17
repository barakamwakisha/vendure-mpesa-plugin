import { Body, Controller, Post } from "@nestjs/common"
import {
    ChannelService,
    LanguageCode,
    Logger,
    RequestContext,
} from "@vendure/core"

import { STK_PUSH_CALLBACK_ENDPOINT, loggerCtx } from "../constants"
import { MpesaService } from "../service/mpesa.service"
import { type STKCallbackPayload } from "../types"

@Controller(STK_PUSH_CALLBACK_ENDPOINT)
export class StkPushCallbackController {
    constructor(
        private channelService: ChannelService,
        private mpesaService: MpesaService,
    ) {}

    @Post()
    async handleCallback(@Body() payload: STKCallbackPayload) {
        const { CheckoutRequestID, ResultCode, ResultDesc } =
            payload.Body.stkCallback

        Logger.info(
            `STK Push callback ${ResultCode}: Transaction ${CheckoutRequestID} ${ResultDesc}`,
            loggerCtx,
        )

        const ctx = await this.createRequestContext()
        await this.mpesaService.handleStkPushCallback(ctx, payload)
    }

    private async createRequestContext(): Promise<RequestContext> {
        const channel = await this.channelService.getDefaultChannel()
        return new RequestContext({
            apiType: "admin",
            isAuthorized: true,
            authorizedAsOwnerOnly: false,
            channel,
            languageCode: LanguageCode.en,
        })
    }
}
