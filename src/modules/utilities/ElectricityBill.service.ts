import { Injectable } from '@nestjs/common';
import { LoggerService, secrets } from '../common';
import {
    Utilities_GetBillingOperatorsInput,
    Utilities_BillingResponse,
} from './utilities.dto';
import { UserInput } from '../../lib';
import { TransactionsService } from '../transactions/transact.service';

import axios from 'axios';
import { GqlErr } from '../common/errors/gqlErr';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@Injectable()
export class ElectricityBillService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly transaction: TransactionsService,
    ) {}

    headers = {
        'Content-Type': 'application/json',
        'P-API-KEY': process.env.PAYBETA_TOKEN,
    };

    public async getProviders(
        input: Utilities_GetBillingOperatorsInput & UserInput,
    ): Promise<ElectricityBillProvidersResponse[]> {
        this.logger.info('Get Electricity Billers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = 'https://api.paybeta.ng/v2/electricity/providers';

        const response = await axios.get(url, { headers: this.headers });

        const r = response.data as ElectricityBillProviders;
        const list = r.data.map((item) => {
            return item;
        });
        return list;
    }

    public async verifyAccount(
        input: Utilities_GetBillingOperatorsInput & UserInput,
    ): Promise<ElectricityBillProvidersResponse[]> {
        this.logger.info('Get Electricity Billers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = 'https://api.paybeta.ng/v2/electricity/providers';

        const response = await axios.get(url, { headers: this.headers });

        const r = response.data as ElectricityBillProviders;
        const list = r.data.map((item) => {
            return item;
        });
        return list;
    }
}


@ObjectType()
export class ElectricityBillProviders {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => [ElectricityBillProvidersResponse])
    data: ElectricityBillProvidersResponse[];
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
@ObjectType()
export class ElectricityValidateAccount {
    @Field((type) => String)
    service: string;

    @Field((type) => String)
    meterNumber: string;

    @Field((type) => String)
    meterType: string;
}
@ObjectType()
export class ElectricityValidateAccountResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => [ElectricityValidateAccountResponseData])
    data: ElectricityValidateAccountResponseData;
}

@ObjectType()
export class ElectricityValidateAccountResponseData {
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
}

@ObjectType()
export class PaymentResponse {
    @Field((type) => String)
    status: string;

    @Field((type) => String)
    message: string;

    @Field((type) => [PaymentResponseData])
    data: PaymentResponseData;
}

@ObjectType()
export class PaymentResponseData {
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
