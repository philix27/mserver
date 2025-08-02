import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { TxnManagerService } from "./services/txManager";
import { TxnManagerController } from "./utils/controller";
import { OnchainUtilsService } from "./services/onchainUtils";
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
                // return new OnchainUtilsService(PRIVATE_KEY);
                return new OnchainUtilsService("ec2eb3a4a7a2c8694c7566e1aeacfd9d6e6a2face0c8a3c99c6ec40be351f1f4");
            },
        },
    ],
    controllers: [TxnManagerController],
    exports: [],

})
export class OnchainTransactionsModule { }
