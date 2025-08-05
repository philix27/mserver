import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { PaymentInput } from '../utilities.dto';

export interface IGetTVProvidersResponse {
    status: string;

    message: string;

    data: TvBill_GetTVProvidersResponse[];
}

@InputType()
export class TvBill_GetTVProvidersInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

@ObjectType()
export class TvBill_GetTVProvidersResponse {
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
export class TvBill_GetTVBouquetInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;

    @Field((type) => String)
    service: string;
}

export interface IGetBouquetResponse {
    status: string;

    message: string;

    data: {
        packages: TvBill_GetBouquetPackageResponse[];
    };
}

@ObjectType()
export class TvBill_GetBouquetPackageResponse {
    @Field((type) => String)
    code: string;

    @Field((type) => String)
    description: string;

    @Field((type) => String)
    price: string;
}

// Section
@InputType()
export class TvBill_ValidateAccountInput {
    @Field((type) => String)
    service: string;

    @Field((type) => String)
    smartCardNumber: string;
}

export interface IValidateAccountResponse {
    status: string;

    message: string;

    data: TvBill_ValidateAccountResponse;
}

@ObjectType()
export class TvBill_ValidateAccountResponse {
    @Field((type) => String)
    customerName: string;

    @Field((type) => String)
    smartCardNumber: string;

    @Field((type) => String)
    service: string;
}

// Section Payment
@InputType()
export class TvBill_PaymentInput {
    @Field((type) => String)
    service: string;

    @Field((type) => String)
    smartCardNumber: string;

    @Field((type) => String)
    amount: number;

    @Field((type) => String)
    packageCode: string;

    @Field((type) => String)
    customerName: string;

    @Field((type) => String)
    reference: string;

    @Field(() => PaymentInput)
    payment: PaymentInput;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

export interface IPaymentResponse {
    status: string;
    message: string;
    data: IPaymentData;
}

export interface IPaymentData {
    reference: string;
    amount: number;
    chargedAmount: number;
    commission: number;
    biller: string;
    customerId: string;
    token: String;
    unit: String;
    bonusToken: String;
    transactionDate: string;
    transactionId: string;
}

@ObjectType()
export class TvBill_PaymentResponse {
    @Field((type) => Int)
    amount: number;

    @Field((type) => Int)
    commission: number;

    @Field((type) => String)
    biller: string;

    @Field((type) => String)
    customerId: string;

    @Field((type) => String)
    unit: String;

    @Field((type) => String)
    transactionDate: string;

    @Field((type) => String)
    transactionId: string;
}
