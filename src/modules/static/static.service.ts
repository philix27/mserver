import { Injectable } from '@nestjs/common';
import { UserInput } from 'src/lib';
import {
    LinkGroup,
    Static_FundCollectorsResponse,
    Static_GetChainsResponse,
    Static_GetCountries,
    Static_GetLinkResponse,
    Static_GetTokenResponse,
    Static_SecretQuestionsResponse,
} from './static.dto';
import { LoggerService } from '../common/provider/logger.service';
import { CeloTokens, TokenId } from './tokens/Tokens';
import { docsLinks } from './links/docs';
import { learnLinks } from './links/learn';
import { socialLinks } from './links/social';
import { countriesDataList } from './links/country';
import { allChains } from './links/chains';
import { collectors } from './collectors';
import { mobileAppInfo, Static_AppInfoResponse } from './mobileAppInfo';
import { secretQuestionsList } from './secreteQuestions';
import { miniAppsList, Static_MiniAppsResponse } from './miniApps';

@Injectable()
export class StaticService {
    public constructor(private readonly logger: LoggerService) { }

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
                return {
                    ...V,
                    chainId: 42220,
                    priceUSD: getPriceUSD(V.id),
                    priceNGN: getPriceNGN(V.id),
                };
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

    public async getFundCollectors(
        input: UserInput,
    ): Promise<Static_FundCollectorsResponse> {
        this.logger.info('get fund collectors');

        return collectors;
    }

    public async appInfo(
        input: UserInput,
    ): Promise<Static_AppInfoResponse> {
        this.logger.info('getAppInfo');

        return mobileAppInfo
    }
    public async walletSecretQuestions(
        input: UserInput,
    ): Promise<Static_SecretQuestionsResponse[]> {
        this.logger.info('get secret questions');

        return secretQuestionsList.map((val) => { return { text: val } })
    }

    public async miniApps(
        input: UserInput,
    ): Promise<Static_MiniAppsResponse[]> {
        this.logger.info('fetch mini apps');

        return miniAppsList
    }
}

function getPriceUSD(tokenId: TokenId): number {
    if (tokenId === TokenId.CELO) return 0.327;
    if (tokenId === TokenId.USDC) return 1;
    if (tokenId === TokenId.cUSD) return 1;
    if (tokenId === TokenId.USDT) return 1;
    if (tokenId === TokenId.cEUR) return 0.8;
    if (tokenId === TokenId.cNGN) return 1600;

    return 0
}
function getPriceNGN(tokenId: TokenId): number {
    if (tokenId === TokenId.CELO) return 500;
    if (tokenId === TokenId.USDC) return 1540;
    if (tokenId === TokenId.cUSD) return 1540;
    if (tokenId === TokenId.USDT) return 1540;
    if (tokenId === TokenId.cEUR) return 1700;
    if (tokenId === TokenId.cNGN) return 1;

    return 0
}