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
        try {
            const amountInShillings = amount / 100

            // Phone number is guaranteed to be present in the eligibility checker
            const phoneNumber = getPhoneNumberFromOrder(order)!
            const { CheckoutRequestID } = await mpesaService.initiateStkPush(
                amountInShillings,
                phoneNumber,
                order.code
            )

            return {
                amount: order.total,
                state: "Created",
                transactionId: CheckoutRequestID
            }
        } catch (err) {
            return {
                amount: order.total,
                state: "Declined",
                errorMessage: (err as Error).message
            }
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
