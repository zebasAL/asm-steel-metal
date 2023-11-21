import firebaseAdmin from 'firebase-admin';
import { credentials } from './clientApp'

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(credentials),
    // Otras configuraciones si es necesario
  });
}

export default firebaseAdmin;
