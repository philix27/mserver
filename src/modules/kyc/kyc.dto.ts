import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import {
    Auth_sendEmailOtpInput,
    Auth_sendEmailOtpResponse,
    Auth_verifyEmailOtpInput,
    Auth_verifyOtpResponse,
} from '../auth/auth.dto';
import { $Enums } from '@prisma/client';

@ObjectType()
export class Kyc_SendEmailResponse extends PartialType(
    Auth_sendEmailOtpResponse,
    ObjectType,
) { }

@ObjectType()
export class Kyc_VerifyEmailResponse extends PartialType(
    Auth_verifyOtpResponse,
    ObjectType,
) { }

@InputType()
export class Kyc_SendEmailOtpInput extends PartialType(
    Auth_sendEmailOtpInput,
    InputType,
) { }

@InputType()
export class Kyc_VerifyEmailOtpInput extends PartialType(
    Auth_verifyEmailOtpInput,
    InputType,
) { }

@InputType()
export class Kyc_SendPhoneOtpInput {
    @Field()
    phone: string;
}


@InputType()
export class Kyc_AddBvnNinInput {
    @Field()
    bvn: string;

    @Field()
    nin: string;
}

@ObjectType()
export class Kyc_AddBvnResponse {
    @Field()
    message: string;
}



@InputType()
export class Kyc_CreateTransactionPinInput {
    @Field()
    pin: string;
}

@ObjectType()
export class Kyc_Response {
    @Field()
    message: string;
}
@ObjectType()
export class Kyc_SendOtpResponse {
    @Field()
    message: string;

    @Field()
    otpToken: string;
}

@InputType()
export class Kyc_AddNamesInput {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field({ nullable: true })
    middleName?: string;

    @Field({ nullable: true })
    dob?: string;

    @Field({ nullable: true })
    isMale?: boolean;
}



@InputType()
export class Kyc_AddAddressInfoInput {
    @Field()
    state: string;

    @Field()
    street: string;

    @Field()
    houseAddress: string;

    @Field((type) => $Enums.CountryCode)
    country: $Enums.CountryCode;
}

@InputType()
export class Kyc_AddAddressProofInput {
    @Field()
    proofOfAddressUrl: string;
}

@InputType()
export class Kyc_verifyPhoneOtpAndInput {
    @Field()
    phone: string;

    @Field()
    otp: string;

    @Field()
    token: string;

}

@ObjectType()
export class Kyc_UserResponse {

    @Field({ nullable: true })
    dob?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    bvn?: string;

    @Field({ nullable: true })
    nin?: string;

    @Field({ nullable: true })
    state?: string;

    @Field({ nullable: true })
    id?: number;

    @Field({ nullable: true })
    telegram_id?: string;

    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    middlename?: string

    @Field({ nullable: true })
    gender?: $Enums.Gender;

    @Field({ nullable: true })
    role?: $Enums.UserRole;

    @Field({ nullable: true })
    country_code?: $Enums.CountryCode;

    @Field({ nullable: true })
    created_at?: Date;

    @Field({ nullable: true })
    bvn_status?: $Enums.CredentialsStatus;

    @Field({ nullable: true })
    nin_status?: $Enums.CredentialsStatus;

}