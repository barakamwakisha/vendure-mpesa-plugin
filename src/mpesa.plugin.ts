import { PluginCommonModule, VendurePlugin } from "@vendure/core"

import { shopApiExtensions } from "./api/api-extensions"
import { MpesaShopResolver } from "./api/mpesa-shop.resolver"
import { ReversalCallbackController } from "./api/reversal-callback.controller"
import { StkPushCallbackController } from "./api/stk-push-callback.controller"
import { configuration } from "./config/runtime-config"
import { MpesaService } from "./service/mpesa.service"
import {
    MPESA_STK_PUSH_CALLBACK_IP_ALLOWLIST,
    STK_PUSH_CALLBACK_ALLOWLIST,
} from "./constants"

export interface MpesaPluginOptions {
    /** Extra IPs to allow for STK push callback (e.g. 127.0.0.1, ::1 for local/testing). */
    stkPushCallbackAdditionalIps?: string[]
}

/**
 * @description
 * A plugin that enables M-Pesa payments via the Safaricom Daraja API.
 *
 * The plugin adds a payment method handler that can be configured with M-Pesa credentials
 * directly in the Vendure Admin UI.
 *
 * @example
 * ```ts
 * import { MpesaPlugin } from 'vendure-mpesa-plugin';
 *
 * export const config: VendureConfig = {
 *   plugins: [
 *     MpesaPlugin,
 *     // or with options: MpesaPlugin.init({ stkPushCallbackAdditionalIps: ['127.0.0.1', '::1'] }),
 *   ],
 * };
 * ```
 *
 * After adding the plugin, create a payment method in the Admin UI with:
 * - Handler: "mpesa"
 * - Configure your M-Pesa credentials in the payment method args
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [StkPushCallbackController, ReversalCallbackController],
    compatibility: ">=3.4.1",
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [MpesaShopResolver],
    },
    providers: [
        MpesaService,
        {
            provide: STK_PUSH_CALLBACK_ALLOWLIST,
            useFactory: (): readonly string[] => [
                ...MPESA_STK_PUSH_CALLBACK_IP_ALLOWLIST,
                ...(MpesaPlugin.options?.stkPushCallbackAdditionalIps ?? []),
            ],
        },
    ],
    configuration,
})
export class MpesaPlugin {
    static options: MpesaPluginOptions | undefined

    static init(options: MpesaPluginOptions): typeof MpesaPlugin {
        MpesaPlugin.options = options
        return MpesaPlugin
    }
}
