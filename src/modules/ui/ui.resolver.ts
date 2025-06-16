import { Context, Query, Resolver } from '@nestjs/graphql';
import { ExchangeRate_Response } from './ui.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards';
import { UiService } from './ui.service';

@Resolver((of: any) => ExchangeRate_Response)
export class UiResolver {
    constructor(private readonly service: UiService) {}

    @Query((returns) => ExchangeRate_Response)
    // @UseGuards(GqlAuthGuard)
    async getUi(
        @Context() context: { req: { userId: number } },
    ): Promise<ExchangeRate_Response> {
        const res = await this.service.getRates();
        return res!;
    }
}
