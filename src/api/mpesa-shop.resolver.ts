import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { Ctx, RequestContext } from "@vendure/core"

import { MpesaService } from "../service/mpesa.service"

@Resolver()
export class MpesaShopResolver {
    constructor(private readonly mpesaService: MpesaService) {}

    @Mutation()
    async verifyMpesaTransaction(
        @Ctx() ctx: RequestContext,
        @Args() args: { transactionId: string },
    ): Promise<boolean> {
        const isSuccessful = await this.mpesaService.verifyMpesaPayment(
            ctx,
            args.transactionId,
        )
        return isSuccessful
    }
}
