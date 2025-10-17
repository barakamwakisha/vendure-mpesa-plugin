import { rm } from "node:fs/promises"
import path from "path"

import nock from "nock"
import {
    SqljsInitializer,
    createTestEnvironment,
    registerInitializer,
} from "@vendure/testing"
import {
    CurrencyCode,
    LanguageCode,
    OrderService,
    RequestContext,
} from "@vendure/core"

import {
    addManualPaymentToOrder,
    addShippingMethod,
    initialData,
    testConfig,
    testPaymentMethod,
    transitionToState,
} from "./utils"
import { MpesaPlugin } from "../src"
import {
    InitiateMpesaTransactionDocument,
    VerifyMpesaTransactionDocument,
} from "../src/api/shop-operations"
import {
    CreatePaymentMethod,
    UpdateOrder,
    CreateRefund,
} from "./utils/admin/operations"
import {
    AddItemToOrder,
    SetCustomerForOrder,
    SetShippingAddress,
    SetBillingAddress,
    SetShippingMethod,
    GetActiveOrder,
    GetProduct,
    GetEligibleShippingMethods,
    GetProducts,
} from "./utils/shop/operations"
import { SANDBOX_BASE_URL, LIVE_BASE_URL } from "../src/constants"
import { MpesaConfig } from "../src/types"
import { graphql } from "../src/graphql/admin"

const TEST_DB_DIR = path.join(__dirname, "../__test_db__")

const mockMpesaConfig = {
    consumerKey: "test_consumer_key",
    consumerSecret: "test_consumer_secret",
    environment: "sandbox" as const,
    passkey: "test_passkey",
    shortCode: "174379",
    shortCodeType: "paybill" as const,
    initiatorName: "test_initiator",
    initiatorPassword: "test_initiator_password",
    apiCertificate: `-----BEGIN CERTIFICATE-----
MIICdTCCAd4CAQAwDQYJKoZIhvcNAQEFBQAwgZ4xCzAJBgNVBAYTAktFMQswCQYD
VQQIEwJORTEVMBMGA1UEBxMMTkFJUk9CSSwgS0VOWTEVMBMGA1UEChMMU0FGQVJJ
Q09NIFBMQzEaMBgGA1UECxMRU0FGUklDT00gQ0VSVElGSUNBVEUxGTAXBgNVBAMT
EFNBUklDT00gQ0VSVElGSUNBVEUxETAPBgNVBCkTCFNBUklDT00wHhcNMTcwNzE5
MTQwODAwWhcNMTkwNzE5MTQwODAwWjCBnjELMAkGA1UEBhMCS0UxCzAJBgNVBAgT
Ak5FMRUwEwYDVQQHEwxOQUlST0JJLCBLRU5ZMRUwEwYDVQQKEwxTQUZBUklDT00g
UExDMRowGAYDVQQLExFTRUZBUklDT00gQ0VSVElGSUNBVEUxGTAXBgNVBAMTEFNB
UklDT00gQ0VSVElGSUNBVEUxETAPBgNVBCkTCFNBUklDT00wgZ8wDQYJKoZIhvcN
AQEBBQADgY0AMIGJAoGBANu3UocQZ4e0qK9W2l4QrN4o8L5x3w8Q7J9X5X3X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X2X
-----END CERTIFICATE-----`,
    vendureHost: "http://localhost:4000",
} satisfies MpesaConfig

