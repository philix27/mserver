import { Module } from '@nestjs/common';
import { UiService } from './ui.service';
import { CommonModule } from '../common';
import { UiResolver } from './ui.resolver';

@Module({
    imports: [CommonModule],
    providers: [UiResolver, UiService],
})
export class UiModule {}
