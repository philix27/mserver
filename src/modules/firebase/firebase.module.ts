// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { FirebaseAdminService } from './fbAdmin.service';
import { FirebaseAuthService } from './fbAuth.service';
import { FirestoreWalletService } from './fbWallet.service';
import { FirestoreServiceX } from './firestore.service';

@Module({
    exports: [FirebaseAuthService, FirestoreWalletService, FirebaseAdminService],
    providers: [FirebaseAdminService, FirebaseAuthService, FirestoreWalletService, ],
})
export class FirebaseModule { }
