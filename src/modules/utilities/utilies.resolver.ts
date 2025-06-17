import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtilitiesService } from './utilities.service';
import {
    Utilities_PurchaseTopUpResponse,
    Utilities_PurchaseAirtimeInput,
    Utilities_PurchaseDataBundleInput,
    Utilities_GetOperatorResponse,
    Utilities_GetOperatorsInput,
} from './utilities.dto';
import { GqlAuthGuard,  } from '../common/guards';
import { UseGuards } from '@nestjs/common';

@Resolver((of: any) => Utilities_PurchaseTopUpResponse, { isAbstract: false })
export class UtilitiesResolver {
    constructor(private readonly service: UtilitiesService) {}

    @Mutation((returns) => Utilities_PurchaseTopUpResponse)
    @UseGuards(GqlAuthGuard)
    async utility_purchaseAirtime(
        @Args('input') input: Utilities_PurchaseAirtimeInput,
        @Context() context: { req: { userId: number } },
    ): Promise<Utilities_PurchaseTopUpResponse> {
        const res = await this.service.purchaseAirtime({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Utilities_PurchaseTopUpResponse)
    @UseGuards(GqlAuthGuard)
    async utility_purchaseDataBundle(
        @Args('input') input: Utilities_PurchaseDataBundleInput,
        @Context() context: { req: { userId: number } },
    ): Promise<Utilities_PurchaseTopUpResponse> {
        const res = await this.service.purchaseDataBundle({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Utilities_PurchaseTopUpResponse)
    @UseGuards(GqlAuthGuard)
    async utility_payBill(
        @Args('input') input: Utilities_PurchaseDataBundleInput,
        @Context() context: { req: { userId: number } },
    ): Promise<Utilities_PurchaseTopUpResponse> {
        const res = await this.service.purchaseDataBundle({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => Utilities_GetOperatorResponse)
    @UseGuards(GqlAuthGuard)
    async utility_getTopUpOperators(
        @Context() context: { req: { userId: number } },
        @Args('input') input: Utilities_GetOperatorsInput,
    ): Promise<Utilities_GetOperatorResponse> {
        const res = await this.service.getOperators({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
}
