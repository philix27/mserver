import { Injectable } from '@nestjs/common';
import { LoggerService } from '../../common';

import { UserInput } from '../../../lib';
import { TransactionsService } from '../../transactions/transact.service';

import axios from 'axios';
import { GqlErr } from '../../common/errors/gqlErr';
import {
    ElectricityBill_PaymentInput,
    ElectricityBill_PaymentResponse,
    ElectricityBill_ProviderInput,
    ElectricityBill_ProvidersResponse,
    ElectricityBill_ValidateAccountInput,
    ElectricityBill_ValidateAccountResponse,
    IElectricityBillProviders,
    IElectricityPaymentResponse,
    IElectricityValidateAccountResponse,
} from './ElectricityBill.dto';

@Injectable()
export class ElectricityBillService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly transaction: TransactionsService,
    ) { }

    headers = {
        headers: {
            'Content-Type': 'application/json',
            'P-API-KEY': process.env.PAYBETA_TOKEN,
        },
    };

    public async getProviders(
        input: ElectricityBill_ProviderInput & UserInput,
    ): Promise<ElectricityBill_ProvidersResponse[]> {
        this.logger.info('Get Electricity Bill Provider');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = 'https://api.paybeta.ng/v2/electricity/providers';

        try {

            const response = await axios.get(url, this.headers);

            const r = response.data as IElectricityBillProviders;
            const list = r.data.map((item) => {
                return item;
            });

            return list;
        } catch (error) {
            console.log("Error " + error)
        }


    }

    public async verifyAccount(
        input: ElectricityBill_ValidateAccountInput & UserInput,
    ): Promise<ElectricityBill_ValidateAccountResponse> {
        this.logger.info('Electricity Billers - Verify Account');

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
        input: ElectricityBill_PaymentInput & UserInput,
    ): Promise<ElectricityBill_PaymentResponse> {
        this.logger.info('Electricity Bill - Make payment');
        const { userId, countryCode, ...rest } = input;
        if (countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }
        const transaction_hash = "hash from transfer"

        const url = 'https://api.paybeta.ng/v2/electricity/purchase';

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
            transaction_hash: transaction_hash,
        });

        return {
            ...response.data,
        };
    }
}
