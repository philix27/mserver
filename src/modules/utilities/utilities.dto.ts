import {
    Field,
    Float,
    InputType,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

export enum AirtimeCountryCode {
    NIGERIA = 'NG',
    GHANA = 'GH',
    KENYA = 'KE',
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

registerEnumType(AirtimeCountryCode, {
    name: 'AirtimeCountryCode',
});
registerEnumType($Enums.Currencies, {
    name: 'Currencies',
});

@InputType()
export class Utilities_PurchaseAirtimeInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => AirtimeCountryCode)
    countryCode: AirtimeCountryCode;

    @Field((type) => Operator)
    operator: Operator;

    @Field((type) => $Enums.Currencies)
    currency: $Enums.Currencies;
}

@ObjectType()
export class Utilities_PurchaseAirtimeResponse {
    @Field({ nullable: false })
    message: string;
}
