import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { $Enums } from "@prisma/client";

@ObjectType()
export class WalletTwResponse {
    @Field()
    address: string;

    @Field({ nullable: true })
    label?: string;

    @Field()
    createdAt: string;

    @Field({ nullable: true })
    smartAccountAddress?: string;
}




@ObjectType()
export class WalletCryptoResponse {
    @Field({ nullable: false })
    id: number;

    @Field({ nullable: false })
    address: string;

    @Field({ nullable: true })
    wallet_id?: string;

    @Field({ nullable: true })
    minipay?: boolean;

    @Field((type) => $Enums.ChainType)
    chainType: $Enums.ChainType;
}

// {
//     id: number;
//     created_at: Date | null;
//     updated_at: Date | null;
//     address: string;
//     wallet_id: string | null;
//     chainType: $Enums.ChainType;
//     minipay: boolean | null;
//     user_id: number | null;
// }


@InputType()
export class Wallet_CreateInput {
    @Field()
    user_uid: string;

    @Field()
    question: string;

    @Field()
    answer: string;

    @Field()
    email: string;

    @Field()
    pin: string;

}

@ObjectType()
export class Wallet_CreateResponse {
    @Field()
    message: string;

}

