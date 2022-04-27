import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    FacebookAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword,
    setPersistence, browserLocalPersistence, onAuthStateChanged, signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsotELzMAwiWgxTCeI30olHK7yxmcuPrg",
    authDomain: "dash-entertainment-dev.firebaseapp.com",
    projectId: "dash-entertainment-dev",
    storageBucket: "dash-entertainment-dev.appspot.com",
    messagingSenderId: "123039203266",
    appId: "1:123039203266:web:bf86c0beaa0f871390a05b",
    measurementId: "G-84QCHKW5P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

