import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
    BettingPaymentInput,
    BettingPaymentResponse,
    BettingProvidersInput,
    BettingProvidersResponse,
} from './Betting.dto';
import { FundBettingWalletService } from './Betting.service';
import { GqlAuthGuard } from '../../common/guards';

@Resolver((of: any) => BettingPaymentResponse)
export class FundBettingWalletResolver {
    constructor(private readonly service: FundBettingWalletService) {}

    @Mutation((returns) => BettingPaymentResponse)
    @UseGuards(GqlAuthGuard)
    async makePayment(
        @Args('input') input: BettingPaymentInput,
        @Context() context: { req: { userId: number } },
    ): Promise<BettingPaymentResponse> {
        const res = await this.service.makePayment({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [BettingProvidersResponse])
    @UseGuards(GqlAuthGuard)
    async getProviders(
        @Context() context: { req: { userId: number } },
        @Args('input') input: BettingProvidersInput,
    ): Promise<BettingProvidersResponse[]> {
        const res = await this.service.getProviders({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
}
