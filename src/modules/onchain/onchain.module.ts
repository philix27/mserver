import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { TxnManagerService } from "./services/txManager";
import { TxnManagerController } from "./utils/controller";
import { OnchainUtilsService } from "./services/onchainUtils";

@Module({
    imports: [CommonModule,],
    providers: [
        TxnManagerService,
        OnchainUtilsService
    ],
    controllers: [TxnManagerController],
    exports: [],
})
export class OnchainTransactionsModule { }
