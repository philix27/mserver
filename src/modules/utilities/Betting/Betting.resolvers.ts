import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
    BettingPaymentInput,
    BettingPaymentResponse,
    BettingPricesResponse,
    BettingProvidersInput,
    BettingProvidersResponse,
} from './Betting.dto';
import { FundBettingWalletService } from './Betting.service';
import { GqlAuthGuard } from '../../common/guards';

@Resolver()
export class FundBettingWalletResolver {
    constructor(private readonly service: FundBettingWalletService) { }

    @Mutation((returns) => BettingPaymentResponse)
    @UseGuards(GqlAuthGuard)
    async fundBetting_makePayment(
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
    async fundBetting_getProviders(
        @Context() context: { req: { userId: number } },
        @Args('input') input: BettingProvidersInput,
    ): Promise<BettingProvidersResponse[]> {
        const res = await this.service.getProviders({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
    @Query((returns) => [BettingPricesResponse])
    @UseGuards(GqlAuthGuard)
    async fundBetting_getPriceList(
        @Context() context: { req: { userId: number } },
        @Args('input') input: BettingProvidersInput,
    ): Promise<BettingPricesResponse[]> {
        const res = await this.service.getPriceList({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
}
