import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import {
    Order_AppealInput,
    Order_CancelInput,
    Order_CreteSellInput,
    Order_CreteSellResponse,
    Order_GetAllInput,
    Order_GetAllResponse,
    Order_GetOneInput,
    Order_Response,
} from './orders.dto';
import { TransactionsService } from '../transactions/transact.service';
import { $Enums } from '@prisma/client';

@Injectable()
export class OrderService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
        private readonly transaction: TransactionsService,
    ) { }

    public async createSell(
        p: Order_CreteSellInput & { userId: number },
    ): Promise<Order_CreteSellResponse> {
        this.logger.info('Sell order - ');
        console.log(JSON.stringify(p))

        const res = await this.prisma.orders.create({
            data: {
                user_id: p.userId,
                amount_crypto: p.payment.amountCrypto,
                amount_fiat: p.payment.amountFiat,
                bank_id: p.bank_id,
                currency_crypto: p.payment.tokenAddress,
                currency_fiat: p.currency_fiat,
                estimated_duration: "10 minuets",
                trade_type: p.trade_type,
                status: p.status,
                mode: $Enums.OrderMode.MARKET,
                // wallet_customer: p.wallet_customer,
                // merchant_id: p.merchant_id,
                // wallet_merchant: p.wallet_merchant,
                // action_merchant: p.action_merchant,
                // txn_hash: p.txn_hash,
            },
        });



        const rate = `${p.payment.amountCrypto}/${p.payment.amountFiat}`;
        await this.transaction.create({
            amount: p.payment.amountCrypto,
            category:
                "OFF_RAMPING",
            mode: 'DEBIT',
            status: 'COMPLETED',
            userId: p.userId,
            crypto_currency: p.payment.tokenAddress,
            fiat_currency: p.currency_fiat,
            note: rate,
            transaction_hash: "txn_hash",
        });

        return {
            message: "Order created successfully"
        };
    }
    // public async createBuy(
    //     p: Order_CreteBuyInput & { userId: number },
    // ): Promise<Order_CreteSellResponse> {
    //     this.logger.info('Creating platform account ...');

    //     const res = await this.prisma.orders.create({
    //         data: {
    //             ...p,
    //             user_id: p.userId,
    //             // buy_time1_customer_request: new Date(),
    //             txn_hash: p.txn_hash,
    //         },
    //     });

    //     return {
    //         ...res,
    //         id: res.id,
    //         // action_merchant: res.action_merchant!,
    //         // action_user: res.action_user!,
    //         // txn_hash: res.txn_hash,
    //     };
    // }

    public async getAll(
        p: Order_GetAllInput & { userId: number },
    ): Promise<Order_GetAllResponse[]> {
        const res = await this.prisma.orders.findMany({
            where: {
                trade_type: p.trade_type,
                currency_crypto: p.currency_crypto,
                currency_fiat: p.currency_fiat,
                status: p.status,
                user_id: p.userId,
            },
        });

        return res.map((item) => {
            return {
                ...item,
                id: item.id,
                // action_merchant: item.action_merchant!,
                // action_user: item.action_user!,
                // txn_hash: item.txn_hash,
            };
        });
    }

    public async getAllForMerchant(
        p: Order_GetAllInput & { userId: number },
    ): Promise<Order_Response[]> {
        const res = await this.prisma.orders.findMany({
            where: {
                user_id: p.userId,
                trade_type: p.trade_type,
                currency_crypto: p.currency_crypto,
                currency_fiat: p.currency_fiat,
                status: p.status,
            },
        });
        return res.map((item) => {
            return {
                ...res,
                id: item.id,
                // action_merchant: item.action_merchant!,
                // action_user: item.action_user!,
                // txn_hash: item.txn_hash,
            };
        });
    }
    public async getAllForAdmin(
        p: Order_GetAllInput & { userId: number },
    ): Promise<Order_Response[]> {
        const res = await this.prisma.orders.findMany({
            where: {
                trade_type: p.trade_type,
                currency_crypto: p.currency_crypto,
                currency_fiat: p.currency_fiat,
                status: p.status,
            },
        });
        return res.map((item) => {
            return {
                ...res,
                id: item.id,
                // action_merchant: item.action_merchant!,
                // action_user: item.action_user!,
                // txn_hash: item.txn_hash,
            };
        });
    }

    public async getOne(
        p: Order_GetOneInput & { userId: number },
    ): Promise<Order_Response> {
        const res = await this.prisma.orders.findFirst({
            where: {
                id: p.id,
            },
        });
        return {
            ...res,
            id: res!.id,
            // action_merchant: res!.action_merchant!,
            // action_user: res!.action_user!,
            // txn_hash: res.txn_hash,
        };
    }

    public async appeal(
        params: Order_AppealInput & { userId: number },
    ): Promise<Order_Response> {
        throw new Error('Unimplemented');
    }

    public async cancel(
        params: Order_CancelInput & { userId: number },
    ): Promise<Order_Response> {
        throw new Error('Unimplemented');
    }
}
