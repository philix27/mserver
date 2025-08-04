import { Injectable } from '@nestjs/common';
import { LoggerService, } from '../common';
import {
    Onchain_ClaimRewardsInput,
    Onchain_ClaimRewardsResponse,
} from './transact.dto';
import { UserInput } from '../../lib';
import { RewardsService } from './services/rewards';
import { OnchainUtilsService, SupportedChains } from './services/onchainUtils';
import { FirestoreService } from '../firebase/FbService';
import { WalletGeneratorService } from '../wallet-crypto/walletGenerator.service';
import { Address } from 'viem';

@Injectable()
export class OnchainTransactionsService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly fb: FirestoreService,
        private readonly walletCrypto: WalletGeneratorService,

    ) { }

    public async claim(
        params: Onchain_ClaimRewardsInput & UserInput,
    ): Promise<Onchain_ClaimRewardsResponse> {
        this.logger.info("Claim Rewards Service");
        // this.rewards.contract();
        const doc = await this.fb.getUserWallet(params.uid);
        const privateKey = this.walletCrypto.decrypt(doc.ecrypted_private_key, doc.ivBase64, params.payment.transaction_pin);

        const rewards = new RewardsService(new OnchainUtilsService(privateKey, SupportedChains.base))

        await rewards.claim({
            tokenAddress: params.tokenAddress as Address,
        });


        return { message: "Successful" };
    }

}
