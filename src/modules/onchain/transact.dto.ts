import { Field, Float, ID, InputType, Int, ObjectType, } from "@nestjs/graphql";
import { $Enums } from "@prisma/client";
import { PaymentInput } from "../utilities/utilities.dto";

@ObjectType()
export class TransactionDto {
    @Field((type) => ID)
    id: number;

    @Field((type) => Float)
    amount: number;

    @Field((type) => $Enums.TransactionCategory)
    category: $Enums.TransactionCategory;

    @Field((type) => $Enums.TransactionsMode)
    mode: $Enums.TransactionsMode

    @Field((type) => $Enums.TransactionStatus)
    status: $Enums.TransactionStatus;

    @Field()
    note: string;

}

@InputType()
export class Onchain_ClaimRewardsInput {
    @Field()
    tokenAddress: string;

    @Field()
    uid: string;

    @Field(() => PaymentInput)
    payment: PaymentInput;
}


@ObjectType()
export class Onchain_ClaimRewardsResponse {

    @Field()
    message: string;

}

@InputType()
export class Transaction_GetOneInput {
    @Field((type) => Int)
    id: number;
}
