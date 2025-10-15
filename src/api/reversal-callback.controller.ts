import { Body, Controller, Post } from "@nestjs/common"
import {
    ChannelService,
    LanguageCode,
    Logger,
    RequestContext,
} from "@vendure/core"

import { REVERSAL_CALLBACK_ENDPOINT, loggerCtx } from "../constants"
import { MpesaService } from "../service/mpesa.service"
import { ReversalCallbackPayload } from "../types"

@Controller(REVERSAL_CALLBACK_ENDPOINT)
export class ReversalCallbackController {
    constructor(
        private channelService: ChannelService,
        private mpesaService: MpesaService,
    ) {}

    @Post()
    async handleCallback(@Body() payload: ReversalCallbackPayload) {
        const { ResultType, ResultDesc, TransactionID } = payload.Result

        Logger.info(
            `Reversal callback ${ResultType}: Transaction ${TransactionID} ${ResultDesc}`,
            loggerCtx,
        )

        const ctx = await this.createRequestContext()
        await this.mpesaService.handleReversalCallback(ctx, payload)
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
