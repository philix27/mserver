import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as bip39 from 'bip39';
import { ethers, HDNodeWallet, Mnemonic, Wallet } from 'ethers';
import { Buffer } from 'buffer';

export enum SeedPhraseStrength {
    i128 = 128,
    i256 = 256,
}

export interface WalletCredentials {
    encryptedPrivateKey: string;
    walletAddress: string;
    publicKey: string;
    encryptedSeedPhrase: string;
    ivBase64: string;
    encryptedPin: string;
}

@Injectable()
export class WalletGeneratorService {

    generateSeedPhrase(strength: SeedPhraseStrength = SeedPhraseStrength.i128): string {
        return bip39.generateMnemonic(strength);
    }

    async generateEthereumAddress(password: string, answer: string): Promise<WalletCredentials> {
        const seedPhrase = this.generateSeedPhrase();

        const _wallet = Wallet.fromPhrase(seedPhrase);

        const iv = crypto.randomBytes(16);
        const ivStr = iv.toString('base64');

        const encryptedPrivateKey = this.encrypt(_wallet.privateKey, password, iv);
        const encryptedSeedPhrase = this.encrypt(seedPhrase, password, iv);
        const encryptedPin = this.encrypt(password, answer, iv);

        if (process.env.NODE_ENV === "development") {
            console.log("IV String:  " + ivStr);
            console.log("Original PrivateKey " + _wallet.privateKey);
            console.log("Original SeedPhrase " + seedPhrase);
            // Encrypt
            console.log("encryptedPrivateKey " + encryptedPrivateKey);
            console.log("encryptedSeedPhrase " + encryptedSeedPhrase);
            // decrypt
            console.log("Decryp-EncryptedPrivateKey " + this.decrypt(encryptedPrivateKey, ivStr, password));
            console.log("Decrypt-EncryptedSeedPhrase " + this.decrypt(encryptedSeedPhrase, ivStr, password));

            console.log("privatekey match ", _wallet.privateKey === this.decrypt(encryptedPrivateKey, ivStr, password));
            console.log("seedPhrase match ", seedPhrase === this.decrypt(encryptedSeedPhrase, ivStr, password));
        }

        return {
            encryptedPrivateKey,
            encryptedSeedPhrase,
            publicKey: _wallet.publicKey,
            walletAddress: _wallet.address,
            ivBase64: ivStr,
            encryptedPin: encryptedPin
        };
    }

    async generateExtraEthereumAddress(seedPhrase: string): Promise<ethers.HDNodeWallet> {
        const mnemonic = Mnemonic.fromPhrase(seedPhrase);
        const rootNode = HDNodeWallet.fromMnemonic(mnemonic);

        // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
        const path = `m/44'/60'/0'/0/1`; // last no. used to derive a wallet at index
        const childWallet = rootNode.derivePath(path);

        return childWallet
    }

    private encrypt(data: string, password: string, iv: Buffer): string {
        const key = crypto.createHash('sha256').update(password).digest();
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
        return encrypted.toString('base64');
    }

    private decrypt(encryptedBase64: string, ivBase64: string, password: string): string {
        const key = crypto.createHash('sha256').update(password).digest();
        const iv = Buffer.from(ivBase64, 'base64');
        const encryptedData = Buffer.from(encryptedBase64, 'base64');
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
        return decrypted.toString('utf8');
    }
}
