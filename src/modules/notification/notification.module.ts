import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { NotificationService } from "./notification.service";
import { EmailService } from "./email.service";

@Module({
    imports: [CommonModule],
    providers: [NotificationService, EmailService],
    exports: [],
})
export class NotificationModule {}
