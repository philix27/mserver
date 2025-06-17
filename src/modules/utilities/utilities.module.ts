import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { UtilitiesService } from './utilities.service';
import { NotificationModule } from '../notification/notification.module';
import { UtilitiesResolver } from './utilies.resolver';
import { TransactionsService } from '../transactions/transact.service';
import { FundBettingWalletResolver } from './Betting/Betting.resolvers';
import { FundBettingWalletService } from './Betting/Betting.service';
import { ElectricityBillResolver } from './Electricity/ElectricityBill.resolvers';
import { ElectricityBillService } from './Electricity/ElectricityBill.service';
import { TvBillService } from './TV/tv.service';
import { TvBillResolver } from './TV/tv.resolvers';

@Module({
    imports: [CommonModule, NotificationModule],
    providers: [
        UtilitiesService,
        UtilitiesResolver,
        TransactionsService,
        FundBettingWalletResolver,
        FundBettingWalletService,
        ElectricityBillResolver,
        ElectricityBillService,
        TvBillResolver,
        TvBillService,
    ],
})
export class UtilitiesModule {}
