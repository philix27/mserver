import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ScheduleModule } from '@nestjs/schedule';
import { JwtModule } from '@nestjs/jwt';
import { CommonModule } from './common';
// import { PubSubModule } from "./pubsub/pubsub.module";
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BankAccountModule } from './bankAccount/bankAccount.module';
import { PassportModule } from '@nestjs/passport';
import jwtConfig from './auth/jwt.config';
import { AdvertsModule } from './adverts/adverts.module';
import { CronModule } from './cron/cron.module';
import { WalletCryptoModule } from './wallet-crypto/crypto.module';
import { WalletFiatModule } from './wallet-fiat/fiat.module';
import { KycModule } from "./kyc/kyc.module";
import { ExchangeRateModule } from './rates/rates.module';
import { OrdersModule } from './orders/orders.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { TransactionsModule } from './transactions/transact.module';
import { HelpersModule } from './helper/helper.module';
import { StaticModule } from './static/static.module';
// import { CryptoModule } from "./crypto/crypto.module";
// import { TelegramModule } from "./telegram/telegram.module";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: true,
            sortSchema: true,
            introspection: true,
            subscriptions: {
                'graphql-ws': true,
            },
        }),
        PassportModule,
        JwtModule.registerAsync(jwtConfig.asProvider()),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '12h', algorithm: 'RS256', keyid: '' },
            privateKey: '',
        }),
        CommonModule,
        HelpersModule,
        NotificationModule,
        AuthModule,
        UserModule,
        BankAccountModule,
        AdvertsModule,
        CronModule,
        OrdersModule,
        KycModule,
        WalletFiatModule,
        WalletCryptoModule,
        ExchangeRateModule,
        UtilitiesModule,
        TransactionsModule,
        StaticModule,
        // PubSubModule,
        // CryptoModule,
    ],
})
export class ApplicationModule {}
