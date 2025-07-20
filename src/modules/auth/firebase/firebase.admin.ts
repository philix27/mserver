import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(
    require(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  ),
});


export default admin;



