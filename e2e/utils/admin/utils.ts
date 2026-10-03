import {
    LanguageCode,
    defaultShippingCalculator,
    defaultShippingEligibilityChecker,
} from "@vendure/core"
import { SimpleGraphQLClient } from "@vendure/testing"
import { ResultOf, VariablesOf } from "gql.tada"

import {
    AddManualPaymentToOrder,
    CreatePaymentMethod,
    CreateShippingMethod,
    SetOrderCustomFields,
    UpdateChannel,
} from "./operations"

export async function updateChannel(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof UpdateChannel>["input"],
) {
    return adminClient.query(UpdateChannel, { input })
}

export async function addShippingMethod(
    adminClient: SimpleGraphQLClient,
    fulfillmentHandlerCode: string,
    price = "500",
) {
    await adminClient.asSuperAdmin()
    const { createShippingMethod } = await adminClient.query(
        CreateShippingMethod,
        {
            input: {
                code: "test-shipping-method",
                fulfillmentHandler: fulfillmentHandlerCode,
                checker: {
                    code: defaultShippingEligibilityChecker.code,
                    arguments: [
                        {
                            name: "orderMinimum",
                            value: "0",
                        },
                    ],
                },
                calculator: {
                    code: defaultShippingCalculator.code,
                    arguments: [
                        {
                            name: "rate",
                            value: price,
                        },
                        {
                            name: "taxRate",
                            value: "0",
                        },
                    ],
                },
                translations: [
                    {
                        languageCode: LanguageCode.en,
                        name: "test method",
                        description: "",
                    },
                ],
            },
        },
    )
    return createShippingMethod
}

export async function createPaymentMethod(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof CreatePaymentMethod>["input"],
) {
    await adminClient.asSuperAdmin()
    const { createPaymentMethod } = await adminClient.query(
        CreatePaymentMethod,
        {
            input,
        },
    )
    return createPaymentMethod
}

export async function addManualPaymentToOrder(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof AddManualPaymentToOrder>["input"],
) {
    await adminClient.asSuperAdmin()
    const { addManualPaymentToOrder } = await adminClient.query(
        AddManualPaymentToOrder,
        { input },
    )
    return addManualPaymentToOrder
}

export async function setOrderCustomFields(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof SetOrderCustomFields>["input"],
) {
    await adminClient.asSuperAdmin()
    const { setOrderCustomFields } = await adminClient.query(
        SetOrderCustomFields,
        { input },
    )
    return setOrderCustomFields
}
