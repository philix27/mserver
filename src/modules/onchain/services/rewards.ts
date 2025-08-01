import { ethers, } from "ethers";
import { celoContracts } from "../utils/const";
import { Address } from "viem";
import { Injectable, } from "@nestjs/common";
import { OnchainUtilsService } from "./onchainUtils";
import { Erc20Service } from "./erc20Contract";
import { rewardAbi } from "../abi/rewards";


@Injectable()
export class RewardsService {
    constructor(private readonly utils: OnchainUtilsService) { }

    contract(signer: ethers.Wallet) {
        return new ethers.Contract(celoContracts.rewards, rewardAbi, signer);
    }

    async claim(privateKey: string,) {
        try {
            const provider = this.utils.getProvider();

            const wallet = new ethers.Wallet(privateKey, provider);

            const _txnContract = this.contract(wallet);

            const tx = await _txnContract.claim();

            console.log("Transaction sent:", tx.hash);

            const receipt = await tx.wait();
            console.log("Transaction mined:", receipt.transactionHash);
        } catch (error) {
            console.error("Pay err: ", error)
        }
    }

    async depositTokens(privateKey: string, payload: {  tokenAddress: Address, amount: number, txName: string, info: string }) {
        try {
            const provider = this.utils.getProvider();

            const wallet = new ethers.Wallet(privateKey, provider);

            const erc20 = new Erc20Service(wallet, payload.tokenAddress)

            await erc20.approve(payload.amount)

            const _txnContract = this.contract(wallet);

            const tx = await _txnContract.depositTokens(payload.amount  );

            console.log("Transaction sent:", tx.hash);

            const receipt = await tx.wait();
            console.log("Transaction mined:", receipt.transactionHash);
        } catch (error) {
            console.error("Pay err: ", error)
        }
    }

}