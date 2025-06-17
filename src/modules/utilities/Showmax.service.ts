import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class ShowMaxResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => String)
    data: ShowMaxResponse;
}

@ObjectType()
export class ShowMaxResponseData {
    @Field((type) => String)
    reference: string;

    @Field((type) => Int)
    amount: number;

    @Field((type) => Int)
    chargedAmount: number;

    @Field((type) => Int)
    commission: number;

    @Field((type) => String)
    biller: string;

    @Field((type) => String)
    customerId: string;

    @Field((type) => String)
    token: string;

    @Field((type) => String)
    unit: string;

    @Field((type) => String)
    bonusToken: string;

    @Field((type) => String)
    transactionDate: string;

    @Field((type) => String)
    transactionId: string;
}

