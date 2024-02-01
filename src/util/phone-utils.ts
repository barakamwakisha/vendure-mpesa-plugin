import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';

export function formatPhoneNumber(number: string) {
    if (isValidPhoneNumber(number, 'KE')) return;

    const { countryCallingCode, nationalNumber } = parsePhoneNumber(number, 'KE');
    return `${countryCallingCode}${nationalNumber}`;
}

export function isSafaricomNumber(number: string): boolean {
    const safaricomRegex = /^(?:\+254|254|0)((1|7)(?:(?:[0-9][0-9])|(?:[0-9][0-9][0-9]))[0-9]{6})$/;
    return safaricomRegex.test(number);
}