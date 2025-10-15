import { PluginConfigurationFn } from "@vendure/core"

import { mpesaPaymentMethodHandler } from "./mpesa.handler"

export const configuration: PluginConfigurationFn = config => {
    config.paymentOptions.paymentMethodHandlers.push(mpesaPaymentMethodHandler)

    config.customFields.Order.push({
        name: "mpesaCheckoutRequestID",
        type: "string",
        nullable: true,
        internal: true,
    })

    return config
}
