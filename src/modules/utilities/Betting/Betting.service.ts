import { Injectable } from '@nestjs/common';
import { UserInput } from 'src/lib';
import { GqlErr } from '../../common/errors/gqlErr';
import axios from 'axios';
import { TransactionsService } from '../../transactions/transact.service';
import { LoggerService } from '../../common';
import {
    BettingPaymentInput,
    BettingPaymentResponse,
    BettingPricesResponse,
    BettingProvidersInput,
    BettingProvidersResponse,
    IBettingPaymentResponse,
} from './Betting.dto';
import { bettingProviders } from '../../static/links/betting';
import { bettingPriceList } from './priceData';

@Injectable()
export class FundBettingWalletService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly transaction: TransactionsService,
    ) { }

    headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.EBILLS_ACCESS_TOKEN}`,
        },
    };

    public async getProviders(
        input: BettingProvidersInput & UserInput,
    ): Promise<BettingProvidersResponse[]> {
        this.logger.info('BETTING --> PROVIDER');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        return bettingProviders;
    }
    public async getPriceList(
        input: BettingProvidersInput & UserInput,
    ): Promise<BettingPricesResponse[]> {
        this.logger.info('BETTING --> PRICELIST');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        return bettingPriceList;
    }

    public async makePayment(
        input: BettingPaymentInput & UserInput,
    ): Promise<BettingPaymentResponse> {
         this.logger.info('BETTING --> MAKE_PAYMENT');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        // validate
        // Amount in NGN (min ₦100, max ₦100,000).
        const transaction_hash = "hash from transfer"

        const url = 'https://ebills.africa/wp-json/api/v2/betting';

        const response = (await axios.post(
            url,
            {
                // wallet id
                customer_id: input.customer_id,
                // wallet provider
                service_id: input.service_id,
                // unique identifier
                request_id: transaction_hash,
                // amount in naira
                amount: input.payment.amountFiat,
            },
            this.headers,
        )) as IBettingPaymentResponse;

        await this.transaction.create({
            amount: input.payment.amountFiat,
            category: 'BETTING_WALLET',
            mode: 'DEBIT',
            status: 'COMPLETED',
            userId: input.userId,
            fiat_currency: input.countryCode,
            transaction_hash: transaction_hash,
            note: JSON.stringify({
                customer_id: input.customer_id,
                service_id: input.service_id,
                request_id: transaction_hash,
                hash: transaction_hash,
            }),
        });

        return response.data;
    }
}

