import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService, secrets } from '../common';
import axios from 'axios';
import { IRates } from './types';
import { ExchangeRate_Response } from './ui.dto';

const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

@Injectable()
export class UiService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
    ) {}

    async getRates(): Promise<ExchangeRate_Response> {
        this.logger.info('GetRates: Using fx cache');

        const last_rate = await this.prisma.exchangeRates.findFirst({
            orderBy: { created_at: 'desc' },
        });

        const cacheResult = JSON.parse(last_rate!.exchangeratesapi!) as IRates;
        const curr = cacheResult.conversion_rates;

        return {
            EUR: curr.EUR,
            USD: curr.USD,
            NG: curr.NGN,
            KE: curr.KES,
            GH: curr.GHS,
            UG: curr.UGX,
            MW: curr.MWK,
            TZ: curr.TZS,
            RW: curr.RWF,
            ZA: curr.ZAR,
        };
    }
}
