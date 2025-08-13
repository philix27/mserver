import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
// import { TxnManagerService } from "./services/txManager";
// import { TxnManagerController } from "./utils/controller";
// import { OnchainUtilsService, SupportedChains } from "./services/onchainUtils";
// import { RewardsService } from "./services/rewards";
import { OnchainTransactionsResolver } from "./onchain.resolver";
import { FirebaseModule } from "../firebase/firebase.module";
import { OnchainTransactionsService } from "./onchain.service";
import { WalletCryptoService } from "../wallet-crypto/wallet.service";
import { WalletCryptoModule } from "../wallet-crypto/wallet.module";
import { WalletGeneratorService } from "../wallet-crypto/walletGenerator.service";

// const PRIVATE_KEY = process.env.PRIVATE_KEY


@Module({
    imports: [CommonModule, WalletCryptoModule, FirebaseModule],
    providers: [
        OnchainTransactionsResolver,
        OnchainTransactionsService,
        WalletCryptoService,
        WalletGeneratorService
        // TxnManagerService,
        // RewardsService,
        // OnchainUtilsService,
        // {
        //     provide: OnchainUtilsService,
        //     useFactory: () => {
        //         return new OnchainUtilsService(PRIVATE_KEY, SupportedChains.base);

        //     },
        // },
    ],
    // controllers: [TxnManagerController],

    exports: [],

})
export class OnchainTransactionsModule { }
