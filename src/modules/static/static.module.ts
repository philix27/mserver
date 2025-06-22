import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { NotificationModule } from '../notification/notification.module';
import { StaticService } from './static.service';
import { StaticResolver } from './static.resolver';

@Module({
    imports: [CommonModule, NotificationModule],
    providers: [StaticService, StaticResolver],
})
export class StaticModule {}
