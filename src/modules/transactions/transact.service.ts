import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import {
    Transaction_GetResponse,
    Transaction_GetAllInput,
    Transaction_GetOneInput,
} from './transact.dto';
import { GqlErr } from '../common/errors/gqlErr';
import { UserInput } from '../../lib';
import { $Enums } from '@prisma/client';

@Injectable()
export class TransactionsService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
    ) {}

    public async getAll(
        params: Transaction_GetAllInput & UserInput,
    ): Promise<Transaction_GetResponse[]> {
        this.logger.info(this.getAll.name);

        const list = await this.prisma.transactions.findMany({
            where: {
                user_id: params.userId,
            },
        });
        return list;
    }

    public async create(
        input: {
            amount: number;
            crypto_currency?: string;
            fiat_currency?: $Enums.CountryCode;
            category: $Enums.TransactionCategory;
            mode: $Enums.TransactionsMode;
            status: $Enums.TransactionStatus;
            note?: string;
            transaction_hash?: string;
        } & UserInput,
    ): Promise<Transaction_GetResponse> {
        this.logger.info(this.create.name);

        const transact = await this.prisma.transactions.create({
            data: {
                crypto_currency: input.crypto_currency,
                fiat_currency: input.fiat_currency,
                amount: input.amount,
                category: input.category,
                mode: input.mode,
                status: input.status,
                user_id: input.userId,
                note: input.note || input.category,
                transaction_hash: input.transaction_hash,
            },
        });

        return transact;
    }

    public async getOne(
        params: Transaction_GetOneInput & UserInput,
    ): Promise<Transaction_GetResponse> {
        this.logger.info(this.getOne.name);
        const ad = await this.prisma.transactions.findFirst({
            where: {
                id: params.id,
                user_id: params.userId,
            },
        });

        if (!ad) throw GqlErr('No advert found!');
        return ad;
    }
}
