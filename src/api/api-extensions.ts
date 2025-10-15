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

    type MpesaTransactionInitiation {
        success: Boolean!
        transactionId: String
        message: String!
    }

    extend type Mutation {
        initiateMpesaTransaction(
            phoneNumber: String!
        ): MpesaTransactionInitiation!

        verifyMpesaTransaction(
            transactionId: String!
        ): MpesaTransactionVerification!
    }
`
