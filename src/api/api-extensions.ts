import gql from "graphql-tag"

export const shopApiExtensions = gql`
    enum MpesaPaymentStatus {
        SUCCESS
        FAILED
        PENDING
        NOT_FOUND
    }

    type MpesaTransactionVerification {
        status: MpesaPaymentStatus!
        transactionId: String!
        message: String!
        paymentState: String
    }

    extend type Mutation {
        verifyMpesaTransaction(
            transactionId: String!
        ): MpesaTransactionVerification!
    }
`
