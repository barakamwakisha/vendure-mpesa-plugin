import {
    LanguageCode,
    defaultShippingCalculator,
    defaultShippingEligibilityChecker
} from "@vendure/core"
import { SimpleGraphQLClient } from "@vendure/testing"
import { ResultOf, VariablesOf } from "gql.tada"

import {
    CreateCustomer,
    CreatePaymentMethod,
    CreateShippingMethod,
    GetCustomerList,
    UpdateChannel
} from "./operations"

export async function createCustomer(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof CreateCustomer>["input"],
    password?: string
) {
    await adminClient.asSuperAdmin()
    const { createCustomer } = await adminClient.query(CreateCustomer, {
        input,
        password
    })
    return createCustomer
}
export type Customer = Extract<
    ResultOf<typeof CreateCustomer>["createCustomer"],
    { __typename: "Customer" }
>

export async function getCustomerList(
    adminClient: SimpleGraphQLClient,
    options?: VariablesOf<typeof GetCustomerList>["options"]
) {
    return adminClient.query(GetCustomerList, { options })
}

export async function updateChannel(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof UpdateChannel>["input"]
) {
    return adminClient.query(UpdateChannel, { input })
}

export async function addShippingMethod(
    adminClient: SimpleGraphQLClient,
    fulfillmentHandlerCode: string,
    price = "500"
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
                            value: "0"
                        }
                    ]
                },
                calculator: {
                    code: defaultShippingCalculator.code,
                    arguments: [
                        {
                            name: "rate",
                            value: price
                        },
                        {
                            name: "taxRate",
                            value: "0"
                        }
                    ]
                },
                translations: [
                    {
                        languageCode: LanguageCode.en,
                        name: "test method",
                        description: ""
                    }
                ]
            }
        }
    )
    return createShippingMethod
}

export async function createPaymentMethod(
    adminClient: SimpleGraphQLClient,
    input: VariablesOf<typeof CreatePaymentMethod>["input"]
) {
    await adminClient.asSuperAdmin()
    const { createPaymentMethod } = await adminClient.query(
        CreatePaymentMethod,
        {
            input
        }
    )
    return createPaymentMethod
}
