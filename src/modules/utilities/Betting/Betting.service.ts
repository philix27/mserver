import { Injectable } from '@nestjs/common';
import { UserInput } from 'src/lib';
import { GqlErr } from '../../common/errors/gqlErr';
import axios from 'axios';
import { TransactionsService } from '../../transactions/transact.service';
import { LoggerService } from '../../common';
import {
    BettingPaymentInput,
    BettingPaymentResponse,
    BettingProvidersInput,
    BettingProvidersResponse,
    IBettingPaymentResponse,
} from './Betting.dto';

@Injectable()
export class FundBettingWalletService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly transaction: TransactionsService,
    ) {}

    headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.EBILLS_ACCESS_TOKEN}`,
        },
    };

    public async getProviders(
        input: BettingProvidersInput & UserInput,
    ): Promise<BettingProvidersResponse[]> {
        this.logger.info('Get Electricity Billers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        return providers;
    }

    public async makePayment(
        input: BettingPaymentInput & UserInput,
    ): Promise<BettingPaymentResponse> {
        this.logger.info('Get Electricity Billers');

        if (input.countryCode !== 'NG') {
            throw GqlErr('No provider for this country');
        }

        // validate
        // Amount in NGN (min ₦100, max ₦100,000).

        const url = 'https://ebills.africa/wp-json/api/v2/betting';

        const response = (await axios.post(
            url,
            {
                // wallet id
                customer_id: input.customer_id,
                // wallet provider
                service_id: input.service_id,
                // unique identifier
                request_id: input.transaction_hash,
                // amount in naira
                amount: input.amount,
            },
            this.headers,
        )) as IBettingPaymentResponse;

        await this.transaction.create({
            amount: input.amount,
            category: 'BETTING_WALLET',
            mode: 'DEBIT',
            status: 'COMPLETED',
            userId: input.userId,
            fiat_currency: input.countryCode,
            note: JSON.stringify({
                customer_id: input.customer_id,
                service_id: input.service_id,
                request_id: input.transaction_hash,
                hash: input.transaction_hash,
            }),
            transaction_hash: input.transaction_hash,
        });

        return response.data;
    }
}

const providers: { name: string; logo: string }[] = [
    {
        name: '1xBet',
        logo: '',
    },
    { name: 'BangBet', logo: '' },
    { name: 'Bet9ja', logo: '' },
    { name: 'BetKing', logo: '' },
    { name: 'BetLand', logo: '' },
    { name: 'BetLion', logo: '' },
    { name: 'BetWay', logo: '' },
    { name: 'CloudBet', logo: '' },
    { name: 'LiveScoreBet', logo: '' },
    { name: 'MerryBet', logo: '' },
    { name: 'NaijaBet', logo: '' },
    { name: 'NairaBet', logo: '' },
    { name: 'SupaBet', logo: '' },
];
