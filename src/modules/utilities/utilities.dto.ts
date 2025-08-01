import {
    Field,
    Float,
    InputType,
    Int,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

@InputType()
export class PaymentInput {
    @Field()
    transaction_pin: string;

    @Field()
    user_uid: string;

    @Field({ nullable: true })
    isNative?: boolean;

    @Field()
    tokenAddress: string;

    @Field()
    tokenChain: string;

    @Field((returns) => Float)
    amount: number;
}


@InputType()
export class Utilities_PurchaseAirtimeInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => Int)
    operatorId: number;

    @Field(() => PaymentInput)
    payment: PaymentInput;
}



@InputType()
export class Utilities_PurchaseDataBundleInput {
    @Field({ nullable: false })
    phoneNo: string;

    @Field((returns) => Float)
    amount: number;

    @Field(() => PaymentInput)
    payment: PaymentInput;

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

export enum BillerType {
    Electricity = 'Electricity',
    Water = 'Water',
    Internet = 'Internet',
}

registerEnumType(BillerType, {
    name: 'BillerType',
});

@InputType()
export class Utilities_GetBillingOperatorsInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => BillerType, { nullable: true })
    biller_type?: BillerType;
}

@ObjectType()
export class Utilities_BillingResponse {
    @Field((type) => String)
    name: string;

    @Field((type) => String)
    category: string;

    @Field((type) => String)
    slug: string;

    @Field((type) => Boolean)
    status: boolean;

    @Field((type) => String)
    logo: string;
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
    title: string;

    @Field({ nullable: false })
    subtitle: string;
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
