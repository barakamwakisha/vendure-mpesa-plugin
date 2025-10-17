import { Customer, ErrorResult, ID } from "@vendure/core"
import { QueryParams, SimpleGraphQLClient } from "@vendure/testing"
import { ResultOf, VariablesOf } from "gql.tada"

import { testPaymentMethod } from "../test-payment-method"
import {
    AddItemToOrder,
    AddPaymentToOrder,
    ApplyCouponCode,
    GetActiveChannel,
    GetActiveOrder,
    GetEligibleShippingMethods,
    GetProduct,
    SetBillingAddress,
    SetCustomerForOrder,
    SetShippingAddress,
    SetShippingMethod,
    TransitionToState
} from "./operations"

const testCustomer = {
    title: "Esq.",
    firstName: "Dwight",
    lastName: "Schrute",
    phoneNumber: "+1234567890",
    emailAddress: "dwight.schrute@yopmail.com"
}

/**
 * The non-error result of adding a payment to an order
 */
export type SettledOrder = Extract<
    ResultOf<typeof AddPaymentToOrder>["addPaymentToOrder"],
    { __typename?: "Order" }
>

/**
 * Set active order to have an address and a shippingmethod
 */
export async function setAddressAndShipping(
    shopClient: SimpleGraphQLClient,
    shippingMethodId?: string | number,
    shippingAddress?: VariablesOf<typeof SetShippingAddress>,
    billingAddress?: VariablesOf<typeof SetBillingAddress>
): Promise<void> {
    const finalShippingAddress = shippingAddress ?? {
        input: {
            fullName: "Dwight Schrute",
            streetLine1: "4080 McGinnis Ferry Road",
            streetLine2: "Suite 601",
            city: "Alpharetta",
            postalCode: "30005",
            countryCode: "US"
        }
    }

    await shopClient.query(SetShippingAddress, finalShippingAddress)

    if (billingAddress) {
        await shopClient.query(SetBillingAddress, billingAddress)
    }

    if (!shippingMethodId) {
        const eligibleShippingMethods =
            await getEligibleShippingMethods(shopClient)

        if (eligibleShippingMethods.length === 0) {
            throw Error("No eligible shipping methods found")
        }

        shippingMethodId = eligibleShippingMethods[0]?.id as ID
    }

    await shopClient.query(SetShippingMethod, {
        ids: [shippingMethodId]
    })
}

/**
 * Proceed the active order of current shopClient to proceed to ArrangingPayment
 */
export async function proceedToArrangingPayment(
    shopClient: SimpleGraphQLClient,
    shippingMethodId?: string | number,
    shippingAddress?: VariablesOf<typeof SetShippingAddress>,
    billingAddress?: VariablesOf<typeof SetBillingAddress>
): Promise<ResultOf<typeof TransitionToState>["transitionOrderToState"]> {
    if (shippingMethodId && shippingAddress) {
        await setAddressAndShipping(
            shopClient,
            shippingMethodId,
            shippingAddress,
            billingAddress
        )
    }

    const result = await shopClient.query(TransitionToState, {
        state: "ArrangingPayment"
    })
    return result.transitionOrderToState
}

/**
 * Add payment to active order by given code
 */
export async function addPaymentToOrder(
    shopClient: SimpleGraphQLClient,
    code: string
): Promise<ResultOf<typeof AddPaymentToOrder>["addPaymentToOrder"]> {
    const { addPaymentToOrder } = await shopClient.query(AddPaymentToOrder, {
        input: {
            method: code,
            metadata: {
                baz: "quux"
            }
        }
    })
    return addPaymentToOrder
}

/**
 * Add item to active order
 */
export async function addItem(
    shopClient: SimpleGraphQLClient,
    variantId: ID,
    quantity: number,
    queryParams?: QueryParams
) {
    const { addItemToOrder } = await shopClient.query(
        AddItemToOrder,
        {
            productVariantId: variantId,
            quantity
        },
        queryParams
    )

    return addItemToOrder
}

export async function applyCouponCode(
    shopClient: SimpleGraphQLClient,
    couponCode: string
): Promise<ResultOf<typeof ApplyCouponCode>["applyCouponCode"]> {
    const { applyCouponCode } = await shopClient.query(ApplyCouponCode, {
        couponCode
    })

    return applyCouponCode
}

export async function createSettledOrder(
    shopClient: SimpleGraphQLClient,
    shippingMethodId: string | number,
    authorizeFirst = true,
    variants: Array<{ id: string; quantity: number }> = [
        { id: "T_1", quantity: 1 },
        { id: "T_2", quantity: 2 }
    ],
    shippingAddress?: VariablesOf<typeof SetShippingAddress>,
    billingAddress?: VariablesOf<typeof SetBillingAddress>,
    paymentMethodCode: string = testPaymentMethod.code
): Promise<SettledOrder> {
    if (authorizeFirst) {
        await shopClient.asUserWithCredentials(
            "hayden.zieme12@hotmail.com",
            "test"
        )
    }
    for (const v of variants) {
        await addItem(shopClient, v.id, v.quantity)
    }
    let orderShippingAddress = shippingAddress
    if (!orderShippingAddress) {
        orderShippingAddress = {
            input: {
                fullName: "Martinho Pinelabio",
                streetLine1: "Verzetsstraat",
                streetLine2: "12a",
                city: "Liwwa",
                postalCode: "8923CP",
                countryCode: "NL"
            }
        }
    }
    const res = await proceedToArrangingPayment(
        shopClient,
        shippingMethodId,
        orderShippingAddress,
        billingAddress
    )
    if ((res as ErrorResult)?.errorCode) {
        console.error(JSON.stringify(res))
        throw Error((res as ErrorResult).errorCode)
    }
    const order = await addPaymentToOrder(shopClient, paymentMethodCode)
    if ((order as ErrorResult).errorCode) {
        throw new Error(
            `Failed to create settled order: ${(order as ErrorResult).message}`
        )
    }
    return order as SettledOrder
}

export async function getActiveChannel(
    shopClient: SimpleGraphQLClient
): Promise<ResultOf<typeof GetActiveChannel>["activeChannel"]> {
    const { activeChannel } = await shopClient.query(GetActiveChannel)
    return activeChannel
}

/**
 * Associate a customer with the active order
 */
export async function setCustomerForOrder(
    shopClient: SimpleGraphQLClient,
    customer?: Customer
) {
    const finalCustomer = customer ?? testCustomer
    const { setCustomerForOrder } = await shopClient.query(
        SetCustomerForOrder,
        {
            input: {
                ...finalCustomer
            }
        }
    )

    return setCustomerForOrder
}

export async function getActiveOrder(shopClient: SimpleGraphQLClient) {
    const { activeOrder } = await shopClient.query(GetActiveOrder)
    return activeOrder
}

export async function getProduct(
    shopClient: SimpleGraphQLClient,
    id?: ID,
    slug?: string
) {
    const { product } = await shopClient.query(GetProduct, {
        id,
        slug
    })
    return product
}

export async function getEligibleShippingMethods(
    shopClient: SimpleGraphQLClient
) {
    const { eligibleShippingMethods } = await shopClient.query(
        GetEligibleShippingMethods
    )
    return eligibleShippingMethods
}
