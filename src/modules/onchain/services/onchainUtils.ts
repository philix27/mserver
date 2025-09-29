import { ethers, } from "ethers";
import { baseContracts, celoContracts } from "../utils/const";

export enum SupportedChains { celo, base }
export const ChainRpc = {
    celo: "https://forno.celo.org",
    base: "https://mainnet.base.org"
    // base: "https://base-mainnet.public.blastapi.io"
}
// @Injectable()
export class OnchainUtilsService {

    wallet: ethers.Wallet
    constructor(private privateKey: string, private chain: SupportedChains) {
        this.wallet = this.getWallet()
    }


    private getProvider() {
        switch (this.chain) {
            case SupportedChains.celo: {
                return new ethers.JsonRpcProvider(ChainRpc.celo);
            }
            case SupportedChains.base: {
                return new ethers.JsonRpcProvider(ChainRpc.base);
            }
            default:
                return new ethers.JsonRpcProvider(ChainRpc.celo);
        }
    }

    private getWallet() {
        const provider = this.getProvider();
        return new ethers.Wallet(this.privateKey, provider);
    }

    public getContractAddress() {
        switch (this.chain) {
            case SupportedChains.celo: {
                return celoContracts;
            }
            case SupportedChains.base: {
                return baseContracts
            }
            default:
                return celoContracts;
        }
    }

}