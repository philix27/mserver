import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { UtilitiesService } from './utilities.service';
import { NotificationModule } from '../notification/notification.module';
import { UtilitiesResolver } from './utilies.resolver';
import { TransactionsService } from '../transactions/transact.service';
import { FundBettingWalletResolver } from './betting/Betting.resolvers';
import { FundBettingWalletService } from './betting/Betting.service';

@Module({
    imports: [CommonModule, NotificationModule],
    providers: [
        UtilitiesService,
        UtilitiesResolver,
        TransactionsService,
        FundBettingWalletResolver,
        FundBettingWalletService,
    ],
})
export class UtilitiesModule {}
