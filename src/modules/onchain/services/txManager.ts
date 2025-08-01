import { ethers, } from "ethers";
import { CELO_TXN_MANAGER_CONTRACT_ADDRESS } from "../utils/const";
import { TXN_MANAGER_ABI } from "../abi/abi.txnManager";
import { Address } from "viem";
import { Injectable, } from "@nestjs/common";
import { OnchainUtilsService } from "./onchainUtils";
import { Erc20Service } from "./erc20Contract";


@Injectable()
export class TxnManagerService {
    constructor(private readonly utils: OnchainUtilsService) { }

    contract(signer: ethers.Wallet) {
        return new ethers.Contract(CELO_TXN_MANAGER_CONTRACT_ADDRESS, TXN_MANAGER_ABI, signer);
    }

    async pay(privateKey: string, payload: { tokenAddress: Address, amount: number, txName: string, info: string }) {
        try {
            const provider = this.utils.getProvider();

            const wallet = new ethers.Wallet(privateKey, provider);

            const erc20 = new Erc20Service(wallet, payload.tokenAddress)

            await erc20.approve(payload.amount)

            const _txnContract = this.contract(wallet);

            const tx = await _txnContract.pay(payload.tokenAddress, payload.amount, payload.txName, payload.info);

            console.log("Transaction sent:", tx.hash);

            const receipt = await tx.wait();
            console.log("Transaction mined:", receipt.transactionHash);
        } catch (error) {
            console.error("Pay err: ", error)
        }
    }

}