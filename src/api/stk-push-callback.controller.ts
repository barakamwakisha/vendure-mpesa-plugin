import {
    Body,
    Controller,
    ForbiddenException,
    Inject,
    Post,
    Req,
} from "@nestjs/common"
import {
    ChannelService,
    LanguageCode,
    Logger,
    RequestContext,
} from "@vendure/core"
import * as express from "express"

import {
    STK_PUSH_CALLBACK_ENDPOINT,
    STK_PUSH_CALLBACK_ALLOWLIST,
    loggerCtx,
} from "../constants"
import { MpesaService } from "../service/mpesa.service"
import { type STKCallbackPayload } from "../types"

function getClientIp(req: express.Request): string {
    const forwarded = req.headers["x-forwarded-for"]
    if (typeof forwarded === "string") {
        const first = forwarded.split(",")[0]
        return first?.trim() ?? ""
    }
    return req.ip ?? req.socket?.remoteAddress ?? ""
}

@Controller(STK_PUSH_CALLBACK_ENDPOINT)
export class StkPushCallbackController {
    constructor(
        private channelService: ChannelService,
        private mpesaService: MpesaService,
        @Inject(STK_PUSH_CALLBACK_ALLOWLIST)
        private allowlist: readonly string[],
    ) {}

    @Post()
    async handleCallback(
        @Req() req: express.Request,
        @Body() payload: STKCallbackPayload,
    ) {
        const clientIp = getClientIp(req)
        if (!this.allowlist.includes(clientIp)) {
            Logger.warn(
                `STK Push callback rejected: client IP ${clientIp} not in allowlist`,
                loggerCtx,
            )
            throw new ForbiddenException()
        }

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
