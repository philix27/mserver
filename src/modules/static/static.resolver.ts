import { Context, Query, Resolver } from '@nestjs/graphql';
import { Static_GetTokenResponse, Static_GetLinkResponse } from './static.dto';
import { GqlAuthGuard } from '../common/guards';
import { UseGuards } from '@nestjs/common';
import { StaticService } from './static.service';

@Resolver()
export class StaticResolver {
    constructor(private readonly service: StaticService) {}

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
}
