import { Controller, Get, Post } from "@nestjs/common";
import { TxnManagerService } from "../services/txManager";
import { PRIVATE_CLIENT } from '../config';


const PRIVATE_KEY = process.env.PRIVATE_KEY
const usdtContractAddress = "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e"


@Controller('manager')
export class TxnManagerController {
    public constructor(private readonly svc: TxnManagerService) { }

    @Post("txn")
    async gg() {
        await this.svc.pay(PRIVATE_KEY, {
            tokenAddress: usdtContractAddress,
            amount: 1,
            txName: "airtime",
            info: "airtime_test"
        })
    }

    @Get("txn")
    async pay() {
        // await this.svc.pay(PRIVATE_KEY, {
        //     tokenAddress: usdtContractAddress,
        //     amount: 1,
        //     txName: "airtime",
        //     info: "airtime_test"
        // })
        console.log("Hello mate")
    }
}