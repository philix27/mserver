import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { OnchainTransactionsService } from "./onchain.service";
import {
    Onchain_ClaimRewardsInput,
    Onchain_ClaimRewardsResponse,
    Onchain_TransferTokenInput,
    Onchain_TransferTokenResponse,
    TransactionDto,
} from "./transact.dto";
import { UseGuards } from "@nestjs/common";
import { VendorGuard } from "../common/guards";


@Resolver((of: any) => TransactionDto)
export class OnchainTransactionsResolver {
    constructor(private readonly service: OnchainTransactionsService) { }

    @Mutation((returns) => Onchain_ClaimRewardsResponse)
    // @UseGuards(VendorGuard)
    async onchain_claim(
        @Context() context: { req: { userId: number } },
        @Args("input") input: Onchain_ClaimRewardsInput
    ): Promise<Onchain_ClaimRewardsResponse> {
        const res = await this.service.claim({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Onchain_TransferTokenResponse)
    @UseGuards(VendorGuard)
    async onchain_transferToken(
        @Context() context: { req: { userId: number } },
        @Args("input") input: Onchain_TransferTokenInput
    ): Promise<Onchain_TransferTokenResponse> {
        const res = await this.service.transferToken({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }
}
