import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js"

export function formatPhoneNumber(number: string) {
    if (!isValidPhoneNumber(number, "KE")) return

    const { countryCallingCode, nationalNumber } = parsePhoneNumber(
        number,
        "KE",
    )
    return `${countryCallingCode}${nationalNumber}`
}
