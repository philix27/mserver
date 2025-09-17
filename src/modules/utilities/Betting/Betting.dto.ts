import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { PaymentInput } from '../TopUps/utilities.dto';

@InputType()
export class BettingPaymentInput {
    @Field((type) => String)
    customer_id: string;

    @Field((type) => String)
    service_id: string;

    @Field(() => PaymentInput)
    payment: PaymentInput;

    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}

@ObjectType()
export class BettingPaymentResponse {
    @Field((type) => Int)
    order_id: number;

    @Field((type) => String)
    status: string;

    @Field((type) => String)
    product_name: string;

    @Field((type) => String)
    service_name: string;

    @Field((type) => String)
    customer_id: string;

    @Field((type) => String)
    customer_name: string;

    @Field((type) => String)
    customer_username: string;

    @Field((type) => String)
    customer_email_address: string;

    @Field((type) => String)
    customer_phone_number: string;

    @Field((type) => Int)
    amount: number;

    // @Field((type) => String)
    // amount_charged: string;

    // @Field((type) => String)
    // discount: string;

    // @Field((type) => String)
    // initial_balance: string;

    // @Field((type) => String)
    // final_balance: string;

    @Field((type) => String)
    request_id: string;
}

export interface IBettingPaymentResponse {
    code: string;

    message: 'ORDER PROCESSING' | 'ORDER COMPLETED' | 'ORDER REFUNDED';

    data: BettingPaymentResponse;
}

@ObjectType()
export class BettingProvidersResponse {
    @Field((type) => String)
    name: string;

    @Field((type) => String)
    logo: string;
}
@ObjectType()
export class BettingPricesResponse {
    @Field()
    amount: number;
}

@InputType()
export class BettingProvidersInput {
    @Field((type) => $Enums.CountryCode)
    countryCode: $Enums.CountryCode;
}
