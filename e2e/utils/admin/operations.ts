import { graphql } from "../../../src/graphql/admin"

export const CreateCustomer = graphql(`
    mutation CreateCustomer($input: CreateCustomerInput!, $password: String) {
        createCustomer(input: $input, password: $password) {
            __typename
            ... on Customer {
                id
                firstName
                lastName
                emailAddress
                phoneNumber
            }
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }
`)

export const GetCustomerList = graphql(`
    query GetCustomerList($options: CustomerListOptions) {
        customers(options: $options) {
            items {
                id
                title
                firstName
                lastName
                emailAddress
                phoneNumber
                user {
                    id
                    verified
                }
            }
            totalItems
        }
    }
`)

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
