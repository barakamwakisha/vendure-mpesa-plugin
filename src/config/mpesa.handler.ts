import {
    CreatePaymentResult,
    Injector,
    LanguageCode,
    PaymentMethodHandler,
    SettlePaymentErrorResult,
    SettlePaymentResult
} from "@vendure/core"

import { MpesaService } from "../service/mpesa.service"
import { getPhoneNumberFromOrder } from "../util/phone-utils"

let mpesaService: MpesaService

export const mpesaPaymentMethodHandler = new PaymentMethodHandler({
    code: "mpesa",
    description: [
        { languageCode: LanguageCode.en, value: "Lipa na Mpesa Online" }
    ],
    args: {},
    init(injector: Injector) {
        mpesaService = injector.get(MpesaService)
    },

    createPayment: async (_, order, amount): Promise<CreatePaymentResult> => {
        const amountInShillings = Math.ceil(amount / 100)

        // Phone number is guaranteed to be present in the eligibility checker
        const phoneNumber = getPhoneNumberFromOrder(order)!
        const result = await mpesaService.initiateStkPush(
            amountInShillings,
            phoneNumber,
            order.code
        )

        if (!result) {
            return {
                amount: order.total,
                state: "Declined",
                errorMessage: "Could not initiate Mpesa payment."
            }
        }

        return {
            amount: order.total,
            state: "Created",
            transactionId: result.CheckoutRequestID
        }
    },
    settlePayment: async (): Promise<
        SettlePaymentResult | SettlePaymentErrorResult
    > => {
        return {
            success: true
        }
    }
})
