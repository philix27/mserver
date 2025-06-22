import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

@ObjectType()
export class Static_GetTokenResponse {
    id: string;
    @Field()
    symbol: string; // The same as id for now
    @Field()
    name: string;
    @Field()
    color: string;
    @Field()
    address: string;
    @Field()
    logoUrl: string;
    @Field()
    decimals: number;

    @Field()
    chainId: number;

    @Field({ nullable: true })
    isPayable?: boolean;
    @Field({ nullable: true })
    isBuyable?: boolean;
    @Field({ nullable: true })
    isSellable?: boolean;
}

@ObjectType()
export class Static_GetLinkResponse {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => Int)
    operatorId: number;
}

@ObjectType()
export class Static_GetTxnHistoryResponse {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => Int)
    operatorId: number;
}
