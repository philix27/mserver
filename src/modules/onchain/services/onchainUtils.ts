import { ethers, } from "ethers";
import { celo } from "viem/chains";
import { Injectable, } from "@nestjs/common";

export enum Chains { celo, base }

@Injectable()
export class OnchainUtilsService {

    wallet: ethers.Wallet
    constructor(private privateKey: string) {
        this.wallet = this.getWallet()
    }


    private getRpcUrl(chain?: Chains) {
        switch (chain) {
            case Chains.celo: {
                return "https://forno.celo.org"
            }

            case Chains.base: {
                return "https://forno.celo.org"
            }

            default:
                return "https://forno.celo.org"
        }

    }

    getProvider(chain?: Chains) {
        return new ethers.JsonRpcProvider(this.getRpcUrl(chain));
    }

    getWallet() {
        const provider = this.getProvider();
        return new ethers.Wallet(this.privateKey, provider);
    }

}