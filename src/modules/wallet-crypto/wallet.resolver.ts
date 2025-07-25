import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { WalletCryptoService } from "./wallet.service";
import { Wallet_CreateInput, Wallet_CreateResponse, WalletCryptoResponse } from "./wallet.dto";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../common/guards";
import { WalletGeneratorService } from "./walletGenerator.service";


@Resolver((of: any) => WalletCryptoResponse)
export class WalletCryptoResolver {
    constructor(
        private readonly service: WalletCryptoService,
        private readonly cryptoSvc: WalletGeneratorService
    ) { }

    @Query((returns) => [WalletCryptoResponse])
    @UseGuards(GqlAuthGuard)
    async walletCrypto_getAll(
        @Context() context: any
    ): Promise<WalletCryptoResponse[]> {
        const user = context.req;
        const result = await this.service.getWallets({
            userId: parseInt(user.userId),
        });

        return result;
    }

    @Mutation((returns) => [WalletCryptoResponse])
    @UseGuards(GqlAuthGuard)
    async walletCrypto_create(
        @Context() context: { req: { userId: string } }
    ): Promise<WalletCryptoResponse[]> {
        const user = context.req;
        const res = await this.service.createWalletsForNewUser({
            userId: parseInt(user.userId),
        });
        return res.map((val) => {
            return {
                address: val.address,
                chainType: val.chainType,
                minipay: val.minipay!,
                wallet_id: val.wallet_id,
                id: val.id,
            };
        });
    }

    // @Mutation((returns) => [WalletCryptoResponse])
    // async walletCrypto_gen(
    //     @Context() context: { req: { userId: string } }
    // ): Promise<WalletCryptoResponse[]> {
    //     await this.cryptoSvc.generateEthereumAddress("philix", "ockop");
    //     return []
    // }

    @Mutation((returns) => Wallet_CreateResponse)
    // @UseGuards(GqlAuthGuard)
    async walletCrypto_mobileCreate(
        @Args('input') input: Wallet_CreateInput,
        @Context() context: { req: { userId: number } }
    ): Promise<Wallet_CreateResponse> {
        return await this.service.createWallet({
            ...input,
            userId: context.req.userId,
        });

    }
}
