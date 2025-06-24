import { Injectable } from '@nestjs/common';
import { UserInput } from 'src/lib';
import {
    LinkGroup,
    Static_GetChainsResponse,
    Static_GetCountries,
    Static_GetLinkResponse,
    Static_GetTokenResponse,
} from './static.dto';
import { LoggerService } from '../common/provider/logger.service';
import { CeloTokens } from './tokens/Tokens';
import { docsLinks } from './links/docs';
import { learnLinks } from './links/learn';
import { socialLinks } from './links/social';
import { countriesDataList } from './links/country';
import { allChains } from './links/chains';

@Injectable()
export class StaticService {
    public constructor(private readonly logger: LoggerService) {}

    public async getCountries(
        input: UserInput,
    ): Promise<Static_GetCountries[]> {
        this.logger.info('GetCountries');

        return countriesDataList;
    }

    public async getChains(
        input: UserInput,
    ): Promise<Static_GetChainsResponse[]> {
        this.logger.info('getChains');

        return allChains;
    }

    public async getTokens(
        input: UserInput,
    ): Promise<Static_GetTokenResponse[]> {
        this.logger.info('getTokens');

        return [
            ...CeloTokens.map((V) => {
                return { ...V, chainId: 42220 };
            }),
        ];
    }

    public async getLinks(input: UserInput): Promise<Static_GetLinkResponse[]> {
        this.logger.info('getLinks');

        return [
            ...docsLinks.map((v) => {
                return { ...v, group: LinkGroup.Docs };
            }),
            ...learnLinks.map((v) => {
                return { ...v, group: LinkGroup.Learn };
            }),
            ...socialLinks.map((v) => {
                return { ...v, group: LinkGroup.Social };
            }),
        ];
    }

    // public async getTxnHistory(
    //     input: UserInput,
    // ): Promise<Static_GetTxnHistoryResponse[]> {
    //     this.logger.info('getTxnHistory');

    //     return [];
    // }
}
