import { Args, Mutation, Resolver } from "@nestjs/graphql"
import {
    Allow,
    Ctx,
    CustomerService,
    OrderService,
    Permission,
    RequestContext,
    UnauthorizedError,
} from "@vendure/core"

import { MpesaService } from "../service/mpesa.service"
import {
    MpesaTransactionInitiation,
    MpesaTransactionVerification,
} from "../types"

@Resolver()
export class MpesaShopResolver {
    constructor(
        private readonly mpesaService: MpesaService,
        private readonly orderService: OrderService,
        private readonly customerService: CustomerService,
    ) {}

    @Mutation()
    @Allow(Permission.Owner)
    async initiateMpesaTransaction(
        @Ctx() ctx: RequestContext,
        @Args() args: { phoneNumber: string },
    ): Promise<MpesaTransactionInitiation> {
        if (!ctx.authorizedAsOwnerOnly) {
            throw new UnauthorizedError()
        }

        return this.mpesaService.initiateStkPush(ctx, args.phoneNumber)
    }

    @Mutation()
    async verifyMpesaTransaction(
        @Ctx() ctx: RequestContext,
        @Args() args: { transactionId: string },
    ): Promise<MpesaTransactionVerification> {
        const verification = await this.mpesaService.verifyMpesaPayment(
            ctx,
            args.transactionId,
        )
        return verification
    }
}
