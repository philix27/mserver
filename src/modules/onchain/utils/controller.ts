import { Controller, Get, Post } from "@nestjs/common";
import { TxnManagerService } from "../services/txManager";
import { RewardsService } from "../services/rewards";

const usdtContractAddress = "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e"
const cusdContractAddress = "0x765DE816845861e75A25fCA122bb6898B8B1282a"
const ngnContractAddress = "0xE2702Bd97ee33c88c8f6f92DA3B733608aa76F71"


@Controller('manager')
export class TxnManagerController {
    public constructor(private readonly svc: TxnManagerService, private readonly rewards: RewardsService,) { }

    @Post("txn")
    async pay() {
        await this.svc.pay(
            {
                tokenAddress: usdtContractAddress,
                amount: 1,
                txName: "airtime",
                info: "airtime_test"
            })
    }

    @Get("deposit")
    async deposit() {
        // await this.svc.pay(PRIVATE_KEY, {
        //     tokenAddress: usdtContractAddress,
        //     amount: 1,
        //     txName: "airtime",
        //     info: "airtime_test"
        // })

        const hash = await this.rewards.depositTokens({
            tokenAddress: ngnContractAddress,
            amount: 100
        })
        console.log("Deposit Successful")
    }
}