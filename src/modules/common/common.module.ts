import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { HealthController } from "./controller";
import { configProvider, LoggerService } from "./provider";
import { PrismaService } from "./provider";
import { LogInterceptor } from "./flow";
import { GqlAuthGuard, VendorGuard } from "./guards";
import { CryptoService } from "../helper/crypto.service";

@Module({
    imports: [TerminusModule],
    providers: [
        configProvider,
        LoggerService,
        LogInterceptor,
        PrismaService,
        GqlAuthGuard,
        VendorGuard,
        CryptoService,
        CryptoService,
    ],
    exports: [
        configProvider,
        LoggerService,
        LogInterceptor,
        PrismaService,
        GqlAuthGuard,
        VendorGuard,
        CryptoService,
    ],
    controllers: [HealthController],
})
export class CommonModule { }
