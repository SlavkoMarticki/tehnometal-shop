import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, serverTimestamp } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();
export { serverTimestamp, GoogleAuthProvider, signInWithPopup };
export const storage = getStorage(app);
