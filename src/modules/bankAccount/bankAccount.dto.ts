import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class BankAccount_CreateInput {
    @Field({ nullable: false })
    accountName: string;

    @Field({ nullable: false })
    accountNo: string;

    @Field({ nullable: false })
    bankName: string;
}
@ObjectType()
export class BankAccount_Response {
    @Field({ nullable: false })
    id: number;

    @Field({ nullable: false })
    account_name: string;

    @Field({ nullable: false })
    account_no: string;

    @Field({ nullable: false })
    bank_name: string;
}


@InputType()
export class BankAccount_DeleteInput {
    @Field()
    accountId: number;
}
@ObjectType()
export class BankAccount_DeleteResponse {
    @Field()
    message: string;
}
