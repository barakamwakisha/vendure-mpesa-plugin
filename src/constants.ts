export const loggerCtx = "MpesaPlugin"

export const SANDBOX_BASE_URL = "https://sandbox.safaricom.co.ke"

export const LIVE_BASE_URL = "https://api.safaricom.co.ke"

export const STK_PUSH_CALLBACK_ENDPOINT = "daraja/stkpush/callback"

export const REVERSAL_CALLBACK_ENDPOINT = "daraja/reversal/callback"

/** Injection token for the effective STK push callback IP allowlist. */
export const STK_PUSH_CALLBACK_ALLOWLIST = "STK_PUSH_CALLBACK_ALLOWLIST"

/** M-Pesa webhook source IPs; only requests from these should be trusted for STK push callback. */
export const MPESA_STK_PUSH_CALLBACK_IP_ALLOWLIST: readonly string[] = [
    "196.201.214.200",
    "196.201.214.206",
    "196.201.213.114",
    "196.201.214.207",
    "196.201.214.208",
    "196.201.213.44",
    "196.201.212.127",
    "196.201.212.138",
    "196.201.212.129",
    "196.201.212.136",
    "196.201.212.74",
    "196.201.212.69",
]
