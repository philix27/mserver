import { Injectable } from '@nestjs/common';
import { LoggerService, } from '../common';
import {
    Onchain_ClaimRewardsInput,
    Onchain_ClaimRewardsResponse,
    Onchain_TransferTokenInput,
    Onchain_TransferTokenResponse,
} from './transact.dto';
import { UserInput } from '../../lib';
import { RewardsService } from './services/rewards';
import { OnchainUtilsService, SupportedChains } from './services/onchainUtils';
import { Address } from 'viem';
import { WalletCryptoService } from '../wallet-crypto/wallet.service';
import { GqlErr } from '../common/errors/gqlErr';

@Injectable()
export class OnchainTransactionsService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly walletCrypto: WalletCryptoService,

    ) { }

    public async claim(
        params: Onchain_ClaimRewardsInput & UserInput,
    ): Promise<Onchain_ClaimRewardsResponse> {
        const baseUSDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

        this.logger.info("Claim Rewards Service");

        const privateKey = await this.walletCrypto.getEthWallet({
            user_uid: params.payment.user_uid,
            pin: params.payment.transaction_pin
        })

        const rewards = new RewardsService(new OnchainUtilsService(privateKey, SupportedChains.base))

        await rewards.claim({
            tokenAddress: baseUSDC as Address,
        });


        return { message: "Successful" };
    }
    public async transferToken(
        params: Onchain_TransferTokenInput & UserInput,
    ): Promise<Onchain_TransferTokenResponse> {
        throw GqlErr("Unimplemented");


    }

}
