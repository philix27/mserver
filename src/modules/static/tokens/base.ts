import { Assets } from "../Assets";
import { publicPath } from "../publicPath";
import { Static_GetTokenResponse } from "../static.dto";
import { Color } from "./Color";
import { Token, TokenId } from "./types";

const rpcUrl = 'https://mainnet.base.org'
const chainName = 'BASE'
export const baseTokens: Static_GetTokenResponse[] = [
    {
        id: TokenId.USDC,
        symbol: TokenId.USDC,
        name: "USDC",
        color: Color.usdcBlue,
        decimals: 6,
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        logoUrl: publicPath(Assets.tokens.USDC),
        isPayable: true,
        rpcUrl,
        chainName,
        priceUSD: 1,
        priceNGN: 1530,
        chainId: 0
    },
    {
        id: TokenId.USDT,
        symbol: TokenId.USDC,
        name: "USDC",
        color: Color.usdcBlue,
        decimals: 6,
        address: "0x2d1aDB45Bb1d7D2556c6558aDb76CFD4F9F4ed16",
        logoUrl: publicPath(Assets.tokens.USDT),
        isPayable: true,
        rpcUrl,
        chainName,
        priceUSD: 1,
        priceNGN: 1530,
        chainId: 0
    },
    {
        id: TokenId.CELO,
        symbol: "ETH  ",
        name: 'Eth',
        color: Color.usdcBlue,
        decimals: 18,
        address: '',
        logoUrl: publicPath(Assets.tokens.ethereum),
        rpcUrl,
        chainName,
        priceUSD: 3980,
        priceNGN: 3900 * 1530,
        chainId: 0
    },
]