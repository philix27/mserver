import {
    Field,
    Float,
    InputType,
    Int,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { number } from 'joi';

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

    @Field((type) => Int)
    operatorId: number;
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
    operatorId: number;
}

@InputType()
export class Utilities_GetOperatorsInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

// @InputType()
// export class Utilities_GetAirtimeOperatorsInput {
//     @Field((type) => $Enums.CountryCode)
//     countryCode: $Enums.CountryCode;

//     @Field((type) => Int)
//     isAvaliable: boolean;
// }

@ObjectType()
export class Utilities_PurchaseTopUpResponse {
    @Field({ nullable: false })
    message: string;
}

@ObjectType()
export class Utilities_GetOperatorResponse {
    @Field((type) => [IOperator])
    dataPlan: IOperator[];

    @Field((type) => [IOperator])
    dataBundles: IOperator[];

    @Field((type) => [IAirtimeOperator])
    airtime: IAirtimeOperator[];
}

@ObjectType()
class IOperator {
    @Field((type) => String)
    name: string;

    @Field((type) => String)
    logo: string;

    @Field((type) => Int)
    operatorId: number;

    @Field((type) => [IDataPlan], { nullable: true })
    plans?: IDataPlan[];
}

@ObjectType()
class IAirtimeOperator {
    @Field((type) => String)
    name: string;

    @Field((type) => String)
    logo: string;

    @Field((type) => Int)
    operatorId: number;

    @Field((type) => Int, { nullable: true })
    maxAmount?: number;

    @Field((type) => Int, { nullable: true })
    minAmount?: number;

    @Field((type) => [Int], { nullable: true })
    suggestedAmounts?: number[];
}
@ObjectType()
export class IDataPlan {
    @Field((type) => Int)
    amount: number;

    @Field((type) => String)
    desc: string;
}
