import { Order } from "@vendure/core"

import {
    formatPhoneNumber,
    getPhoneNumberFromOrder,
    isSafaricomNumber,
} from "./phone-utils"

describe("phone-utils", () => {
    it("formats phone number", () => {
        expect(formatPhoneNumber("0712345678")).toBe("254712345678")
        expect(formatPhoneNumber("+254112345678")).toBe("254112345678")
        expect(formatPhoneNumber("712345678")).toBe("254712345678")
    })

    it("checks if number belongs to Safaricom", () => {
        expect(isSafaricomNumber("0712345678")).toBe(true)
        expect(isSafaricomNumber("110345678")).toBe(true)
        expect(isSafaricomNumber("+254730123456")).toBe(false)
        expect(isSafaricomNumber("0791123456")).toBe(false)
    })

    it("gets phone number from order in correct order", () => {
        const order = {
            customer: {
                phoneNumber: "0714345678",
            },
            billingAddress: {
                phoneNumber: "0712345678",
            },
            shippingAddress: {
                phoneNumber: "0713345678",
            },
        } as Order
        expect(getPhoneNumberFromOrder(order)).toBe("254712345678")
    })
})
