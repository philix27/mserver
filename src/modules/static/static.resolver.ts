import { Context, Query, Resolver } from '@nestjs/graphql';
import {
    Static_GetTokenResponse,
    Static_GetLinkResponse,
    Static_GetCountries,
    Static_GetChainsResponse,
    Static_FundCollectorsResponse,
    Static_AppInfoResponse,
    Static_SecretQuestionsResponse,
} from './static.dto';
import { GqlAuthGuard } from '../common/guards';
import { UseGuards } from '@nestjs/common';
import { StaticService } from './static.service';
import { Static_MiniAppsResponse } from './miniApps';

@Resolver()
export class StaticResolver {
    constructor(private readonly service: StaticService) { }

    // @Query((returns) => [Static_GetLinkResponse])
    // @UseGuards(GqlAuthGuard)
    // async static_getTxnHistory(
    //     @Context() context: { req: { userId: number } },
    // ): Promise<Static_GetLinkResponse[]> {
    //     const res = await this.service.getTxnHistory({
    //         userId: context.req.userId,
    //     });

    //     return res!;
    // }

    @Query((returns) => [Static_GetChainsResponse])
    @UseGuards(GqlAuthGuard)
    async static_getChains(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_GetChainsResponse[]> {
        const res = await this.service.getChains({
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [Static_GetCountries])
    @UseGuards(GqlAuthGuard)
    async static_getCountries(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_GetCountries[]> {
        const res = await this.service.getCountries({
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [Static_GetLinkResponse])
    @UseGuards(GqlAuthGuard)
    async static_getLinks(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_GetLinkResponse[]> {
        const res = await this.service.getLinks({
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [Static_GetTokenResponse])
    @UseGuards(GqlAuthGuard)
    async static_getTokens(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_GetTokenResponse[]> {
        const res = await this.service.getTokens({
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => Static_AppInfoResponse)
    async static_appInfo(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_AppInfoResponse> {
        const res = await this.service.appInfo({
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => Static_FundCollectorsResponse)
    @UseGuards(GqlAuthGuard)
    async static_getFundCollectors(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_FundCollectorsResponse> {
        const res = await this.service.getFundCollectors({
            userId: context.req.userId,
        });

        return res!;
    }
    @Query((returns) => [Static_SecretQuestionsResponse])
    // @UseGuards(GqlAuthGuard)
    async static_secretQuestions(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_SecretQuestionsResponse[]> {
        const res = await this.service.walletSecretQuestions({
            userId: context.req.userId,
        });

        return res!;
    }

    @Query((returns) => [Static_MiniAppsResponse])
    // @UseGuards(GqlAuthGuard)
    async static_miniApps(
        @Context() context: { req: { userId: number } },
    ): Promise<Static_MiniAppsResponse[]> {
        const res = await this.service.miniApps({
            userId: context.req.userId,
        });

        return res!;
    }
}
