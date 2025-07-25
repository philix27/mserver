import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { WalletCryptoResolver } from "./wallet.resolver";
import { WalletCryptoService } from "./wallet.service";
import { PrivyWalletService } from "./privy.service";
import { WalletGeneratorService } from "./walletGenerator.service";
import { CryptoService } from "../helper/crypto.service";
import { FirestoreService } from "../firebase/FbService";


@Module({
    imports: [CommonModule],
    providers: [
        WalletCryptoService,
        WalletCryptoResolver,
        PrivyWalletService,
        WalletGeneratorService,
        CryptoService,FirestoreService
    ],
    exports: [],
})
export class WalletCryptoModule { }
