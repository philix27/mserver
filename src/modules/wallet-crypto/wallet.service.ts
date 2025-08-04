import { Injectable } from "@nestjs/common";
import { LoggerService, PrismaService } from "../common";
import { PrivyWalletService } from "./privy.service";
import { ChainType } from "@prisma/client";
import { GqlErr } from "../common/errors/gqlErr";
import { Wallet_CreateInput, Wallet_CreateResponse, WalletCryptoResponse } from "./wallet.dto";
import { IWallet, FirestoreService } from '../firebase/FbService';
import { CryptoService } from "../helper/crypto.service";
import { WalletGeneratorService } from './walletGenerator.service';

@Injectable()
export class WalletCryptoService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
        private readonly privy: PrivyWalletService,
        private readonly crypto: CryptoService,
        private readonly walletGen: WalletGeneratorService,
        private readonly firestoreService: FirestoreService,
    ) { }


    async createWallet(params: Wallet_CreateInput & { userId: number }): Promise<Wallet_CreateResponse> {
        try {
            this.logger.info("Creating wallet for mobile app");

            const salt_iterations = 12
            const pin_hash = await this.crypto.hash(params.pin, salt_iterations);

            const seedPhrase = this.walletGen.generateSeedPhrase();

            const seedPhraseHash = await this.crypto.hash(seedPhrase, salt_iterations);

            const answerHash = await this.crypto.hash(params.answer, salt_iterations);

            const load = await this.walletGen.generateEthereumAddress(params.pin, params.answer);

            const payload: IWallet = {
                address: load.walletAddress,
                ecrypted_private_key: load.encryptedPrivateKey,
                public_key: load.publicKey,
                seed_phrase_hash: seedPhraseHash,
                secret_question: params.question,
                answer_hash: answerHash,
                pin_hash,
                salt_iterations,
                ivBase64: load.ivBase64,
                encryptedPin: load.encryptedPin
            }

            const result = await this.firestoreService.createWallet(params.user_uid, payload);

            return { message: "Wallet created successfully" }
        } catch (error) {
            throw GqlErr("Could not create wallet for user: " + error);
        }
    }

    public async createWalletsForNewUser(params: {
        userId: number;
    }): Promise<WalletCryptoResponse[]> {
        this.logger.info("Creating crypto wallet accounts ...");

        const userWallets = await this.prisma.cryptoWallets.findMany({
            where: {
                user_id: params.userId,
            },
        });
        console.log("wallets: ", userWallets);
        if (userWallets.length > 1) {
            throw GqlErr("User already has wallets");
        }

        // todo: should never execute until app goes live
        if (params.userId === undefined) {
            const ethWallet = await this.createEthereumWallet({
                userId: params.userId,
            });
            const solWallet = await this.createSolanaWallet({
                userId: params.userId,
            });
            [ethWallet, solWallet];
        }

        const ethWallet: WalletCryptoResponse = {
            id: 1,
            address: "ethWallet",
            wallet_id: "string;",
            chainType: ChainType.Ethereum,
            minipay: true,
        };
        const solWallet: WalletCryptoResponse = {
            id: 1,
            address: "solWallet",
            wallet_id: "wallet_id;",
            chainType: ChainType.Solana,
            minipay: true,
        };

        return [ethWallet, solWallet];
    }

    private async createEthereumWallet(params: { userId: number }) {
        this.logger.info("Creating ethereum wallet");

        const wallet = await this.privy.createWallet("ethereum");

        const cryptoWallets = await this.prisma.cryptoWallets.create({
            data: {
                user_id: params.userId,
                address: wallet.address,
                wallet_id: wallet.id,
                chainType: "Ethereum",
            },
        });
        return cryptoWallets;
    }

    private async createSolanaWallet(params: { userId: number }) {
        this.logger.info("Creating ethereum wallet");

        const wallet = await this.privy.createWallet("solana");

        const cryptoWallets = await this.prisma.cryptoWallets.create({
            data: {
                user_id: params.userId,
                address: wallet.address,
                wallet_id: wallet.id,
                chainType: "Solana",
            },
        });
        return cryptoWallets;
    }


    public async getWallets(params: {
        userId: number;
    }): Promise<WalletCryptoResponse[]> {
        this.logger.info("Retrieve user wallets ...");

        const wallets = await this.prisma.cryptoWallets.findMany({
            where: {
                user_id: params.userId,
            },
        });

        const _wallets: WalletCryptoResponse[] = wallets.map((val) => {
            return {
                id: val.id,
                address: val.address,
                chainType: val.chainType,
                minipay: val.minipay!,
            };
        });
        return _wallets;
    }
}
