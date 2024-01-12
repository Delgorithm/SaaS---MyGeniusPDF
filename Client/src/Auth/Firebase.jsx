// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const initializeFirebase = async () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    return { app, analytics, auth };
};
// Initialize Firebase

export const { app, analytics, auth } = await initializeFirebase();