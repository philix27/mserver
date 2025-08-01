import { ethers, } from "ethers";
import { celo } from "viem/chains";
import { Injectable, } from "@nestjs/common";

export enum Chains { celo, base }

@Injectable()
export class OnchainUtilsService {

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

}