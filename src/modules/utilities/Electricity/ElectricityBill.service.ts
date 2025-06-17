import { Injectable } from '@nestjs/common';
import { LoggerService } from '../../common';

import { UserInput } from '../../../lib';
import { TransactionsService } from '../../transactions/transact.service';

import axios from 'axios';
import { GqlErr } from '../../common/errors/gqlErr';
import {
    ElectricityBillProviders,
    ElectricityBillProvidersResponse,
    ElectricityPaymentInput,
    ElectricityPaymentResponse,
    ElectricityValidateAccountInput,
    ElectricityValidateAccountResponse,
    IElectricityPaymentResponse,
    IElectricityValidateAccountResponse,
} from './ElectricityBill.dto';
import { ElectricityBillProviderInput } from './ElectricityBill.dto';

@Injectable()
export class ElectricityBillService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly transaction: TransactionsService,
    ) {}

    headers = {
        headers: {
            'Content-Type': 'application/json',
            'P-API-KEY': process.env.PAYBETA_TOKEN,
        },
    };

    public async getProviders(
        input: ElectricityBillProviderInput & UserInput,
    ): Promise<ElectricityBillProvidersResponse[]> {
        this.logger.info('Get Electricity Billers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = 'https://api.paybeta.ng/v2/electricity/providers';

        const response = await axios.get(url, this.headers);

        const r = response.data as ElectricityBillProviders;
        const list = r.data.map((item) => {
            return item;
        });
        return list;
    }

    public async verifyAccount(
        input: ElectricityValidateAccountInput & UserInput,
    ): Promise<ElectricityValidateAccountResponse> {
        this.logger.info('Get Electricity Billers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = 'https://api.paybeta.ng/v2/electricity/validate';
        // {
        //     "service": "ikeja-electric",
        //     "meterNumber": "0111100049",
        //     "meterType": "postpaid"
        // }

        const response = (await axios.post(
            url,
            {
                service: input.service,
                meterNumber: input.meterNumber,
                meterType: input.meterType,
            },
            this.headers,
        )) as IElectricityValidateAccountResponse;

        const r = response.data;

        return r;
    }

    public async makePayment(
        input: ElectricityPaymentInput & UserInput,
    ): Promise<ElectricityPaymentResponse> {
        this.logger.info('Get Electricity Billers');
        const { userId, countryCode, ...rest } = input;
        if (countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = 'https://ebills.africa/wp-json/api/v2/betting';

        const response = (await axios.post(
            url,
            {
                ...rest,
            },
            this.headers,
        )) as IElectricityPaymentResponse;

        await this.transaction.create({
            amount: input.amount,
            category: 'ELECTRICITY_BILL',
            mode: 'DEBIT',
            status: 'COMPLETED',
            userId: input.userId,
            fiat_currency: input.countryCode,
            note: JSON.stringify({
                ...rest,
            }),
            transaction_hash: input.transaction_hash,
        });

        return {
            ...response.data,
        };
    }
}
