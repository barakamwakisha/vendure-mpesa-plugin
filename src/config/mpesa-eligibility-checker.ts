import {
    LanguageCode,
    Logger,
    PaymentMethodEligibilityChecker
} from "@vendure/core"

import { loggerCtx } from "../constants"
import { getPhoneNumberFromOrder, isSafaricomNumber } from "../util/phone-utils"

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
        if (!totalLessThanThreshold) {
            Logger.info("Order total is greater than KES 500,000", loggerCtx)
            return false
        }

        const customerPhoneNumber = getPhoneNumberFromOrder(order)
        if (!customerPhoneNumber) {
            Logger.info(
                "Could not get valid phone number from order",
                loggerCtx
            )
            return false
        }

        const isMpesaNumber = isSafaricomNumber(customerPhoneNumber)
        if (!isMpesaNumber) {
            Logger.info(
                `Phone number ${customerPhoneNumber} is not a Safaricom number`,
                loggerCtx
            )
            return false
        }

        return true
    }
})
