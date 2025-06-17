import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetTVResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => [GetTVResponseData])
    data: GetTVResponseData[];
}

@ObjectType()
export class GetTVResponseData {
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
@ObjectType()
export class GetBouquetResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => GetBouquetData)
    data: GetBouquetData;
}

@ObjectType()
export class GetBouquetData {
    @Field((type) => [Package])
    packages: Package[];
}

@ObjectType()
export class Package {
    @Field((type) => String)
    code: string;

    @Field((type) => String)
    description: string;

    @Field((type) => String)
    price: string;
}

// Section
@InputType()
export class ValidateAccountInput {
    @Field((type) => String)
    service: string;

    @Field((type) => String)
    smartCardNumber: string;
}

@ObjectType()
export class ValidateAccountResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => ValidateAccountResponseData)
    data: ValidateAccountResponseData;
}

@ObjectType()
export class ValidateAccountResponseData {
    @Field((type) => String)
    customerName: string;

    @Field((type) => String)
    smartCardNumber: string;

    @Field((type) => String)
    service: string;
}

// Section Payment
@InputType()
export class PaymentInput {
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
}

@ObjectType()
export class PaymentResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => String)
    data: PaymentResponseData;
}

@ObjectType()
export class PaymentResponseData {
    @Field((type) => String)
    reference: string;

    @Field((type) => String)
    amount: number;

    @Field((type) => String)
    chargedAmount: number;

    @Field((type) => String)
    commission: number;

    @Field((type) => String)
    biller: string;

    @Field((type) => String)
    customerId: string;

    @Field((type) => String)
    token: String;

    @Field((type) => String)
    unit: String;

    @Field((type) => String)
    bonusToken: String;

    @Field((type) => String)
    transactionDate: string;

    @Field((type) => String)
    transactionId: string;
}