describe("Mpesa Plugin", function () {
    const { server, adminClient, shopClient } = createTestEnvironment({
        ...testConfig(4000),
        plugins: [MpesaPlugin],
        paymentOptions: {
            paymentMethodHandlers: [testPaymentMethod],
        },
    })

    let activeChannelId: string
    let mpesaPaymentMethodId: string
    let testProductVariantId: string
    let testShippingMethodId: string
    let testCustomerId: string

    beforeAll(async () => {
        registerInitializer("sqljs", new SqljsInitializer(TEST_DB_DIR))

        await server.init({
            productsCsvPath: path.join(__dirname, "./utils/products.csv"),
            initialData: {
                ...initialData,
                paymentMethods: [
                    {
                        name: testPaymentMethod.code,
                        handler: {
                            code: testPaymentMethod.code,
                            arguments: [],
                        },
                    },
                ],
                shippingMethods: [],
            },
            customerCount: 2,
        })
        await adminClient.asSuperAdmin()

        await setupTestData()
    }, 60000)

    afterAll(async () => {
        await server.destroy()
        await rm(TEST_DB_DIR, { recursive: true })
    })

    beforeEach(() => {
        nock.cleanAll()
    })

    afterEach(() => {
        nock.cleanAll()
    })

    async function setupTestData() {
        const { activeChannel } = await adminClient.query(
            graphql(`
                query GetActiveChannel {
                    activeChannel {
                        id
                    }
                }
            `),
        )
        activeChannelId = String(activeChannel?.id)

        await adminClient.query(
            graphql(`
                mutation UpdateChannel($input: UpdateChannelInput!) {
                    updateChannel(input: $input) {
                        __typename
                    }
                }
            `),
            {
                input: {
                    id: activeChannelId,
                    availableCurrencyCodes: [
                        CurrencyCode.KES,
                        CurrencyCode.USD,
                    ],
                    defaultCurrencyCode: CurrencyCode.KES,
                },
            },
        )

        const createMpesaPaymentMethod = await adminClient.query(
            CreatePaymentMethod,
            {
                input: {
                    code: "mpesa",
                    enabled: true,
                    translations: [
                        {
                            languageCode: LanguageCode.en,
                            name: "M-Pesa",
                            description: "M-Pesa payment method",
                        },
                    ],
                    handler: {
                        code: "mpesa",
                        arguments: Object.entries(mockMpesaConfig).map(
                            ([name, value]) => ({
                                name,
                                value: String(value),
                            }),
                        ),
                    },
                },
            },
        )
        mpesaPaymentMethodId = String(
            createMpesaPaymentMethod.createPaymentMethod.id,
        )

        const { products } = await shopClient.query(GetProducts, {
            options: {
                take: 1,
            },
        })
        const product = products.items[0]
        testProductVariantId = String(product.variants[0].id)

        const { id: shippingMethodId } = await addShippingMethod(
            adminClient,
            "manual-fulfillment",
            "0",
        )
        testShippingMethodId = shippingMethodId.toString()

        const { setCustomerForOrder } = await shopClient.query(
            SetCustomerForOrder,
            {
                input: {
                    firstName: "John",
                    lastName: "Doe",
                    emailAddress: "john.doe@test.com",
                    phoneNumber: "+254700000000",
                },
            },
        )
        testCustomerId =
            setCustomerForOrder && "customer" in setCustomerForOrder
                ? String(setCustomerForOrder.customer?.id || "")
                : ""
    }

    describe("STK Push Initiation", () => {
        it("should successfully initiate STK push with valid data", async () => {
            await setupCompleteOrder()

            mockMpesaAuth()
            mockSuccessfulStkPush()

            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )

            expect(result.initiateMpesaTransaction.success).toEqual(true)
            expect(result.initiateMpesaTransaction.transactionId).toBeDefined()
        })

        it("should fail when no active order exists", async () => {
            mockMpesaAuth()

            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )

            expect(result.initiateMpesaTransaction.success).toEqual(false)
        })

        it("should fail with invalid currency", async () => {
            await adminClient.query(
                graphql(`
                    mutation UpdateChannel($input: UpdateChannelInput!) {
                        updateChannel(input: $input) {
                            __typename
                        }
                    }
                `),
                {
                    input: {
                        id: activeChannelId,
                        defaultCurrencyCode: CurrencyCode.USD,
                    },
                },
            )

            await setupCompleteOrder()

            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )

            expect(result.initiateMpesaTransaction.success).toEqual(false)
        })

        it("should fail when M-Pesa API returns error", async () => {
            await setupCompleteOrder()

            mockMpesaAuth()
            mockFailedStkPush()

            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )

            expect(result.initiateMpesaTransaction.success).toEqual(false)
        })

        it("should handle API connection failures", async () => {
            await setupCompleteOrder()

            nock(SANDBOX_BASE_URL)
                .post("/oauth/v1/generate")
                .replyWithError("Connection timeout")

            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )

            expect(result.initiateMpesaTransaction.success).toEqual(false)
        })
    })

    describe("Payment Verification", () => {
        it("should return SUCCESS for completed payment", async () => {
            const transactionId = "ws_CO_27072021151044001"

            await setupCompleteOrder()
            await addTestPayment(transactionId)

            const result = await shopClient.query(
                VerifyMpesaTransactionDocument,
                {
                    transactionId: transactionId,
                },
            )

            expect(result.verifyMpesaTransaction.status).toEqual("SUCCESS")
        })

        it("should return PENDING for order without payment", async () => {
            const transactionId = "ws_CO_27072021151044001"
            await setupCompleteOrder()
            await updateOrderWithCheckoutRequestId(transactionId)

            const result = await shopClient.query(
                VerifyMpesaTransactionDocument,
                {
                    transactionId: transactionId,
                },
            )
            expect(result.verifyMpesaTransaction.status).toEqual("PENDING")
        })
        //     // it("should return FAILED for failed payment", async () => {
        //     //     // Setup order with null checkoutRequestID (failed payment)
        //     //     await setupCompleteOrder()
        //     //     await updateOrderWithCheckoutRequestId(null)
        //     //     const result = await shopClient.query(
        //     //         VerifyMpesaTransactionDocument,
        //     //         {
        //     //             transactionId: "ws_CO_27072021151044001",
        //     //         },
        //     //     )
        //     //     expect(result.verifyMpesaTransaction).toEqual({
        //     //         status: "FAILED",
        //     //         transactionId: "ws_CO_27072021151044001",
        //     //         message: "Payment has failed",
        //     //     })
        //     // })
    })

    // describe("STK Push Callback Handling", () => {
    //     // it("should handle successful payment callback", async () => {
    //     //     // Setup order
    //     //     await setupCompleteOrder()
    //     //     await updateOrderWithCheckoutRequestId("ws_CO_27072021151044001")
    //     //     // Mock M-Pesa API responses
    //     //     mockMpesaAuth()
    //     //     mockSuccessfulTransactionQuery()
    //     //     const callbackPayload = {
    //     //         Body: {
    //     //             stkCallback: {
    //     //                 MerchantRequestID: "29115-34620561-1",
    //     //                 CheckoutRequestID: "ws_CO_27072021151044001",
    //     //                 ResultCode: 0,
    //     //                 ResultDesc:
    //     //                     "The service request is processed successfully.",
    //     //                 CallbackMetadata: {
    //     //                     Item: [
    //     //                         { Name: "Amount", Value: "1" },
    //     //                         {
    //     //                             Name: "MpesaReceiptNumber",
    //     //                             Value: "NLJ7RT61SV",
    //     //                         },
    //     //                         {
    //     //                             Name: "TransactionDate",
    //     //                             Value: "20210727151044",
    //     //                         },
    //     //                         { Name: "PhoneNumber", Value: "254708374149" },
    //     //                     ],
    //     //                 },
    //     //             },
    //     //         },
    //     //     }
    //     //     const response = await shopClient.fetch(
    //     //         "/daraja/stkpush/callback",
    //     //         {
    //     //             method: "POST",
    //     //             headers: { "Content-Type": "application/json" },
    //     //             body: JSON.stringify(callbackPayload),
    //     //         },
    //     //     )
    //     //     expect(response.status).toBe(200)
    //     //     // Verify payment was added to order
    //     //     const { activeOrder } = await shopClient.query(GetActiveOrder)
    //     //     if (activeOrder && "payments" in activeOrder) {
    //     //         expect(activeOrder.payments).toHaveLength(1)
    //     //         expect(activeOrder.payments[0].metadata).toMatchObject({
    //     //             CheckoutRequestID: "ws_CO_27072021151044001",
    //     //             MpesaReceiptNumber: "NLJ7RT61SV",
    //     //         })
    //     //     }
    //     // })
    //     // it("should handle failed payment callback", async () => {
    //     //     // Setup order
    //     //     await setupCompleteOrder()
    //     //     await updateOrderWithCheckoutRequestId("ws_CO_27072021151044001")
    //     //     // Mock M-Pesa API responses
    //     //     mockMpesaAuth()
    //     //     mockFailedTransactionQuery()
    //     //     const callbackPayload = {
    //     //         Body: {
    //     //             stkCallback: {
    //     //                 MerchantRequestID: "29115-34620561-1",
    //     //                 CheckoutRequestID: "ws_CO_27072021151044001",
    //     //                 ResultCode: 1032,
    //     //                 ResultDesc: "Request cancelled by user",
    //     //             },
    //     //         },
    //     //     }
    //     //     const response = await shopClient.fetch(
    //     //         "/daraja/stkpush/callback",
    //     //         {
    //     //             method: "POST",
    //     //             headers: { "Content-Type": "application/json" },
    //     //             body: JSON.stringify(callbackPayload),
    //     //         },
    //     //     )
    //     //     expect(response.status).toBe(200)
    //     //     // Verify order checkoutRequestID is set to null
    //     //     const { activeOrder } = await shopClient.query(GetActiveOrder)
    //     //     if (
    //     //         activeOrder &&
    //     //         "customFields" in activeOrder &&
    //     //         activeOrder.customFields &&
    //     //         typeof activeOrder.customFields === "object"
    //     //     ) {
    //     //         expect(
    //     //             (activeOrder.customFields as any).mpesaCheckoutRequestID,
    //     //         ).toBeNull()
    //     //     }
    //     // })
    // })

    // describe("Payment Reversal", () => {
    //     // it("should successfully initiate payment reversal", async () => {
    //     //     // Setup order with payment
    //     //     await setupCompleteOrder()
    //     //     await addTestPayment()
    //     //     // Mock M-Pesa API responses
    //     //     mockMpesaAuth()
    //     //     mockSuccessfulReversal()
    //     //     const response = await adminClient.fetch("/admin/orders", {
    //     //         method: "POST",
    //     //         headers: { "Content-Type": "application/json" },
    //     //         body: JSON.stringify({
    //     //             query: `
    //     //                 mutation CreateRefund($input: CreateRefundInput!) {
    //     //                     createRefund(input: $input) {
    //     //                         ... on Refund {
    //     //                             id
    //     //                             state
    //     //                             transactionId
    //     //                         }
    //     //                         ... on RefundStateTransitionError {
    //     //                             errorCode
    //     //                             message
    //     //                         }
    //     //                     }
    //     //                 }
    //     //             `,
    //     //             variables: {
    //     //                 input: {
    //     //                     orderId:
    //     //                         (await shopClient.query(GetActiveOrder))
    //     //                             .activeOrder?.id || "",
    //     //                     lines: [],
    //     //                     shipping: 0,
    //     //                     adjustment: 0,
    //     //                     reason: "Customer requested refund",
    //     //                     paymentId: "",
    //     //                 },
    //     //             },
    //     //         }),
    //     //     })
    //     //     const result = await response.json()
    //     //     expect(result.data.createRefund.state).toBe("Created")
    //     // })
    //     // it("should handle reversal callback success", async () => {
    //     //     // Setup refund
    //     //     const refund = await createTestRefund()
    //     //     const callbackPayload = {
    //     //         Result: {
    //     //             ResultType: 0,
    //     //             ResultCode: "0",
    //     //             ResultDesc:
    //     //                 "The service request is processed successfully.",
    //     //             OriginatorConversationID: "29115-34620561-1",
    //     //             ConversationID: "AG_20210727_00005797af5d7d75f652",
    //     //             TransactionID: "NLJ7RT61SV",
    //     //             ResultParameters: {
    //     //                 ResultParameter: [
    //     //                     { Key: "TransactionReceipt", Value: "NLJ7RT61SV" },
    //     //                     { Key: "TransactionAmount", Value: "1" },
    //     //                     {
    //     //                         Key: "B2CWorkingAccountAvailableFunds",
    //     //                         Value: "150000.00",
    //     //                     },
    //     //                     {
    //     //                         Key: "B2CUtilityAccountAvailableFunds",
    //     //                         Value: "0.00",
    //     //                     },
    //     //                     {
    //     //                         Key: "TransactionCompletedDateTime",
    //     //                         Value: "27.07.2021 15:10:44",
    //     //                     },
    //     //                     {
    //     //                         Key: "ReceiverPartyPublicName",
    //     //                         Value: "254708374149 - John Doe",
    //     //                     },
    //     //                     {
    //     //                         Key: "B2CChargesPaidAccountAvailableFunds",
    //     //                         Value: "0.00",
    //     //                     },
    //     //                     {
    //     //                         Key: "B2CRecipientIsRegisteredCustomer",
    //     //                         Value: "Y",
    //     //                     },
    //     //                 ],
    //     //             },
    //     //             ReferenceData: {
    //     //                 ReferenceItem: {
    //     //                     Key: "QueueTimeoutURL",
    //     //                     Value: "https://internalsandbox.safaricom.co.ke/mpesa/b2cresults/v1/submit",
    //     //                 },
    //     //             },
    //     //         },
    //     //     }
    //     //     const response = await shopClient.fetch(
    //     //         "/daraja/reversal/callback",
    //     //         {
    //     //             method: "POST",
    //     //             headers: { "Content-Type": "application/json" },
    //     //             body: JSON.stringify(callbackPayload),
    //     //         },
    //     //     )
    //     //     expect(response.status).toBe(200)
    //     // })
    //     // it("should handle reversal callback failure", async () => {
    //     //     // Setup refund
    //     //     const refund = await createTestRefund()
    //     //     const callbackPayload = {
    //     //         Result: {
    //     //             ResultType: 1,
    //     //             ResultCode: "1",
    //     //             ResultDesc: "The initiator information is invalid.",
    //     //             OriginatorConversationID: "29115-34620561-1",
    //     //             ConversationID: "AG_20210727_00005797af5d7d75f652",
    //     //             TransactionID: "NLJ7RT61SV",
    //     //             ResultParameters: {
    //     //                 ResultParameter: [],
    //     //             },
    //     //             ReferenceData: {
    //     //                 ReferenceItem: {
    //     //                     Key: "QueueTimeoutURL",
    //     //                     Value: "https://internalsandbox.safaricom.co.ke/mpesa/b2cresults/v1/submit",
    //     //                 },
    //     //             },
    //     //         },
    //     //     }
    //     //     const response = await shopClient.fetch(
    //     //         "/daraja/reversal/callback",
    //     //         {
    //     //             method: "POST",
    //     //             headers: { "Content-Type": "application/json" },
    //     //             body: JSON.stringify(callbackPayload),
    //     //         },
    //     //     )
    //     //     expect(response.status).toBe(200)
    //     // })
    // })

    // describe("Error Scenarios", () => {
    //     // it("should handle invalid M-Pesa configuration", async () => {
    //     //     // Create payment method with invalid config
    //     //     await adminClient.query(CreatePaymentMethod, {
    //     //         input: {
    //     //             code: "invalid-mpesa",
    //     //             enabled: true,
    //     //             translations: [
    //     //                 {
    //     //                     languageCode: LanguageCode.en,
    //     //                     name: "Invalid M-Pesa",
    //     //                     description: "Invalid M-Pesa payment method",
    //     //                 },
    //     //             ],
    //     //             handler: {
    //     //                 code: "mpesa",
    //     //                 arguments: [
    //     //                     { name: "consumerKey", value: "" },
    //     //                     { name: "consumerSecret", value: "" },
    //     //                     { name: "environment", value: "invalid" },
    //     //                 ],
    //     //             },
    //     //         },
    //     //     })
    //     //     await setupCompleteOrder()
    //     //     const result = await shopClient.query(
    //     //         InitiateMpesaTransactionDocument,
    //     //         {
    //     //             phoneNumber: "+254700000000",
    //     //         },
    //     //     )
    //     //     expect(result.initiateMpesaTransaction.success).toBe(false)
    //     // })
    //     // it("should handle authentication failures", async () => {
    //     //     await setupCompleteOrder()
    //     //     // Mock authentication failure
    //     //     nock(SANDBOX_BASE_URL).post("/oauth/v1/generate").reply(400, {
    //     //         error: "invalid_client",
    //     //         error_description: "Invalid client credentials",
    //     //     })
    //     //     const result = await shopClient.query(
    //     //         InitiateMpesaTransactionDocument,
    //     //         {
    //     //             phoneNumber: "+254700000000",
    //     //         },
    //     //     )
    //     //     expect(result.initiateMpesaTransaction).toEqual({
    //     //         success: false,
    //     //         transactionId: "",
    //     //         message: "Could not initiate STK push",
    //     //     })
    //     // })
    // })

    // describe("Integration Flow", () => {
    //     // it("should complete full payment flow", async () => {
    //     //     // Setup complete order
    //     //     await setupCompleteOrder()
    //     //     // Step 1: Initiate STK Push
    //     //     mockMpesaAuth()
    //     //     mockSuccessfulStkPush()
    //     //     const initiationResult = await shopClient.query(
    //     //         InitiateMpesaTransactionDocument,
    //     //         {
    //     //             phoneNumber: "+254700000000",
    //     //         },
    //     //     )
    //     //     expect(initiationResult.initiateMpesaTransaction.success).toBe(true)
    //     //     // Step 2: Verify payment is pending
    //     //     const verificationResult = await shopClient.query(
    //     //         VerifyMpesaTransactionDocument,
    //     //         {
    //     //             transactionId:
    //     //                 initiationResult.initiateMpesaTransaction.transactionId,
    //     //         },
    //     //     )
    //     //     expect(verificationResult.verifyMpesaTransaction.status).toBe(
    //     //         "PENDING",
    //     //     )
    //     //     // Step 3: Simulate successful callback
    //     //     mockSuccessfulTransactionQuery()
    //     //     const callbackPayload = {
    //     //         Body: {
    //     //             stkCallback: {
    //     //                 MerchantRequestID: "29115-34620561-1",
    //     //                 CheckoutRequestID:
    //     //                     initiationResult.initiateMpesaTransaction
    //     //                         .transactionId,
    //     //                 ResultCode: 0,
    //     //                 ResultDesc:
    //     //                     "The service request is processed successfully.",
    //     //                 CallbackMetadata: {
    //     //                     Item: [
    //     //                         { Name: "Amount", Value: "1" },
    //     //                         {
    //     //                             Name: "MpesaReceiptNumber",
    //     //                             Value: "NLJ7RT61SV",
    //     //                         },
    //     //                         {
    //     //                             Name: "TransactionDate",
    //     //                             Value: "20210727151044",
    //     //                         },
    //     //                         { Name: "PhoneNumber", Value: "254708374149" },
    //     //                     ],
    //     //                 },
    //     //             },
    //     //         },
    //     //     }
    //     //     await shopClient.fetch("/daraja/stkpush/callback", {
    //     //         method: "POST",
    //     //         headers: { "Content-Type": "application/json" },
    //     //         body: JSON.stringify(callbackPayload),
    //     //     })
    //     //     // Step 4: Verify payment is now successful
    //     //     const finalVerificationResult = await shopClient.query(
    //     //         VerifyMpesaTransactionDocument,
    //     //         {
    //     //             transactionId:
    //     //                 initiationResult.initiateMpesaTransaction.transactionId,
    //     //         },
    //     //     )
    //     //     expect(finalVerificationResult.verifyMpesaTransaction.status).toBe(
    //     //         "SUCCESS",
    //     //     )
    //     //     // Step 5: Verify order has payment
    //     //     const { activeOrder } = await shopClient.query(GetActiveOrder)
    //     //     if (activeOrder && "payments" in activeOrder) {
    //     //         expect(activeOrder.payments).toHaveLength(1)
    //     //         expect(activeOrder.payments[0].metadata).toMatchObject({
    //     //             CheckoutRequestID:
    //     //                 initiationResult.initiateMpesaTransaction.transactionId,
    //     //             MpesaReceiptNumber: "NLJ7RT61SV",
    //     //         })
    //     //     }
    //     // })
    // })

    async function setupCompleteOrder() {
        await shopClient.query(AddItemToOrder, {
            productVariantId: testProductVariantId,
            quantity: 1,
        })

        await shopClient.query(SetCustomerForOrder, {
            input: {
                firstName: "John",
                lastName: "Doe",
                emailAddress: "john.doe@test.com",
                phoneNumber: "+254700000000",
            },
        })

        await shopClient.query(SetShippingAddress, {
            input: {
                fullName: "John Doe",
                streetLine1: "123 Test St",
                city: "Nairobi",
                postalCode: "00100",
                countryCode: "KE",
            },
        })

        await shopClient.query(SetBillingAddress, {
            input: {
                fullName: "John Doe",
                streetLine1: "123 Test St",
                city: "Nairobi",
                postalCode: "00100",
                countryCode: "KE",
            },
        })

        await shopClient.query(SetShippingMethod, {
            ids: [testShippingMethodId],
        })
    }

    async function updateOrderWithCheckoutRequestId(
        checkoutRequestId: string | null,
    ) {
        const { activeOrder } = await shopClient.query(GetActiveOrder)
    }

    async function addTestPayment(transactionId: string) {
        const { activeOrder } = await shopClient.query(GetActiveOrder)
        await transitionToState(shopClient, "ArrangingPayment")

        await addManualPaymentToOrder(adminClient, {
            orderId: activeOrder.id,
            method: "mpesa",
            transactionId,
            metadata: {
                CheckoutRequestID: transactionId,
                MpesaReceiptNumber: transactionId,
            },
        })
    }

    async function createTestRefund() {
        const { activeOrder } = await shopClient.query(GetActiveOrder)
        if (
            activeOrder &&
            "id" in activeOrder &&
            "payments" in activeOrder &&
            Array.isArray(activeOrder.payments) &&
            activeOrder.payments.length > 0
        ) {
            return await adminClient.query(CreateRefund, {
                input: {
                    orderId: activeOrder.id,
                    lines: [],
                    shipping: 0,
                    adjustment: 0,
                    reason: "Test refund",
                    paymentId: activeOrder.payments[0].id,
                },
            })
        }
        return null
    }

    function mockMpesaAuth() {
        nock(SANDBOX_BASE_URL).post("/oauth/v1/generate").reply(200, {
            access_token: "test_access_token",
            expires_in: "3599",
        })
    }

    function mockSuccessfulStkPush() {
        nock(SANDBOX_BASE_URL)
            .post("/mpesa/stkpush/v1/processrequest")
            .reply(200, {
                MerchantRequestID: "29115-34620561-1",
                CheckoutRequestID: "ws_CO_27072021151044001",
                ResponseCode: "0",
                ResponseDescription: "Success. Request accepted for processing",
                CustomerMessage: "Success. Request accepted for processing",
            })
    }

    function mockFailedStkPush() {
        nock(SANDBOX_BASE_URL)
            .post("/mpesa/stkpush/v1/processrequest")
            .reply(200, {
                MerchantRequestID: "29115-34620561-1",
                CheckoutRequestID: "",
                ResponseCode: "1",
                ResponseDescription:
                    "Unable to lock subscriber, a transaction is already in progress for this account.",
                CustomerMessage:
                    "Unable to lock subscriber, a transaction is already in progress for this account.",
            })
    }

    function mockSuccessfulTransactionQuery() {
        nock(SANDBOX_BASE_URL).post("/mpesa/stkpushquery/v1/query").reply(200, {
            ResponseCode: "0",
            ResponseDescription:
                "The service request is processed successfully.",
            MerchantRequestID: "29115-34620561-1",
            CheckoutRequestID: "ws_CO_27072021151044001",
            ResultCode: "0",
            ResultDesc: "The service request is processed successfully.",
        })
    }

    function mockFailedTransactionQuery() {
        nock(SANDBOX_BASE_URL).post("/mpesa/stkpushquery/v1/query").reply(200, {
            ResponseCode: "0",
            ResponseDescription:
                "The service request is processed successfully.",
            MerchantRequestID: "29115-34620561-1",
            CheckoutRequestID: "ws_CO_27072021151044001",
            ResultCode: "1032",
            ResultDesc: "Request cancelled by user",
        })
    }

    function mockSuccessfulReversal() {
        nock(SANDBOX_BASE_URL).post("/mpesa/reversal/v1/request").reply(200, {
            OriginatorConversationID: "29115-34620561-1",
            ConversationID: "AG_20210727_00005797af5d7d75f652",
            ResponseCode: "0",
            ResponseDescription: "Accept the service request successfully.",
        })
    }
})
