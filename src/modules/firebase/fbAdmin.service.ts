import * as admin from 'firebase-admin';

import { Injectable, OnModuleInit } from '@nestjs/common';

const serviceAccountCredentials: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_ADMIN_SDK_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_SDK_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY?.replace(/\\n/g, '\n'),
}

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccountCredentials,
//   ),
// });


// export default admin;


@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  private firebaseApp: admin.app.App;

  onModuleInit() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccountCredentials),
    });
  }

  getAuth(): admin.auth.Auth {
    return admin.auth();
  }
  getApp() {
    return this.firebaseApp;
  }
}
