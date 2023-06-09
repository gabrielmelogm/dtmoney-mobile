import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import env from "../../config";

const config = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID,
};

const app = initializeApp(config);

const auth = {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
};

const db = getFirestore(app);

export { auth, db };
