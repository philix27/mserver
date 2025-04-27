import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { OrderService } from "./orders.service";
import { NotificationModule } from "../notification/notification.module";
import { NotificationService } from "../notification/notification.service";
import { OrdersResolver } from "./orders.resolver";
import { TransactionsService } from "../transactions/transact.service";

@Module({
    imports: [CommonModule, NotificationModule],
    providers: [
        OrderService,
        OrdersResolver,
        NotificationService,
        TransactionsService,
    ],
    exports: [],
})
export class OrdersModule {}
