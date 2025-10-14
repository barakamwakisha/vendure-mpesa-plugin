import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { Ctx, RequestContext } from "@vendure/core"

import { MpesaService } from "../service/mpesa.service"
import { MpesaTransactionVerification } from "../types"

@Resolver()
export class MpesaShopResolver {
    constructor(private readonly mpesaService: MpesaService) {}

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
