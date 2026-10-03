import { graphql } from "../../../src/graphql/admin"

export const UpdateChannel = graphql(`
    mutation UpdateChannel($input: UpdateChannelInput!) {
        updateChannel(input: $input) {
            __typename
            ... on Channel {
                id
                code
                token
            }
        }
    }
`)

export const CreateShippingMethod = graphql(`
    mutation CreateShippingMethod($input: CreateShippingMethodInput!) {
        createShippingMethod(input: $input) {
            id
        }
    }
`)

export const CreatePaymentMethod = graphql(`
    mutation CreatePaymentMethod($input: CreatePaymentMethodInput!) {
        createPaymentMethod(input: $input) {
            id
            name
            code
            description
            enabled
            handler {
                code
                args {
                    name
                    value
                }
            }
        }
    }
`)

export const SetOrderCustomFields = graphql(`
    mutation SetOrderCustomFields($input: UpdateOrderInput!) {
        setOrderCustomFields(input: $input) {
            id
        }
    }
`)

export const CancelOrder = graphql(`
    mutation CancelOrder($input: CancelOrderInput!) {
        cancelOrder(input: $input) {
            __typename
            ... on Order {
                id
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`)

export const AddManualPaymentToOrder = graphql(`
    mutation AddManualPaymentToOrder($input: ManualPaymentInput!) {
        addManualPaymentToOrder(input: $input) {
            __typename
            ... on Order {
                id
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`)

export const RefundOrder = graphql(`
    mutation RefundOrder($input: RefundOrderInput!) {
        refundOrder(input: $input) {
            __typename
            ... on Refund {
                id
                state
                transactionId
            }
            ... on RefundStateTransitionError {
                errorCode
                message
                transitionError
                fromState
                toState
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`)

export const GetOrderWithPaymentsAndRefunds = graphql(`
    query GetOrderWithPaymentsAndRefunds($id: ID!) {
        order(id: $id) {
            id
            totalWithTax
            payments {
                id
                transactionId
                metadata
                refunds {
                    id
                    state
                    transactionId
                }
            }
        }
    }
`)
