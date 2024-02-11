import { HttpResponse, http } from "msw"

import {
    STKPushResponse,
    STKStatusResponse,
    TokenResponse,
} from "../../src/types"

export const handlers = [
    http.get<never, never, TokenResponse>(
        /https:\/\/(sandbox|api)\.safaricom\.co\.ke\/oauth\/v1\/generate/,
        () => {
            return HttpResponse.json({
                access_token: "some-access-token",
                expires_in: "3600",
            })
        },
    ),
    http.post<never, never, STKPushResponse>(
        /https:\/\/(sandbox|api)\.safaricom\.co\.ke\/mpesa\/stkpush\/v1\/processrequest/,
        () => {
            return HttpResponse.json({
                MerchantRequestID: "some-merchant-request-id",
                CheckoutRequestID: "some-checkout-request-id",
                ResponseCode: "0",
                ResponseDescription: "Success",
                CustomerMessage: "Success",
            })
        },
    ),
    http.get<never, never, STKStatusResponse>(
        /https:\/\/(sandbox|api)\.safaricom\.co\.ke\/mpesa\/stkpushquery\/v1\/query/,
        () => {
            return HttpResponse.json({
                ResponseCode: "0",
                ResponseDescription: "Success",
                MerchantRequestID: "some-merchant-request-id",
                CheckoutRequestID: "some-checkout-request-id",
                ResultCode: "0",
                ResultDesc: "Success",
            })
        },
    ),
]
