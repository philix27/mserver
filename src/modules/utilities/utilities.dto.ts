import {
    Field,
    Float,
    InputType,
    Int,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

export enum TopUpCountryCode {
    NIGERIA = 'NG',
    GHANA = 'GH',
    KENYA = 'KE',
    MALAWI = 'MW',
    RWANDA = 'RW',
    TANZANIA = 'TZ',
    UGANDA = 'UG',
    SOUTH_AFRICA = 'ZA',
}

export enum Operator {
    MTN = 'MTN',
    AIRTEL = 'AIRTEL',
    GLO = 'GLO',
    ETISALAT = 'ETISALAT',
}

registerEnumType(Operator, {
    name: 'Operator',
});

registerEnumType(TopUpCountryCode, {
    name: 'TopUpCountryCode',
});

@InputType()
export class Utilities_PurchaseAirtimeInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => TopUpCountryCode)
    countryCode: TopUpCountryCode;

    @Field((type) => Operator)
    operator: Operator;

    @Field((type) => $Enums.CurrencyFiat)
    currency: $Enums.CurrencyFiat;
}
@InputType()
export class Utilities_PurchaseDataBundleInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => TopUpCountryCode)
    countryCode: TopUpCountryCode;

    @Field((type) => Int)
    operator: number;

    @Field((type) => $Enums.CurrencyFiat)
    currency: $Enums.CurrencyFiat;
}

@ObjectType()
export class Utilities_PurchaseTopUpResponse {
    @Field({ nullable: false })
    message: string;
}
