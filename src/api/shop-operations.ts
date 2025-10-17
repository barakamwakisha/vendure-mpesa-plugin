import { graphql } from "../graphql/shop"

export const InitiateMpesaTransactionDocument = graphql(`
    mutation InitiateMpesaTransaction($phoneNumber: String!) {
        initiateMpesaTransaction(phoneNumber: $phoneNumber) {
            success
            transactionId
            message
        }
    }
`)

export const VerifyMpesaTransactionDocument = graphql(`
    mutation VerifyMpesaTransaction($transactionId: String!) {
        verifyMpesaTransaction(transactionId: $transactionId) {
            status
            transactionId
            message
        }
    }
`)
