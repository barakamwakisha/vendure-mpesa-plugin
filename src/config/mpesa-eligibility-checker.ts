import { LanguageCode, PaymentMethodEligibilityChecker } from "@vendure/core"

import {
    formatPhoneNumber,
    getPhoneNumberFromOrder,
    isSafaricomNumber
} from "../util/phone-utils"

export const mpesaEligibilityChecker = new PaymentMethodEligibilityChecker({
    code: "mpesa-eligibility-checker",
    description: [
        {
            languageCode: LanguageCode.en,
            value: "Check whether Mpesa supports the payment"
        }
    ],
    args: {},
    check: async (_, order) => {
        const totalLessThanThreshold = order.totalWithTax < 50000000
        if (!totalLessThanThreshold) return false

        const customerPhoneNumber = getPhoneNumberFromOrder(order)
        if (!customerPhoneNumber) return false

        const formattedNumber = formatPhoneNumber(customerPhoneNumber)
        if (!formattedNumber) return false

        const isMpesaNumber = isSafaricomNumber(formattedNumber)
        if (!isMpesaNumber) return false

        return true
    }
})
