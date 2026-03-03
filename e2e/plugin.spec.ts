import { rm } from "node:fs/promises"
import path from "path"

import nock from "nock"
import {
    SqljsInitializer,
    createTestEnvironment,
    registerInitializer,
} from "@vendure/testing"
import { CurrencyCode, LanguageCode } from "@vendure/core"

import {
    addManualPaymentToOrder,
    addShippingMethod,
    initialData,
    setOrderCustomFields,
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
    GetOrderWithPaymentsAndRefunds,
    RefundOrder,
} from "./utils/admin/operations"
import {
    AddItemToOrder,
    SetCustomerForOrder,
    SetShippingAddress,
    SetBillingAddress,
    SetShippingMethod,
    GetActiveOrder,
    GetProducts,
} from "./utils/shop/operations"
import {
    REVERSAL_CALLBACK_ENDPOINT,
    SANDBOX_BASE_URL,
    STK_PUSH_CALLBACK_ENDPOINT,
} from "../src/constants"
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
MIIDCzCCAfOgAwIBAgIUKPxBilHEHcuRBENj8GqZA/5rGPYwDQYJKoZIhvcNAQEL
BQAwFTETMBEGA1UEAwwKbXBlc2EtdGVzdDAeFw0yNjAzMDIyMjQzNTRaFw0zNjAy
MjgyMjQzNTRaMBUxEzARBgNVBAMMCm1wZXNhLXRlc3QwggEiMA0GCSqGSIb3DQEB
AQUAA4IBDwAwggEKAoIBAQDgELxL3hxxMT0zxL18Uqx+L9GCSEvAtLtFHLN0ptxl
QImAfiWDL3HL/2KeDdrYivdpcEE7pq0LsiiNDIRT64cIPqqbjLiFmE3MOnvuCT4F
IMfES1sCjaHhISRHkAqU/dN1jBIvol6I1IL/G/BzydtPxdw9wC3vD2irgPxTCmsk
zjvQvxGIgc3O550j++FMz5HyWFXjSxYiA2fMkogkk87olGzR7qWAhGC/ZR6EMwI2
vmealnvr+AzF62Snu6Q5FUm/BHVk8yndeykbGTXLjDmPnO08+1k83npqso45rJ4q
w1bq9JqGABsW4l7zirxxUJ2zS+EW3FW0ZfUkEm/B83NJAgMBAAGjUzBRMB0GA1Ud
DgQWBBTNaikZ20c8cUWt83f7ZPqnB3HIpzAfBgNVHSMEGDAWgBTNaikZ20c8cUWt
83f7ZPqnB3HIpzAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQAd
naAqnNKhIdZLdauYCD3pFRPypUS6x4eV87iPe4cJal5eD1UwqW+BpFKJSCDkM1EX
QPGQNh7MseHIRUq4XgVAMelhjj20tNKrIWiSPcePxjJmaLp7hITzOwUJrjCS3qI5
FkqPYpWxor12p5g6R4rIipzFbTpC89mMnMpVwQNgL0FaKv4uLBi1unHen3H8yh4O
XYd5fL/16mFMBSp8rWGouPpT1jtXyotacdlqAdpCHjgbTXYC6c6fRZBeqtbibRPL
gk3Ln3jDF4MkhQ9dwL+ZFYuwlG3KYUAeCvpZwrWufpLyEwG0Vtt6DFPeDj3quhCR
TKqA/+tq2Yk5jqvNtAP7
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
    let testProductVariantId: string
    let testShippingMethodId: string

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

        await adminClient.query(CreatePaymentMethod, {
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
        })

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

        await shopClient.query(SetCustomerForOrder, {
            input: {
                firstName: "John",
                lastName: "Doe",
                emailAddress: "john.doe@test.com",
                phoneNumber: "+254700000000",
            },
        })
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

        it("should return FAILED for failed payment", async () => {
            await setupCompleteOrder()
            await updateOrderWithCheckoutRequestId(null)
            const result = await shopClient.query(
                VerifyMpesaTransactionDocument,
                {
                    transactionId: "ws_CO_27072021151044001",
                },
            )
            expect(result.verifyMpesaTransaction).toEqual({
                status: "FAILED",
                transactionId: "ws_CO_27072021151044001",
                message: "Payment has failed",
            })
        })

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
    })

    describe("STK Push Callback Handling", () => {
        it("should handle successful payment callback", async () => {
            await setupCompleteOrder()
            await updateOrderWithCheckoutRequestId("ws_CO_27072021151044001")

            mockMpesaAuth()
            mockSuccessfulTransactionQuery()

            const callbackPayload = {
                Body: {
                    stkCallback: {
                        MerchantRequestID: "29115-34620561-1",
                        CheckoutRequestID: "ws_CO_27072021151044001",
                        ResultCode: 0,
                        ResultDesc:
                            "The service request is processed successfully.",
                        CallbackMetadata: {
                            Item: [
                                { Name: "Amount", Value: "1" },
                                {
                                    Name: "MpesaReceiptNumber",
                                    Value: "NLJ7RT61SV",
                                },
                                {
                                    Name: "TransactionDate",
                                    Value: "20210727151044",
                                },
                                { Name: "PhoneNumber", Value: "254708374149" },
                            ],
                        },
                    },
                },
            }
            await shopClient.fetch(
                `${mockMpesaConfig.vendureHost}/${STK_PUSH_CALLBACK_ENDPOINT}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(callbackPayload),
                },
            )

            const { activeOrder } = await shopClient.query(GetActiveOrder)
            if (activeOrder && "payments" in activeOrder) {
                expect(activeOrder.payments).toHaveLength(1)
                expect(activeOrder.payments[0].metadata).toMatchObject({
                    CheckoutRequestID: "ws_CO_27072021151044001",
                    MpesaReceiptNumber: "NLJ7RT61SV",
                })
            }
        })

        it("should handle failed payment callback", async () => {
            await setupCompleteOrder()
            await updateOrderWithCheckoutRequestId("ws_CO_27072021151044001")

            mockMpesaAuth()
            mockFailedTransactionQuery()

            const callbackPayload = {
                Body: {
                    stkCallback: {
                        MerchantRequestID: "29115-34620561-1",
                        CheckoutRequestID: "ws_CO_27072021151044001",
                        ResultCode: 1032,
                        ResultDesc: "Request cancelled by user",
                    },
                },
            }

            await shopClient.fetch(
                `${mockMpesaConfig.vendureHost}/${STK_PUSH_CALLBACK_ENDPOINT}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(callbackPayload),
                },
            )

            const { activeOrder } = await shopClient.query(GetActiveOrder)
            if (
                activeOrder &&
                "customFields" in activeOrder &&
                activeOrder.customFields &&
                typeof activeOrder.customFields === "object"
            ) {
                expect(
                    (activeOrder.customFields as any).mpesaCheckoutRequestID,
                ).toBeNull()
            }
        })
    })

    describe("Payment reversal", () => {
        function reversalCallbackPayload(opts: {
            transactionId: string
            resultCode: string
            resultDesc: string
        }) {
            return {
                Result: {
                    ResultType: 0 as const,
                    ResultCode: opts.resultCode,
                    ResultDesc: opts.resultDesc,
                    OriginatorConversationID: "29115-34620561-1",
                    ConversationID: "AG_20210727_00005797af5d7d75f652",
                    TransactionID: opts.transactionId,
                    ResultParameters: { ResultParameter: [] },
                    ReferenceData: { ReferenceItem: [] },
                },
            }
        }

        it("calls reversal API and creates refund in Validating state", async () => {
            const RECEIPT_ID = `RCP_REVERSAL_TEST_${Date.now()}`
            await setupCompleteOrder()
            const { activeOrder } = await shopClient.query(GetActiveOrder)
            const orderId = String(activeOrder!.id)
            await addTestPayment(RECEIPT_ID)
            mockMpesaAuth()
            const reversalScope = mockSuccessfulReversal()
            const { order } = await adminClient.query(
                GetOrderWithPaymentsAndRefunds,
                {
                    id: orderId,
                },
            )

            const paymentId = order?.payments?.[0]?.id
            const totalWithTax = order?.totalWithTax
            expect(paymentId).toBeDefined()

            const result = await adminClient.query(RefundOrder, {
                input: {
                    paymentId,
                    amount: totalWithTax,
                    shipping: 0,
                    adjustment: 0,
                    reason: "Test refund",
                },
            })

            expect(result.refundOrder?.__typename).toBe("Refund")
            if (result.refundOrder?.__typename === "Refund") {
                expect(result.refundOrder.state).toBe("Validating")
                expect(result.refundOrder.transactionId).toBe(RECEIPT_ID)
            }
            expect(reversalScope.isDone()).toBe(true)
        })

        it("callback with ResultCode 0 marks refund Settled", async () => {
            const RECEIPT_ID = `RCP_REVERSAL_TEST_${Date.now()}`
            await setupCompleteOrder()
            const { activeOrder } = await shopClient.query(GetActiveOrder)
            const orderId = String(activeOrder!.id)
            await addTestPayment(RECEIPT_ID)
            mockMpesaAuth()
            mockSuccessfulReversal()
            await createTestRefund(orderId)

            const payload = reversalCallbackPayload({
                transactionId: RECEIPT_ID,
                resultCode: "0",
                resultDesc: "Success",
            })
            const response = await shopClient.fetch(
                `${mockMpesaConfig.vendureHost}/${REVERSAL_CALLBACK_ENDPOINT}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                },
            )
            expect(response.ok).toBe(true)

            const { order } = await adminClient.query(
                GetOrderWithPaymentsAndRefunds,
                {
                    id: orderId,
                },
            )
            const refunds = (order?.payments ?? []).flatMap(
                p =>
                    (
                        p as {
                            refunds?: { transactionId: string; state: string }[]
                        }
                    ).refunds ?? [],
            )

            const refund = refunds.find(r => r.transactionId === RECEIPT_ID)
            expect(refund?.state).toBe("Settled")
        })

        it("callback with non-zero ResultCode marks refund as Failed", async () => {
            const RECEIPT_ID = `RCP_REVERSAL_TEST_${Date.now()}`
            await setupCompleteOrder()
            const { activeOrder } = await shopClient.query(GetActiveOrder)
            const orderId = String(activeOrder!.id)
            await addTestPayment(RECEIPT_ID)
            mockMpesaAuth()
            mockSuccessfulReversal()
            await createTestRefund(orderId)

            const payload = reversalCallbackPayload({
                transactionId: RECEIPT_ID,
                resultCode: "1",
                resultDesc: "Reversal failed",
            })
            const response = await shopClient.fetch(
                `${mockMpesaConfig.vendureHost}/${REVERSAL_CALLBACK_ENDPOINT}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                },
            )
            expect(response.ok).toBe(true)

            const { order } = await adminClient.query(
                GetOrderWithPaymentsAndRefunds,
                {
                    id: orderId,
                },
            )
            const refunds = (order?.payments ?? []).flatMap(
                p =>
                    (
                        p as {
                            refunds?: { transactionId: string; state: string }[]
                        }
                    ).refunds ?? [],
            )
            const refund = refunds.find(r => r.transactionId === RECEIPT_ID)
            expect(refund?.state).toBe("Failed")
        })

        it("reversal API failure marks refund as Failed", async () => {
            const RECEIPT_ID = `RCP_REVERSAL_TEST_${Date.now()}`
            await setupCompleteOrder()
            const { activeOrder } = await shopClient.query(GetActiveOrder)
            const orderId = String(activeOrder!.id)
            await addTestPayment(RECEIPT_ID)
            mockMpesaAuth()
            nock(SANDBOX_BASE_URL)
                .post("/mpesa/reversal/v1/request")
                .reply(200, {
                    OriginatorConversationID: "29115-34620561-1",
                    ConversationID: "AG_20210727_00005797af5d7d75f652",
                    ResponseCode: "1",
                    ResponseDescription: "Rejection",
                })
            const { order } = await adminClient.query(
                GetOrderWithPaymentsAndRefunds,
                {
                    id: orderId,
                },
            )
            const paymentId = order?.payments?.[0]?.id
            const totalWithTax = order?.totalWithTax ?? 100
            expect(paymentId).toBeDefined()

            const result = await adminClient.query(RefundOrder, {
                input: {
                    paymentId,
                    amount: totalWithTax,
                    shipping: 0,
                    adjustment: 0,
                    reason: "Test refund",
                },
            })

            expect(result.refundOrder?.__typename).toBe("Refund")
            if (result.refundOrder?.__typename === "Refund") {
                expect(result.refundOrder.state).toBe("Failed")
            }
        })

        it("callback for unknown TransactionID does not throw", async () => {
            const RECEIPT_ID = `RCP_REVERSAL_TEST_${Date.now()}`
            await setupCompleteOrder()
            const { activeOrder } = await shopClient.query(GetActiveOrder)
            const orderId = String(activeOrder!.id)
            await addTestPayment(RECEIPT_ID)
            mockMpesaAuth()
            mockSuccessfulReversal()
            await createTestRefund(orderId)

            const payload = reversalCallbackPayload({
                transactionId: "UNKNOWN_RCP_999",
                resultCode: "0",
                resultDesc: "Success",
            })
            const response = await shopClient.fetch(
                `${mockMpesaConfig.vendureHost}/${REVERSAL_CALLBACK_ENDPOINT}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                },
            )
            expect(response.ok).toBe(true)

            const { order } = await adminClient.query(
                GetOrderWithPaymentsAndRefunds,
                {
                    id: orderId,
                },
            )
            const refunds = (order?.payments ?? []).flatMap(
                p =>
                    (
                        p as {
                            refunds?: { transactionId: string; state: string }[]
                        }
                    ).refunds ?? [],
            )
            const existingRefund = refunds.find(
                r => r.transactionId === RECEIPT_ID,
            )
            expect(existingRefund?.state).toBe("Validating")
        })
    })

    describe("Error Scenarios", () => {
        it("should handle invalid M-Pesa configuration", async () => {
            await adminClient.query(CreatePaymentMethod, {
                input: {
                    code: "invalid-mpesa",
                    enabled: true,
                    translations: [
                        {
                            languageCode: LanguageCode.en,
                            name: "Invalid M-Pesa",
                            description: "Invalid M-Pesa payment method",
                        },
                    ],
                    handler: {
                        code: "mpesa",
                        arguments: [
                            { name: "consumerKey", value: "" },
                            { name: "consumerSecret", value: "" },
                            { name: "environment", value: "invalid" },
                        ],
                    },
                },
            })
            await setupCompleteOrder()
            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )
            expect(result.initiateMpesaTransaction.success).toBe(false)
        })

        it("should handle authentication failures", async () => {
            await setupCompleteOrder()

            nock(SANDBOX_BASE_URL).post("/oauth/v1/generate").reply(400, {
                error: "invalid_client",
                error_description: "Invalid client credentials",
            })
            const result = await shopClient.query(
                InitiateMpesaTransactionDocument,
                {
                    phoneNumber: "+254700000000",
                },
            )
            expect(result.initiateMpesaTransaction.success).toEqual(false)
        })
    })

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

        await setOrderCustomFields(adminClient, {
            id: activeOrder.id,
            customFields: {
                mpesaCheckoutRequestID: checkoutRequestId,
            },
        })
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

    async function createTestRefund(orderId: string) {
        const { order } = await adminClient.query(
            GetOrderWithPaymentsAndRefunds,
            {
                id: orderId,
            },
        )
        const paymentId = order?.payments?.[0]?.id
        const totalWithTax = order?.totalWithTax ?? 100
        if (!paymentId) return null
        const result = await adminClient.query(RefundOrder, {
            input: {
                paymentId,
                amount: totalWithTax,
                shipping: 0,
                adjustment: 0,
                reason: "Test refund",
            },
        })
        return result.refundOrder?.__typename === "Refund"
            ? result.refundOrder
            : null
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
        return nock(SANDBOX_BASE_URL)
            .post("/mpesa/reversal/v1/request")
            .reply(200, {
                OriginatorConversationID: "29115-34620561-1",
                ConversationID: "AG_20210727_00005797af5d7d75f652",
                ResponseCode: "0",
                ResponseDescription: "Accept the service request successfully.",
            })
    }
})
