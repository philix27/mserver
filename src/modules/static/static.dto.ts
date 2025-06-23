import {
    Field,
    Float,
    Int,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
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

export enum LinkGroup {
    Docs,
    Social,
    Learn,
}

registerEnumType(LinkGroup, {
    name: 'StaticLinkGroup',
});

@ObjectType()
export class Static_GetLinkResponse {
    @Field()
    title: string;

    @Field({ nullable: true })
    desc?: string;

    @Field()
    url: string;

    @Field({ nullable: true })
    imgLink?: string;

    @Field({ nullable: true })
    category?: string;

    @Field((type) => LinkGroup)
    group: LinkGroup;
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
