import { Field, ObjectType } from "@nestjs/graphql";
import { secrets } from "../common";

const isDev = secrets.NODE_ENV === "development"

@ObjectType()
export class Static_AppInfoResponse {
    @Field()
    minBuild: number;

    @Field()
    deployedBuild: number;

    @Field()
    androidAppUrl: string;

    @Field()
    iosAppUrl: string;

    @Field()
    enableAirtime: boolean;

    @Field()
    enableDataPlan: boolean;

    @Field()
    enableTVBillPayment: boolean;

    @Field()
    enableBetting: boolean;

    @Field()
    enableElectricityBillPayment: boolean;

    @Field()
    transactionsPageUrl: string;

    @Field()
    notificationsPageUrl: string;

    @Field()
    selfKycUrl: string;
}

export const mobileAppInfo: Static_AppInfoResponse = {
    minBuild: 1,
    deployedBuild: 9,
    androidAppUrl: 'https://play.google.com/store/apps/details?id=com.onemanstartup.roads',
    iosAppUrl: 'https://apps.apple.com/app/id6443961864',
    enableAirtime: true,
    enableDataPlan: true,
    enableTVBillPayment: true,
    enableBetting: true,
    enableElectricityBillPayment: true,
    selfKycUrl: isDev ? "https://192.168.0.123:3000/self" : "https://mini.mobarter.com/self",
    notificationsPageUrl: isDev ? "https://192.168.0.123:3000/notifications" : "https://mini.mobarter.com/notifications",
    transactionsPageUrl: isDev ? "https://192.168.0.123:3000/transactions" : "https://mini.mobarter.com/transactions",
}
// http://192.168.0.123:3233/self-kyc