import { Order } from "@vendure/core"
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js"

export function formatPhoneNumber(number: string) {
    if (!isValidPhoneNumber(number, "KE")) return

    const { countryCallingCode, nationalNumber } = parsePhoneNumber(
        number,
        "KE",
    )
    return `${countryCallingCode}${nationalNumber}`
}

export function isSafaricomNumber(number: string): boolean {
    const safaricomRegex =
        /^(?:\+254|254|0)?(7[0124578][0-9]|74[0-6]|75[7-9]|76[89]|790|11[0-5])\d{6}$/
    return safaricomRegex.test(number)
}

export function getPhoneNumberFromOrder(order: Order): string | undefined {
    const { billingAddress, shippingAddress, customer } = order
    const number =
        billingAddress.phoneNumber ||
        shippingAddress.phoneNumber ||
        customer?.phoneNumber

    if (number) return formatPhoneNumber(number)
}
