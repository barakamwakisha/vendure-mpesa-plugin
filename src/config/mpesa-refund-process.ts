import { RefundProcess } from "@vendure/core/dist/config/refund/refund-process"

export const mpesaRefundProcess: RefundProcess<"Validating"> = {
    transitions: {
        Pending: {
            to: ["Validating"],
            mergeStrategy: "merge",
        },
        Validating: {
            to: ["Settled", "Failed"],
            mergeStrategy: "replace",
        },
    },
}
