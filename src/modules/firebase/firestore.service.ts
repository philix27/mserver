import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';
import admin from './firebase.admin';


@Injectable()
export class FirestoreServiceX {
    private db: FirebaseFirestore.Firestore;

    constructor() {
        this.db = admin.firestore();
    }

    // CREATE
    async createDoc(collection: string, data: any) {
        const docRef = await this.db.collection(collection).add(data);
        return { id: docRef.id };
    }

    // READ ALL
    async getAllDocs(collection: string) {
        const snapshot = await this.db.collection(collection).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    // READ ONE
    async getDocById(collection: string, id: string) {
        const doc = await this.db.collection(collection).doc(id).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() };
    }

    // UPDATE
    async updateDoc(collection: string, id: string, data: any) {
        await this.db.collection(collection).doc(id).update(data);
        return { id, updated: true };
    }

    // DELETE
    async deleteDoc(collection: string, id: string) {
        await this.db.collection(collection).doc(id).delete();
        return { id, deleted: true };
    }
}
