import {
    Field,
    Float,
    InputType,
    Int,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

export enum Operator {
    MTN = 'MTN',
    AIRTEL = 'AIRTEL',
    GLO = 'GLO',
    ETISALAT = 'ETISALAT',
}

registerEnumType(Operator, {
    name: 'Operator',
});

@InputType()
export class Utilities_PurchaseAirtimeInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => Operator)
    operator: Operator;
}
@InputType()
export class Utilities_PurchaseDataBundleInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field()
    transaction_hash: string;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => Int)
    operator: number;
}

@InputType()
export class Utilities_GetAirtimeOperatorsInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => Int)
    isAvaliable: boolean;
}


@ObjectType()
export class Utilities_PurchaseTopUpResponse {
    @Field({ nullable: false })
    message: string;
}
