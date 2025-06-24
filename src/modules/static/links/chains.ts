import { publicPath } from '../publicPath';

export enum ChainId {
    Celo = 42220,
    Base = 8453,
}

export interface ChainMetadata {
    chainId: number;
    name: string;
    rpcUrl: string;
    explorerUrl: string;
    explorerApiUrl: string;
    logoUrl: string;
}

export const Celo: ChainMetadata = {
    chainId: ChainId.Celo,
    name: 'CELO',
    rpcUrl: 'https://forno.celo.org',
    explorerUrl: 'https://celoscan.io',
    explorerApiUrl: 'https://api.celoscan.io/api',
    logoUrl: publicPath('chain/celo.png'),
};
export const Base: ChainMetadata = {
    chainId: ChainId.Base,
    name: 'BASE',
    rpcUrl: 'https://forno.celo.org',
    explorerUrl: 'https://celoscan.io',
    explorerApiUrl: 'https://api.celoscan.io/api',
    logoUrl: publicPath('chain/base.png'),
};

export const allChains = [Celo, Base];
