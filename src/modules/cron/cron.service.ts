import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { LoggerService } from '../common';
import { ExchangeRateService } from '../rates/rates.service';
import { RewardsService } from '../onchain/services/rewards';
import { OnchainUtilsService, SupportedChains } from '../onchain/services/onchainUtils';
import { TxnManagerService } from '../onchain/services/txManager';

const baseUSDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

const ngnContractAddress = "0xE2702Bd97ee33c88c8f6f92DA3B733608aa76F71"

@Injectable()
export class CronService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly fx: ExchangeRateService,
    ) { }

    @Cron(CronExpression.EVERY_HOUR)
    async getLatestRate() {
        this.logger.info('Running a daily task at midnight');
        await this.fx.updateRates();
    }

    @Cron(CronExpression.EVERY_WEEK)
    async validateReloadlyAccessToken() {
        this.logger.info('Running a daily task at midnight');
        // await this.fx.updateRates()
    }

    @Cron(CronExpression.EVERY_WEEK)
    async getElectricityProviders() {
        this.logger.info('Running a daily task at midnight');
    }

    // @Cron(CronExpression.EVERY_MINUTE)
    // async claim() {
    //     this.logger.info('Claim Main Rewards');
    //     const txn = new TxnManagerService(new OnchainUtilsService(process.env.PRIVATE_KEY, SupportedChains.base));
    //     const rewards = new RewardsService(new OnchainUtilsService(process.env.PRIVATE_KEY, SupportedChains.base));

    //     await txn.pay({
    //         tokenAddress: baseUSDC,
    //         amount: 0.02,
    //         txName: 'Airtime',
    //         info: 'Airtime'
    //     }).then((v) => {
    //         console.log("txnManager")
    //     })
    //     await rewards.claim({
    //         tokenAddress: baseUSDC,
    //     });



    // }


    // @Cron(CronExpression.EVERY_MINUTE)
    // async claim2() {
    //     this.logger.info('Claim Main Rewards');
    //     const txn = new TxnManagerService(new OnchainUtilsService(process.env.PRIVATE_KEY2, SupportedChains.base));
    //     const rewards = new RewardsService(new OnchainUtilsService(process.env.PRIVATE_KEY2, SupportedChains.base));

    //     await txn.pay({
    //         tokenAddress: baseUSDC,
    //         amount: 0.34,
    //         txName: 'bot',
    //         info: 'bot'
    //     }).then((v) => {
    //         console.log("txnManager")
    //     })
    //     await rewards.claim({
    //         tokenAddress: baseUSDC,
    //     });


    // }
    // @Cron(CronExpression.EVERY_MINUTE)
    // async claimXE() {
    //     this.logger.info('Claim Main Rewards');
    //     const txn = new TxnManagerService(new OnchainUtilsService(process.env.PRIVATE_KEY_OXE, SupportedChains.base));
    //     const rewards = new RewardsService(new OnchainUtilsService(process.env.PRIVATE_KEY_OXE, SupportedChains.base));

    //     await txn.pay({
    //         tokenAddress: baseUSDC,
    //         amount: 0.01,
    //         txName: 'bot',
    //         info: 'bot'
    //     }).then((v) => {
    //         console.log("txnManager")
    //     })
    //     await rewards.claim({
    //         tokenAddress: baseUSDC,
    //     });


    // }
    // @Cron(CronExpression.EVERY_MINUTE)
    // async claimZ() {
    //     this.logger.info('Claim Main Rewards - GenZ');
    //     const txn = new TxnManagerService(new OnchainUtilsService(process.env.PRIVATE_KEY_Genz, SupportedChains.base));
    //     const rewards = new RewardsService(new OnchainUtilsService(process.env.PRIVATE_KEY_Genz, SupportedChains.base));

    //     await txn.pay({
    //         tokenAddress: baseUSDC,
    //         amount: 0.01,
    //         txName: 'bot',
    //         info: 'bot'
    //     }).then((v) => {
    //         console.log("txnManager")
    //     })

    //     await rewards.claim({
    //         tokenAddress: baseUSDC,
    //     });

    // }



    // @Cron(CronExpression.EVERY_MINUTE)
    // async claimGen2() {
    //     this.logger.info('Claim Main Rewards - Gen 2');
    //     const rewards = new RewardsService(new OnchainUtilsService(process.env.PRIVATE_KEY_Gen2, SupportedChains.base));
    //     await rewards.claim({
    //         tokenAddress: baseUSDC,
    //     });

    // }

    //  // Runs at every 10 seconds
    // @Cron("*/10 * * * * *")
    // handleCron() {
    //     this.logger.info("Cron job executed every 10 seconds");
    // }
    // // Runs at midnight every day
    // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    // handleMidnightTask() {

    //     this.logger.info("Running a daily task at midnight");
    // }

    // // Runs at a fixed interval of 30 seconds
    // @Interval(30000)
    // handleInterval() {
    //     this.logger.info("Interval task executed every 30 seconds");
    // }

    // // Executes only once after 60 seconds on app startup
    // @Timeout(60000)
    // handleTimeout() {
    //     this.logger.info("Timeout task executed after 60 seconds");
    // }
}
