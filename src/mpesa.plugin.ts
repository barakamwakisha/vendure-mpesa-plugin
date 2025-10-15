import { PluginCommonModule, VendurePlugin } from "@vendure/core"

import { shopApiExtensions } from "./api/api-extensions"
import { MpesaShopResolver } from "./api/mpesa-shop.resolver"
import { ReversalCallbackController } from "./api/reversal-callback.controller"
import { StkPushCallbackController } from "./api/stk-push-callback.controller"
import { mpesaEligibilityChecker } from "./config/mpesa-eligibility-checker"
import { mpesaPaymentMethodHandler } from "./config/mpesa.handler"
import { MpesaService } from "./service/mpesa.service"

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
 *     // ... other plugins
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
    configuration: config => {
        config.paymentOptions.paymentMethodHandlers.push(
            mpesaPaymentMethodHandler,
        )
        config.paymentOptions.paymentMethodEligibilityCheckers?.push(
            mpesaEligibilityChecker,
        )
        return config
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [MpesaShopResolver],
    },
    providers: [MpesaService],
})
export class MpesaPlugin {}
