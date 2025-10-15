import { PluginConfigurationFn } from "@vendure/core"

import { asyncRefundProcess } from "./async-refund-process"
import { mpesaPaymentMethodHandler } from "./mpesa.handler"

export const configuration: PluginConfigurationFn = config => {
    config.paymentOptions.paymentMethodHandlers.push(mpesaPaymentMethodHandler)

    config.customFields.Order.push({
        name: "mpesaCheckoutRequestID",
        type: "string",
        nullable: true,
        internal: true,
    })

    config.paymentOptions.refundProcess?.push(asyncRefundProcess)

    return config
}
