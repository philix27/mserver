import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { WalletCryptoResolver } from "./wallet.resolver";
import { WalletCryptoService } from "./wallet.service";
import { PrivyWalletService } from "./privy.service";
import { WalletGeneratorService } from "./walletGenerator.service";
import { CryptoService } from "../helper/crypto.service";
import { FirestoreWalletService } from "../firebase/fbWallet.service";
import { FirebaseModule } from "../firebase/firebase.module";
import { FirebaseAdminService } from "../firebase/fbAdmin.service";


@Module({
    imports: [CommonModule, FirebaseModule],
    providers: [
        WalletCryptoService,
        WalletCryptoResolver,
        PrivyWalletService,
        WalletGeneratorService,
        CryptoService,
        FirestoreWalletService
    ],
    exports: [WalletCryptoService, PrivyWalletService],
})
export class WalletCryptoModule { }
