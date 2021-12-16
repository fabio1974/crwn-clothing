import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS-msK_apwoDurw8mJPuaIuE5q_VgjLKs",
    authDomain: "crwn-db-3794b.firebaseapp.com",
    projectId: "crwn-db-3794b",
    storageBucket: "crwn-db-3794b.appspot.com",
    messagingSenderId: "1016230461986",
    appId: "1:1016230461986:web:22140e6ba5fcbfed80807b",
    measurementId: "G-KYC17PQZFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth,provider);


