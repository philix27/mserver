import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

export interface ElectricityBillProviders {
    status: string;
    message: string;
    data: ElectricityBillProvidersResponse[];
}
@InputType()
export class ElectricityBillProviderInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

@ObjectType()
export class ElectricityBillProvidersResponse {
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

// Section
@InputType()
export class ElectricityValidateAccountInput {
    @Field((type) => String)
    service: string;

    @Field((type) => String)
    meterNumber: string;

    @Field((type) => String)
    meterType: string;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

export interface IElectricityValidateAccountResponse {
    status: string;

    message: string;

    data: ElectricityValidateAccountResponse;
}

@ObjectType()
export class ElectricityValidateAccountResponse {
    @Field((type) => String)
    customerName: string;

    @Field((type) => String)
    customerAddress: string;

    @Field((type) => String)
    meterNumber: string;

    @Field((type) => String)
    meterType: string;

    @Field((type) => Int)
    minimuVendAmount: number;
}

//
@InputType()
export class ElectricityPaymentInput {
    @Field((type) => String)
    service: string;

    @Field((type) => String)
    meterNumber: string;

    @Field((type) => String)
    meterType: string;

    @Field((type) => Int)
    amount: number;

    @Field((type) => String)
    customerName: string;

    @Field((type) => String)
    customerAddress: string;

    @Field((type) => String)
    reference: string;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field()
    transaction_hash: string;
}

export interface IElectricityPaymentResponse {
    status: string;
    message: string;
    data: ElectricityPaymentResponse;
}

@ObjectType()
export class ElectricityPaymentResponse {
    @Field((type) => String)
    reference: string;

    @Field((type) => String)
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
