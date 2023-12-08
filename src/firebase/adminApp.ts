import firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.ADMIN_FIREBASE_PRIVATE_KEY,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.ADMIN_FIREBASE_CLIENT_EMAIL,
    }),
    storageBucket: process.env.ADMIN_FIREBASE_STORAGE_BUCKET,
  });
}

export default firebaseAdmin;