import {
    CreatePaymentResult,
    Injector,
    LanguageCode,
    PaymentMethodHandler,
} from "@vendure/core"

import { MpesaService } from "../service/mpesa.service"
import { MpesaConfig } from "../types"
import { getPhoneNumberFromOrder } from "../util/phone-utils"

let mpesaService: MpesaService

export const mpesaPaymentMethodHandler = new PaymentMethodHandler({
    code: "mpesa",
    description: [
        { languageCode: LanguageCode.en, value: "Lipa na Mpesa Online" },
    ],
    args: {
        consumerKey: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Consumer Key",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "The consumer key from Safaricom Developer Portal",
                },
            ],
            ui: {
                component: "password-form-input",
            },
        },
        consumerSecret: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Consumer Secret",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "The consumer secret from Safaricom Developer Portal",
                },
            ],
            ui: {
                component: "password-form-input",
            },
        },
        environment: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Environment",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "Mpesa API environment (sandbox or live)",
                },
            ],
            ui: {
                component: "select-form-input",
                options: [
                    {
                        value: "sandbox",
                        label: [
                            { languageCode: LanguageCode.en, value: "Sandbox" },
                        ],
                    },
                    {
                        value: "live",
                        label: [
                            { languageCode: LanguageCode.en, value: "Live" },
                        ],
                    },
                ],
            },
        },
        passkey: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Passkey",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "The passkey provided by Safaricom for STK Push",
                },
            ],
            ui: {
                component: "password-form-input",
            },
        },
        shortCode: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Short Code",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "Your Mpesa Paybill or Till number",
                },
            ],
        },
        shortCodeType: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Short Code Type",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "Type of short code (paybill or till)",
                },
            ],
            ui: {
                component: "select-form-input",
                options: [
                    {
                        value: "paybill",
                        label: [
                            { languageCode: LanguageCode.en, value: "Paybill" },
                        ],
                    },
                    {
                        value: "till",
                        label: [
                            { languageCode: LanguageCode.en, value: "Till" },
                        ],
                    },
                ],
            },
        },
        initiatorName: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Initiator Name",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "The initiator name for B2C transactions and reversals",
                },
            ],
        },
        initiatorPassword: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Initiator Password",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "The initiator password for B2C transactions and reversals",
                },
            ],
            ui: {
                component: "password-form-input",
            },
        },
        apiCertificate: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "API Certificate",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "The Mpesa API certificate for security credential encryption. Starts with '-----BEGIN CERTIFICATE-----'. Available on the Safaricom Developer Portal",
                },
            ],
            ui: {
                component: "password-form-input",
            },
        },
        vendureHost: {
            type: "string",
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: "Vendure Host URL",
                },
            ],
            description: [
                {
                    languageCode: LanguageCode.en,
                    value: "Your Vendure server URL (e.g., https://api.my-shop.com)",
                },
            ],
        },
    },
    init(injector: Injector) {
        mpesaService = injector.get(MpesaService)
    },

    createPayment: async (
        _,
        order,
        amount,
        args,
    ): Promise<CreatePaymentResult> => {
        try {
            const config = args as MpesaConfig
            const amountInShillings = Math.ceil(amount / 100)

            // Phone number is guaranteed to be present in the eligibility checker
            const phoneNumber = getPhoneNumberFromOrder(order)!
            const result = await mpesaService.initiateStkPush(
                config,
                amountInShillings,
                phoneNumber,
                order.code,
            )

            if (!result) {
                return {
                    amount: order.totalWithTax,
                    state: "Declined",
                    errorMessage: "Could not initiate Mpesa payment.",
                }
            }

            return {
                amount: order.totalWithTax,
                state: "Authorized",
                transactionId: result.CheckoutRequestID,
            }
        } catch (error) {
            return {
                amount: order.totalWithTax,
                state: "Declined",
                errorMessage: "Could not initiate Mpesa payment.",
            }
        }
    },
    settlePayment: async () => {
        return {
            success: true,
        }
    },
    createRefund: async (ctx, input, _, __, payment) => {
        return await mpesaService.reversePayment(
            ctx,
            payment.transactionId,
            input.reason,
        )
    },
})
