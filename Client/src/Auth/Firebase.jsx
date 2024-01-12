// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKeyFirebase = import.meta.env.VITE_API_FIREBASE_KEY;
const authDomainFirebase = import.meta.env.VITE_AUTH_KEY;
const projectIdFirebase = import.meta.env.VITE_PROJECT_KEY;
const storageBucketFirebase = import.meta.env.VITE_STORAGE_KEY;
const messagingSendedIdFirebase = import.meta.env.VITE_MESSAGING_KEY;
const appIdFirebase = import.meta.env.VITE_APP_KEY;
const measurementIdFirebase = import.meta.env.VITE_MEASUREMENT_KEY;

const firebaseConfig = {
  apiKey: apiKeyFirebase,
  authDomain: authDomainFirebase,
  projectId: projectIdFirebase,
  storageBucket: storageBucketFirebase,
  messagingSenderId: messagingSendedIdFirebase,
  appId: appIdFirebase,
  measurementId: measurementIdFirebase,
};

export const initializeFirebase = async () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize Firebase Authentication
  const auth = getAuth(app);
  // Initialize Firebase Realtime Database and get a reference to the service
  const db = getDatabase(app);
  const userDataRef = ref(db, 'users');

  return { app, analytics, auth, db, userDataRef };
};

// Initialize Firebase
export const { app, analytics, auth, db, userDataRef } = await initializeFirebase();

export default app;