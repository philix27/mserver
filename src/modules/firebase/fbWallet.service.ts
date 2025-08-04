import { Injectable } from "@nestjs/common";
import { FirebaseAdminService } from "./fbAdmin.service";

@Injectable()
export class FirestoreWalletService {
    constructor(private readonly admin: FirebaseAdminService) { }

    cols = {
        wallet: "wallets"
    }

    async getUserWallet(userId: string) {
        const doc = await this.admin.getApp().firestore().collection(this.cols.wallet).doc(userId).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() } as { id: string } & IWallet;
    }

    async createWallet(userId: string, payload: IWallet) {
        const doc = await this.admin.getApp().firestore().collection(this.cols.wallet).doc(userId).get();
        if (doc.exists) {
            throw Error("User already have a wallet");
        }

        const docRef = await this.admin.getApp().firestore().collection(this.cols.wallet).doc(userId).set(payload);
        // const docRef = await this.db.collection(this.cols.wallet).add(payload);
        return { id: userId };
    }
}

export interface IWallet {
    address: string;
    ecrypted_private_key: string;
    public_key: string;
    seed_phrase_hash: string;
    encryptedPin: string;

    secret_question: string;
    answer_hash: string;

    ivBase64: string;
    pin_hash: string;
    // pin_salt: string;
    salt_iterations: number;
}