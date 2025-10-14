export interface TokenResponse {
    access_token: string
    expires_in: string
}

export interface STKPushResponse {
    MerchantRequestID: string
    CheckoutRequestID: string
    ResponseCode: string
    ResponseDescription: string
    CustomerMessage: string
}

export interface STKStatusResponse {
    ResponseCode: string
    ResponseDescription: string
    MerchantRequestID: string
    CheckoutRequestID: string
    ResultCode: string
    ResultDesc: string
}

export interface STKCallbackPayload {
    Body: {
        stkCallback: {
            MerchantRequestID: string
            CheckoutRequestID: string
            ResultCode: number
            ResultDesc: string
            CallbackMetadata?: {
                Item: Array<{
                    Name: string
                    Value: string
                }>
            }
        }
    }
}

export enum MpesaPaymentStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    PENDING = "PENDING",
    NOT_FOUND = "NOT_FOUND",
}

export interface MpesaTransactionVerification {
    status: MpesaPaymentStatus
    transactionId: string
    message: string
    paymentState?: string
}
