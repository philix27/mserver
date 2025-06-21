import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { NotificationModule } from '../notification/notification.module';
import { StaticService } from './static.service';

@Module({
    imports: [CommonModule, NotificationModule],
    providers: [StaticService],
})
export class StaticModule {}
