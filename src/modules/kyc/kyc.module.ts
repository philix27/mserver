import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { KycService } from './kyc.service';
import { NotificationModule } from '../notification/notification.module';
import { NotificationService } from '../notification/notification.service';
import { KycResolver } from './kyc.resolver';
import { GqlAuthGuard } from '../common/guards';
import { HelperService } from '../helper/helper.service';
// import { SelfService } from './self.service';

@Module({
    imports: [CommonModule, NotificationModule],
    providers: [
        KycService,
        KycResolver,
        NotificationService,
        GqlAuthGuard,
        HelperService,
        // SelfService,
    ],
    exports: [],
})
export class KycModule {}
