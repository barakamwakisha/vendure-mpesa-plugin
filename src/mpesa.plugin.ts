import { PluginCommonModule, VendurePlugin } from "@vendure/core"

import { CallbackWebhookController } from "./api/callback-webhook.controller"
import { mpesaEligibilityChecker } from "./config/mpesa-eligibility-checker"
import { mpesaPaymentMethodHandler } from "./config/mpesa.handler"
import { MPESA_PLUGIN_INIT_OPTIONS } from "./constants"
import { MpesaService } from "./service/mpesa.service"

/**
 * @description
 * Configuration options for the Mpesa payments plugin.
 */
export interface MpesaPluginOptions {
    /**
     * The consumer key is generated by Safaricom on registration of the app on the developer portal.
     * @see https://developer.safaricom.co.ke/APIs/Authorization
     **/
    consumerKey: string

    /**
     * The consumer secret is generated by Safaricom on registration of the app on the developer portal.
     * @see https://developer.safaricom.co.ke/APIs/Authorization
     **/
    consumerSecret: string

    /**
     * The Mpesa Daraja API environment, sandbox or live
     */
    environment: "sandbox" | "live"

    /**
     * @description
     * The passkey is generated by Safaricom.
     * @see https://developer.safaricom.co.ke/APIs/MpesaExpressSimulate
     */
    passkey: string

    /**
     * @description
     * The unique number that is allocated to a pay bill or buy goods organization
     * @see https://developer.safaricom.co.ke/Documentation
     */
    shortCode: string

    /**
     * @description
     * The type of the shortcode, either paybill or till
     */
    shortCodeType: "till" | "paybill"

    /**
     * @description
     * The host of your Vendure server, e.g. `'https://my-vendure.io'`.
     * This is used by Mpesa to send webhook events to the Vendure server
     */
    vendureHost: string
}

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [CallbackWebhookController],
    configuration: config => {
        config.paymentOptions.paymentMethodHandlers.push(
            mpesaPaymentMethodHandler
        )
        config.paymentOptions.paymentMethodEligibilityCheckers?.push(
            mpesaEligibilityChecker
        )
        return config
    },
    providers: [
        {
            provide: MPESA_PLUGIN_INIT_OPTIONS,
            useFactory: () => MpesaPlugin.options
        },
        MpesaService
    ]
})
export class MpesaPlugin {
    static options: MpesaPluginOptions

    /**
     * Initializes the plugin
     */
    static init(options: MpesaPluginOptions) {
        this.options = options
        return MpesaPlugin
    }
}
