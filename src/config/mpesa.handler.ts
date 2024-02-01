import { CreatePaymentResult, Injector, LanguageCode, PaymentMethodHandler } from "@vendure/core";
import { MpesaService } from "../service/mpesa.service";

let mpesaService: MpesaService;

export const mpesaPaymentMethodHandler = new PaymentMethodHandler({
    code: 'mpesa',
    description: [{ languageCode: LanguageCode.en, value: 'Lipa na Mpesa Online' }],
    args: {},
    init(injector: Injector) {
        mpesaService = injector.get(MpesaService);
    },

    createPayment: async (ctx, order, amount, args, metadata): Promise<CreatePaymentResult> => {
        try {
            const amountInShillings = amount / 100;
            const phoneNumber = order.billingAddress.phoneNumber!;
            await mpesaService.initiateStkPush(amountInShillings, phoneNumber, order.code);

            return {
                amount: order.total,
                state: 'Authorized',
                transactionId: '',
                errorMessage: ''
            }
        } catch (err) {
            return {
                amount: order.total,
                state: 'Declined',
                transactionId: '',
                errorMessage: (err as Error).message
            }
        }
    },
    settlePayment: async (ctx, order, payment, args): Promise<SettlePaymentResult | SettlePaymentErrorResult> => {

    }
})