import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { PaymentInput } from '../TopUps/utilities.dto';

export interface IElectricityBillProviders {
    status: string;
    message: string;
    data: ElectricityBill_ProvidersResponse[];
}
@InputType()
export class ElectricityBill_ProviderInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

@ObjectType()
export class ElectricityBill_ProvidersResponse {
    @Field((type) => String)
    name: string;

    @Field((type) => String)
    category: string;

    @Field((type) => String)
    slug: string;

    // @Field((type) => Boolean)
    // status: boolean;

    @Field((type) => String)
    logo: string;
}

// Section
@InputType()
export class ElectricityBill_ValidateAccountInput {
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

    data: ElectricityBill_ValidateAccountResponse;
}

@ObjectType()
export class ElectricityBill_ValidateAccountResponse {
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
export class ElectricityBill_PaymentInput {
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

    @Field(() => PaymentInput)
    payment: PaymentInput;
}

export interface IElectricityPaymentResponse {
    status: string;
    message: string;
    data: ElectricityBill_PaymentResponse;
}

@ObjectType()
export class ElectricityBill_PaymentResponse {
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
