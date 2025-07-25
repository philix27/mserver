import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { KycService } from './kyc.service';
import { NotificationModule } from '../notification/notification.module';
import { NotificationService } from '../notification/notification.service';
import { KycResolver } from './kyc.resolver';
import { GqlAuthGuard } from '../common/guards';
import { CryptoService } from '../helper/crypto.service';
import { KycController } from './kyc.controller';
import { SelfService } from './self.service';

@Module({
    imports: [CommonModule, NotificationModule],
    controllers: [KycController],
    providers: [
        KycService,
        KycResolver,
        NotificationService,
        GqlAuthGuard,
        CryptoService,
        SelfService,
    ],
    exports: [],
})
export class KycModule {}
