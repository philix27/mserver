import { Module } from "@nestjs/common";
import { CronService } from "./cron.service";
import { CommonModule, LoggerService, } from "../common";
import { ExchangeRateService } from "../rates/rates.service";
import { RewardsService } from "../onchain/services/rewards";

@Module({
    imports:[CommonModule],
    providers: [LoggerService, CronService, ExchangeRateService],
})
export class CronModule {}
