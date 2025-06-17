import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from '../../common/guards';
import { ElectricityBillService } from './ElectricityBill.service';
import {
    ElectricityBillProvidersResponse,
    ElectricityPaymentInput,
    ElectricityPaymentResponse,
    ElectricityValidateAccountInput,
    ElectricityValidateAccountResponse,
} from './ElectricityBill.dto';

@Resolver()
export class ElectricityBillResolver {
    constructor(private readonly service: ElectricityBillService) {}

    @Mutation((returns) => ElectricityPaymentResponse)
    @UseGuards(GqlAuthGuard)
    async electricityBill_makePayment(
        @Args('input') input: ElectricityPaymentInput,
        @Context() context: { req: { userId: number } },
    ): Promise<ElectricityPaymentResponse> {
        const res = await this.service.makePayment({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => ElectricityValidateAccountResponse)
    @UseGuards(GqlAuthGuard)
    async electricityBill_verifyAccount(
        @Args('input') input: ElectricityValidateAccountInput,
        @Context() context: { req: { userId: number } },
    ): Promise<ElectricityValidateAccountResponse> {
        const res = await this.service.verifyAccount({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [ElectricityBillProvidersResponse])
    @UseGuards(GqlAuthGuard)
    async electricityBill_getProviders(
        @Context() context: { req: { userId: number } },
        @Args('input') input: ElectricityValidateAccountInput,
    ): Promise<ElectricityBillProvidersResponse[]> {
        const res = await this.service.getProviders({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
}
