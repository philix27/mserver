import {
    Field,
    Float,
    ID,
    InputType,
    Int,
    ObjectType,
    PartialType,
} from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { PaymentInput } from '../utilities/TopUps/utilities.dto';



@InputType()
export class Order_CreteSellInput {
    @Field(() => PaymentInput)
    payment: PaymentInput;

    @Field({ nullable: false })
    bank_id: number;

    @Field((type) => $Enums.OrderActions, { nullable: true })
    action_user?: $Enums.OrderActions;

    @Field((type) => $Enums.OrderActions, { nullable: true })
    action_merchant?: $Enums.OrderActions;

    @Field((type) => $Enums.TradeType)
    trade_type: $Enums.TradeType;

    @Field((type) => $Enums.CountryCode)
    currency_fiat: $Enums.CountryCode;

    @Field((type) => $Enums.OrderStatus)
    status: $Enums.OrderStatus;
}

@InputType()
export class Order_CreteBuyInput {

    @Field()
    accountName: string;

    @Field()
    accountNo: string;

    @Field()
    bankName: string;

    @Field()
    transaction_pin: string;

    @Field()
    user_uid: string;

    @Field()
    tokenAddress: string;

    @Field()
    tokenChain: string;

    @Field((returns) => Float)
    amountCrypto: number;

    @Field((returns) => Float)
    amountFiat: number;

    @Field((type) => $Enums.CountryCode)
    fiatCurrency: $Enums.CountryCode;

}

@ObjectType()
export class Order_RecipientAccountDetailsResponse {
    @Field()
    accountName: string;

    @Field()
    accountNo: string;

    @Field()
    bankName: string;

    @Field()
    instructions: string;
}


@InputType()
class Order_Dto {
    @Field({ nullable: false })
    bank_id: number;

    @Field((type) => $Enums.OrderActions, { nullable: true })
    action_user?: $Enums.OrderActions;

    @Field((type) => $Enums.OrderActions, { nullable: true })
    action_merchant?: $Enums.OrderActions;

    @Field((type) => $Enums.TradeType)
    trade_type: $Enums.TradeType;

    @Field((type) => $Enums.CountryCode)
    currency_fiat: $Enums.CountryCode;

    @Field((type) => $Enums.OrderStatus)
    status: $Enums.OrderStatus;

    // @Field({ nullable: false })
    // merchant_id: number;

    // @Field({ nullable: false })
    // amount_crypto: number;

    // @Field({ nullable: true })
    // txn_hash?: string;

    // @Field({ nullable: false })
    // amount_fiat: number;

    // @Field({ nullable: false })
    // estimated_duration: string;

    // @Field({ nullable: false })
    // wallet_merchant: string;

    // @Field({ nullable: false })
    // wallet_customer: string;

    // @Field({ nullable: false })
    // bank_code: string;

    // @Field((type) => $Enums.OrderMode, { nullable: true })
    // mode?: $Enums.OrderMode;


    // @Field({ nullable: false })
    // currency_crypto: string;

    // @Field({ nullable: false })
    // currency_network: string;

}


@ObjectType()
export class Order_Response extends PartialType(Order_Dto, ObjectType) {
    @Field((type) => ID)
    id: number;
}

@ObjectType()
export class Order_GetAllResponse {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    bank_id: number;

    @Field((type) => $Enums.OrderActions, { nullable: true })
    action_user?: $Enums.OrderActions;

    @Field((type) => $Enums.OrderActions, { nullable: true })
    action_merchant?: $Enums.OrderActions;

    @Field((type) => $Enums.TradeType)
    trade_type: $Enums.TradeType;

    @Field((type) => $Enums.CountryCode)
    currency_fiat: $Enums.CountryCode;

    @Field((type) => $Enums.OrderStatus)
    status: $Enums.OrderStatus;

    @Field()
    amount_fiat: number;

    @Field()
    amount_crypto: number;
}

@InputType()
export class Order_GetAllInput {
    @Field((type) => $Enums.TradeType, { nullable: true })
    trade_type?: $Enums.TradeType;

    @Field((type) => $Enums.CountryCode, { nullable: true })
    currency_fiat?: $Enums.CountryCode;

    @Field((type) => String, { nullable: true })
    currency_crypto?: string;

    @Field((type) => $Enums.OrderStatus, { nullable: true })
    status?: $Enums.OrderStatus;
}

@InputType()
export class Order_GetOneInput {
    @Field((type) => ID)
    id: number;
}

@InputType()
export class Order_MoveCryptoToEscrowInput {
    @Field((type) => ID)
    id: number;

    @Field((type) => Int)
    amountCrypto: number;

    @Field((type) => String)
    currencyCrypto: string;

    @Field((type) => $Enums.OrderActions)
    action: $Enums.OrderActions;
}

@InputType()
export class Order_FaitSentInput {
    @Field((type) => ID)
    id: number;

    @Field((type) => Int)
    amountFiat: number;

    @Field((type) => $Enums.CountryCode)
    currencyFiat: $Enums.CountryCode;
}

@InputType()
export class Order_FaitReceivedInput {
    @Field((type) => ID)
    id: number;

    @Field((type) => Int)
    amountFiat: number;

    @Field((type) => $Enums.CountryCode)
    currencyFiat: $Enums.CountryCode;

    // @Field((type) => $Enums)
    // sender: $Enums.OrderParticipant;
}

@InputType()
export class Order_ReleaseCryptoFromEscrowInput { }

@InputType()
export class Order_AppealInput {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    reason: string;
}

@InputType()
export class Order_CancelInput {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: false })
    reason: string;
}

@ObjectType()
export class Order_CreteSellResponse {
    @Field()
    message: string;
}



@ObjectType()
export class Order_CreteBuyResponse extends PartialType(
    Order_CreteBuyInput,
    ObjectType,
) {
    @Field()
    message: string;
}
