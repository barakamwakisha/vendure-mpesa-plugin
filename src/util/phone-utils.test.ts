import { formatPhoneNumber } from "./phone-utils"

describe("phone-utils", () => {
    it("formats phone number", () => {
        expect(formatPhoneNumber("0712345678")).toBe("254712345678")
        expect(formatPhoneNumber("+254112345678")).toBe("254112345678")
        expect(formatPhoneNumber("712345678")).toBe("254712345678")
    })
})
