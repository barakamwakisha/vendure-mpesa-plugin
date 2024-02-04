import { Controller, Body, Post, Get } from '@nestjs/common';
import { STKCallbackPayload } from '../types';
import { CALLBACK_URL_ENDPOINT } from '../constants';
import { MpesaService } from '../service/mpesa.service';
import { ChannelService, LanguageCode, Logger, RequestContext } from '@vendure/core';

@Controller(CALLBACK_URL_ENDPOINT)
export class CallbackWebhookController {
    constructor(
        private channelService: ChannelService,
        private mpesaService: MpesaService
    ) { }

    @Post()
    async handleCallback(@Body() payload: STKCallbackPayload) {
        const { CheckoutRequestID, ResultCode } = payload.Body.stkCallback;
        Logger.info(`Received Mpesa callback for transaction ${CheckoutRequestID} with status ${ResultCode}`);

        const ctx = await this.createRequestContext();
        this.mpesaService.updateTransactionStatus(ctx, CheckoutRequestID);
    }

    private async createRequestContext(): Promise<RequestContext> {
        const channel = await this.channelService.getDefaultChannel();
        return new RequestContext({
            apiType: 'admin',
            isAuthorized: true,
            authorizedAsOwnerOnly: false,
            channel,
            languageCode: LanguageCode.en
        });
    }
}