import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { TxnManagerService } from "./services/txManager";
import { TxnManagerController } from "./utils/controller";
import { OnchainUtilsService, SupportedChains } from "./services/onchainUtils";
import { RewardsService } from "./services/rewards";

const PRIVATE_KEY = process.env.PRIVATE_KEY


@Module({
    imports: [CommonModule,],
    providers: [
        TxnManagerService,
        OnchainUtilsService,
        RewardsService,
        {
            provide: OnchainUtilsService,
            useFactory: () => {
                return new OnchainUtilsService(PRIVATE_KEY, SupportedChains.base);

            },
        },
    ],
    controllers: [TxnManagerController],
    exports: [],

})
export class OnchainTransactionsModule { }
