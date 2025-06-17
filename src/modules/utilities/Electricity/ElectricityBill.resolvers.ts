import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from '../../common/guards';
import { ElectricityBillService } from './ElectricityBill.service';
import {
    ElectricityBill_ProvidersResponse,
    ElectricityBill_PaymentInput,
    ElectricityBill_PaymentResponse,
    ElectricityBill_ValidateAccountInput,
    ElectricityBill_ValidateAccountResponse,
} from './ElectricityBill.dto';

@Resolver()
export class ElectricityBillResolver {
    constructor(private readonly service: ElectricityBillService) {}

    @Mutation((returns) => ElectricityBill_PaymentResponse)
    @UseGuards(GqlAuthGuard)
    async electricityBill_makePayment(
        @Args('input') input: ElectricityBill_PaymentInput,
        @Context() context: { req: { userId: number } },
    ): Promise<ElectricityBill_PaymentResponse> {
        const res = await this.service.makePayment({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => ElectricityBill_ValidateAccountResponse)
    @UseGuards(GqlAuthGuard)
    async electricityBill_verifyAccount(
        @Args('input') input: ElectricityBill_ValidateAccountInput,
        @Context() context: { req: { userId: number } },
    ): Promise<ElectricityBill_ValidateAccountResponse> {
        const res = await this.service.verifyAccount({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [ElectricityBill_ProvidersResponse])
    @UseGuards(GqlAuthGuard)
    async electricityBill_getProviders(
        @Context() context: { req: { userId: number } },
        @Args('input') input: ElectricityBill_ValidateAccountInput,
    ): Promise<ElectricityBill_ProvidersResponse[]> {
        const res = await this.service.getProviders({
            userId: context.req.userId,
            ...input,
        });

        return res!;
    }
}
