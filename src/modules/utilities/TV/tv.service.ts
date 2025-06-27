import { Injectable } from '@nestjs/common';
import { UserInput } from 'src/lib';
import { GqlErr } from '../../common/errors/gqlErr';
import axios from 'axios';
import { TransactionsService } from '../../transactions/transact.service';
import { LoggerService } from '../../common';
import {
    IGetBouquetResponse,
    IGetTVProvidersResponse,
    IPaymentResponse,
    IValidateAccountResponse,
    TvBill_GetBouquetPackageResponse,
    TvBill_GetTVBouquetInput,
    TvBill_GetTVProvidersInput,
    TvBill_GetTVProvidersResponse,
    TvBill_PaymentInput,
    TvBill_PaymentResponse,
    TvBill_ValidateAccountInput,
    TvBill_ValidateAccountResponse,
} from './tv.dto';

@Injectable()
export class TvBillService {
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
    baseUrl = 'https://api.paybeta.ng/v2/cable/';

    public async getProviders(
        input: TvBill_GetTVProvidersInput & UserInput,
    ): Promise<TvBill_GetTVProvidersResponse[]> {
        this.logger.info('Get TV Providers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = this.baseUrl.concat('providers');

        const response = await axios.get(url, this.headers);
        const r = response.data as IGetTVProvidersResponse;
        console.log('Data TV', r.data);
        return r.data;
    }

    public async getBouquet(
        input: TvBill_GetTVBouquetInput & UserInput,
    ): Promise<TvBill_GetBouquetPackageResponse[]> {
        this.logger.info('Get TV Bouquet');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        const url = this.baseUrl.concat(`bouquet?service=${input.service}`);

        const response = await axios.get(url, this.headers);
        const r = response.data as IGetBouquetResponse;
        return r.data.packages;
    }

    public async validateAccount(
        input: TvBill_ValidateAccountInput & UserInput,
    ): Promise<TvBill_ValidateAccountResponse> {
        this.logger.info('Get Electricity Billers');

        const url = this.baseUrl.concat(`validate`);

        const response = (await axios.post(
            url,
            { service: input.service, smartCardNumber: input.smartCardNumber },
            this.headers,
        )) as IValidateAccountResponse;

        return response.data;
    }

    public async makePayment(
        input: TvBill_PaymentInput & UserInput,
    ): Promise<TvBill_PaymentResponse> {
        this.logger.info('Get Electricity Billers');
        const { countryCode, txn_hash, ...payload } = input;

        if (countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        // validate
        // Amount in NGN (min ₦100, max ₦100,000).

        const url = this.baseUrl.concat('purchase');

        const response = (await axios.post(
            url,
            {
                ...payload,
            },
            this.headers,
        )) as IPaymentResponse;

        await this.transaction.create({
            amount: input.amount,
            category: 'TV_BILL',
            mode: 'DEBIT',
            status: 'COMPLETED',
            userId: input.userId,
            fiat_currency: input.countryCode,
            note: JSON.stringify({
                ...response.data,
                hash: input.txn_hash,
            }),
            transaction_hash: input.txn_hash,
        });

        return response.data;
    }
}
