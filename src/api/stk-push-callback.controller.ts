import { Body, Controller, Post } from "@nestjs/common"
import {
    ChannelService,
    LanguageCode,
    Logger,
    RequestContext,
} from "@vendure/core"

import { STK_PUSH_CALLBACK_ENDPOINT, loggerCtx } from "../constants"
import { MpesaService } from "../service/mpesa.service"
import { STKCallbackPayload } from "../types"

@Controller(STK_PUSH_CALLBACK_ENDPOINT)
export class StkPushCallbackController {
    constructor(
        private channelService: ChannelService,
        private mpesaService: MpesaService,
    ) {}

    @Post()
    async handleCallback(@Body() payload: STKCallbackPayload) {
        const { CheckoutRequestID, ResultDesc, ResultCode, CallbackMetadata } =
            payload.Body.stkCallback

        const mpesaReceiptNumber = CallbackMetadata?.Item.find(
            item => item.Name === "MpesaReceiptNumber",
        )?.Value

        Logger.info(
            `STK Push callback received for transaction ${CheckoutRequestID}, status: ${ResultCode}`,
            loggerCtx,
        )
        Logger.info(ResultDesc, loggerCtx)

        const ctx = await this.createRequestContext()
        await this.mpesaService.handleStkPushCallback(
            ctx,
            CheckoutRequestID,
            mpesaReceiptNumber,
        )
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
