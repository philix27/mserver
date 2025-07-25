import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BankAccountService } from './bankAccount.service';
import {
    BankAccount_CreateInput,
    BankAccount_DeleteInput,
    BankAccount_DeleteResponse,
    BankAccount_Response,
    BankGetAccountName_Input,
    BankGetAccountName_Response,
    BankList_Response,
} from './bankAccount.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards';

@Resolver((of: any) => BankAccount_Response)
export class BankAccountResolver {
    constructor(private readonly service: BankAccountService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => BankAccount_Response)
    async bankAccount_create(
        @Context() context: any,
        @Args('input') input: BankAccount_CreateInput,
    ): Promise<BankAccount_Response> {
        const { userId } = context.req;
        const res = await this.service.create({
            userId,
            ...input,
        });

        return res!;
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => BankAccount_DeleteResponse)
    async bankAccount_delete(
        @Context() context: any,
        @Args('input') input: BankAccount_DeleteInput,
    ) {
        const { userId } = context.req;
        const res = await this.service.delete({
            userId,
            ...input,
        });

        return res!;
    }

    @UseGuards(GqlAuthGuard)
    @Query((returns) => [BankAccount_Response])
    async bankAccount_getAll(
        @Context() context: any,
    ): Promise<BankAccount_Response[]> {
        const { userId } = context.req;
        const res = await this.service.getAll({ userId });

        return res;
    }

    @UseGuards(GqlAuthGuard)
    @Query((returns) => [BankList_Response])
    async bankList(@Context() context: any): Promise<BankList_Response[]> {
        const { userId } = context.req;
        const res = await this.service.getBanksList({ userId });

        return res;
    }

    @UseGuards(GqlAuthGuard)
    @Query((returns) => BankGetAccountName_Response)
    async bank_verifyAccountNo(
        @Context() context: any,
        @Args('input') input: BankGetAccountName_Input,
    ): Promise<BankGetAccountName_Response> {
        const { userId } = context.req;
        const res = await this.service.getAccountName({ userId, ...input });

        return res;
    }
}
