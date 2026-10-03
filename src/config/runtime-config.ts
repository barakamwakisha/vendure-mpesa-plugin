import { PluginConfigurationFn } from "@vendure/core"

import { mpesaPaymentMethodHandler } from "./mpesa.handler"
import { mpesaRefundProcess } from "./mpesa-refund-process"

export const configuration: PluginConfigurationFn = config => {
    config.paymentOptions.paymentMethodHandlers.push(mpesaPaymentMethodHandler)
    config.paymentOptions.refundProcess?.push(mpesaRefundProcess)

    config.customFields.Order.push({
        name: "mpesaCheckoutRequestID",
        type: "string",
        nullable: true,
        internal: true,
    })

    return config
}
