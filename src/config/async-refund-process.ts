import { RefundProcess } from "@vendure/core/dist/config/refund/refund-process"

export const asyncRefundProcess: RefundProcess<"Created"> = {
    transitions: {
        Created: {
            to: ["Pending", "Failed", "Settled"],
            mergeStrategy: "replace",
        },
    },
}
