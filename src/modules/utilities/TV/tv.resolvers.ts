import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { TvBillService } from './tv.service';
import { GqlAuthGuard } from '../../common/guards';
import {
    TvBill_PaymentResponse,
    TvBill_PaymentInput,
    TvBill_ValidateAccountResponse,
    TvBill_ValidateAccountInput,
    TvBill_GetTVProvidersResponse,
    TvBill_GetTVProvidersInput,
    TvBill_GetBouquetPackageResponse,
    TvBill_GetTVBouquetInput,
} from './tv.dto';

@Resolver()
export class TvBillResolver {
    constructor(private readonly service: TvBillService) {}

    @Mutation((returns) => TvBill_PaymentResponse)
    @UseGuards(GqlAuthGuard)
    async tvBills_makePayment(
        @Args('input') input: TvBill_PaymentInput,
        @Context() context: { req: { userId: number } },
    ): Promise<TvBill_PaymentResponse> {
        const res = await this.service.makePayment({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => TvBill_ValidateAccountResponse)
    @UseGuards(GqlAuthGuard)
    async tvBills_validateAccount(
        @Args('input') input: TvBill_ValidateAccountInput,
        @Context() context: { req: { userId: number } },
    ): Promise<TvBill_ValidateAccountResponse> {
        const res = await this.service.validateAccount({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [TvBill_GetTVProvidersResponse])
    @UseGuards(GqlAuthGuard)
    async tvBills_getProviders(
        @Context() context: { req: { userId: number } },
        @Args('input') input: TvBill_GetTVProvidersInput,
    ): Promise<TvBill_GetTVProvidersResponse[]> {
        const res = await this.service.getProviders({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }

    @Query((returns) => [TvBill_GetBouquetPackageResponse])
    @UseGuards(GqlAuthGuard)
    async tvBills_getBouquet(
        @Context() context: { req: { userId: number } },
        @Args('input') input: TvBill_GetTVBouquetInput,
    ): Promise<TvBill_GetBouquetPackageResponse[]> {
        const res = await this.service.getBouquet({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
}
