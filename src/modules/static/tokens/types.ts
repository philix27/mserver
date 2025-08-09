export interface Token {
    id: TokenId;
    symbol: string; // The same as id for now
    name: string;
    color: string;
    address: string;
    logoUrl: string;
    decimals: number;
    isPayable?: boolean;
    isBuyable?: boolean;
    isSellable?: boolean;
}


export enum TokenId {
    cNGN = 'cNGN',
    CELO = 'CELO',
    cUSD = 'cUSD',
    cEUR = 'cEUR',
    USDC = 'USDC',
    USDT = 'USDT',
    cGBP = 'cGBP',
    // cREAL = 'cREAL',
    // cKES = 'cKES',
    // cGHS = 'cGHS',
    // cZAR = 'cZAR',
    // cCAD = 'cCAD',
    // cAUD = 'cAUD',
    // cREAL = 'cREAL',
    // axlUSDC = 'axlUSDC',
    // axlEUROC = 'axlEUROC',
    // eXOF = 'eXOF',
    // PUSO = 'PUSO',
    // cCOP = 'cCOP',
    // cCHF = 'cCHF',
    // cJPY = 'cJPY',
}