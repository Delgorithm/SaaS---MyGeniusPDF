// Firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const apiKeyFirebase = import.meta.env.VITE_API_FIREBASE_KEY;
const authDomainFirebase = import.meta.env.VITE_AUTH_KEY;
const databaseUrlFirebase = import.meta.env.VITE_DATABASE_KEY;
const projectIdFirebase = import.meta.env.VITE_PROJECT_KEY;
const storageBucketFirebase = import.meta.env.VITE_STORAGE_KEY;
const messagingSendedIdFirebase = import.meta.env.VITE_MESSAGING_KEY;
const appIdFirebase = import.meta.env.VITE_APP_KEY;
const measurementIdFirebase = import.meta.env.VITE_MEASUREMENT_KEY;

const firebaseConfig = {
	apiKey: apiKeyFirebase,
	authDomain: authDomainFirebase,
	databaseURL: databaseUrlFirebase,
	projectId: projectIdFirebase,
	storageBucket: storageBucketFirebase,
	messagingSenderId: messagingSendedIdFirebase,
	appId: appIdFirebase,
	measurementId: measurementIdFirebase,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
