import axios, { AxiosInstance } from "axios";
import { Inject, Injectable } from "@nestjs/common";
import { Logger, Order, PLUGIN_INIT_OPTIONS } from "@vendure/core";
import { MpesaPluginOptions } from "../mpesa.plugin";
import { LIVE_BASE_URL, SANDBOX_BASE_URL, loggerCtx } from "../constants";
import { TokenResponse } from "../types";

@Injectable()
export class MpesaService {
    private _accessToken: string;
    private _accessTokenExpiryDate: Date;

    constructor(
        @Inject(PLUGIN_INIT_OPTIONS) private pluginOptions: MpesaPluginOptions
    ) { }

    private getBaseUrl(): string {
        return this.pluginOptions.environment === 'sandbox' ? SANDBOX_BASE_URL : LIVE_BASE_URL;
    }

    private async getAccessToken(): Promise<string> {
        if (this._accessToken && this._accessTokenExpiryDate && this._accessTokenExpiryDate > new Date()) {
            return this._accessToken;
        }

        const { consumerKey, consumerSecret } = this.pluginOptions;
        const url = `${this.getBaseUrl()}/oauth/v1/generate?grant_type=client_credentials`;
        const auth = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`;

        try {
            const { data } = await axios.get<TokenResponse>(url, { headers: { Authorization: auth } });

            this._accessToken = data.access_token;
            this._accessTokenExpiryDate = new Date();
            this._accessTokenExpiryDate.setSeconds(this._accessTokenExpiryDate.getSeconds() + parseInt(data.expires_in) - 60);

            return data.access_token;
        } catch (err) {
            Logger.error('Could not authenticate to the Mpesa API. Please check your consumer key, secret and environment configuration.', loggerCtx);
            return '';
        }
    }

    private async getRequestClient(): Promise<AxiosInstance> {
        const accessToken = await this.getAccessToken();
        return axios.create({
            baseURL: `${this.getBaseUrl()}/mpesa`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }

    async initiateStkPush(amount: number, phoneNumber: string, orderCode: string) {
        const client = this.getRequestClient();

        const { shortCode, passkey } = this.pluginOptions;
    }
}