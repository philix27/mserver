import { Injectable } from '@nestjs/common';
import { LoggerService, secrets } from '../common';
import {
    Utilities_PurchaseAirtimeInput,
    Utilities_PurchaseTopUpResponse,
    Utilities_PurchaseDataBundleInput,
    Utilities_GetOperatorsInput,
    Utilities_GetOperatorResponse,
} from './utilities.dto';
import { UserInput } from '../../lib';
import { ReloadlyTopUpService } from '../../lib/integrations/reloadly';
import { TransactionsService } from '../transactions/transact.service';
import { operatorsData } from './operatorData';
import { GqlErr } from '../common/errors/gqlErr';

@Injectable()
export class UtilitiesService {
    private reloadly: ReloadlyTopUpService;
    public constructor(
        private readonly logger: LoggerService,
        private readonly transaction: TransactionsService,
    ) {
        this.initializeReloadly();
    }

    private async initializeReloadly() {
        // todo: Generate reloadly access token every 30 days
        // const res = await this.prisma.accessTokens.findFirst({
        //     where: {
        //         platform: 'RELOADLY',
        //         purpose: 'AIRTIME',
        //     },
        // });

        // if (!res) {
        //     throw GqlErr('No access token found');
        // }
        this.reloadly = new ReloadlyTopUpService(
            secrets.RELOADLY_TOP_UP_ACCESS_TOKEN,
            this.logger,
        );
        // this.reloadly = new ReloadlyTopUpService(res!.token)
    }

    public async purchaseAirtime(
        input: Utilities_PurchaseAirtimeInput & UserInput,
    ): Promise<Utilities_PurchaseTopUpResponse> {
        this.logger.info('Purchase Airtime');

        try {
            const res = await this.reloadly.topUpAirtime({
                amount: `${input.amount}.00`,
                operatorId: input.operatorId,
                recipientPhone: {
                    countryCode: input.countryCode,
                    number: input.phoneNo,
                },
                useLocalAmount: true,
                customIdentifier: `userId:${input.userId}&txnHash:${input.transaction_hash}`,
            });

            await this.transaction.create({
                amount: input.amount,
                category: 'AIRTIME',
                mode: 'DEBIT',
                status: 'COMPLETED',
                userId: input.userId,
                fiat_currency: input.countryCode,
                note: '',
                transaction_hash: input.transaction_hash,
            });

            // this.logger.info('Custom Identifier ' + res.customIdentifier);
            return { message: 'Successful' };
        } catch (error) {
            throw GqlErr("Could not send airtime")
        }
    }
    public async purchaseDataBundle(
        input: Utilities_PurchaseDataBundleInput & UserInput,
    ): Promise<Utilities_PurchaseTopUpResponse> {
        this.logger.info('Purchase Data bundle');

        const res = await this.reloadly.topUpAirtime({
            amount: `${input.amount}.00`,
            operatorId: input.operatorId,
            recipientPhone: {
                countryCode: input.countryCode,
                number: input.phoneNo,
            },
            useLocalAmount: true,
            customIdentifier: `userId:${input.userId}&txnHash:${input.transaction_hash}`,
        });

        await this.transaction.create({
            amount: input.amount,
            category: 'DATA_BUNDLE',
            mode: 'DEBIT',
            status: 'COMPLETED',
            userId: input.userId,
            fiat_currency: input.countryCode,
            note: '',
            transaction_hash: input.transaction_hash,
        });

        // this.logger.info(res.customIdentifier);
        return { message: 'Successful' };
    }

    public async getOperators(
        input: Utilities_GetOperatorsInput & UserInput,
    ): Promise<Utilities_GetOperatorResponse> {
        this.logger.info('Fetching operators');

        const list = operatorsData[input.countryCode];

        return list;
    }

    public async validateToken() {
        this.logger.info('Validate token');
    }
}
