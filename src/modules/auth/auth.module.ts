import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { AuthService } from "./auth.service";
import { NotificationModule } from "../notification/notification.module";
import { NotificationService } from "../notification/notification.service";
import { AuthResolver } from "./auth.resolver";
import { WalletFiatService } from "../wallet-fiat/fiat.service";
import { UserService } from "../user/user.service";
import { WalletCryptoModule } from "../wallet-crypto/wallet.module";
import { PrivyWalletService } from "../wallet-crypto/privy.service";
import { JwtStrategy } from "./jwt.strategy";
import jwtConfig from "./jwt.config";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { HelpersModule } from "../helper/helper.module";
import { AuthController } from "./auth.controller";
import { ThirdwebService } from "./thirdweb.service";
import { FirebaseAuthService } from "../firebase/firebase.service";
import { WalletCryptoService } from "../wallet-crypto/wallet.service";
import { CryptoService } from "../helper/crypto.service";
import { WalletGeneratorService } from "../wallet-crypto/walletGenerator.service";
import { FirestoreService } from "../firebase/FbService";

@Module({
    imports: [
        CommonModule,
        NotificationModule,
        WalletCryptoModule,
        HelpersModule,
        JwtModule.registerAsync(jwtConfig.asProvider()),
        ConfigModule.forFeature(jwtConfig),
    ],
    providers: [
        AuthService,
        AuthResolver,
        NotificationService,
        WalletCryptoService,
        WalletFiatService,
        CryptoService,
        UserService,
        PrivyWalletService,
        JwtStrategy,
        ThirdwebService,
        FirebaseAuthService,
        WalletGeneratorService, FirestoreService
    ],
    controllers: [AuthController],
    // exports: [JwtStrategy, GqlAuthGuard],
})
export class AuthModule { }
