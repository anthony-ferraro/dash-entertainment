import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
const auth = getAuth(app);

// Function to get user document reference
const getUserDocRef = (uid) => {
    return doc(db, "users", uid);
};

// Function to update user's bookmarks
const updateUserBookmarks = async (uid, bookmarkField, contentId, action) => {
    const userRef = getUserDocRef(uid);
    if (action === 'add') {
        await updateDoc(userRef, {
            [bookmarkField]: arrayUnion(contentId)
        });
    } else if (action === 'remove') {
        await updateDoc(userRef, {
            [bookmarkField]: arrayRemove(contentId)
        });
    }
};

// Function to check and create user if not exists
const checkAndCreateUser = async (user) => {
    const docRef = getUserDocRef(user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await updateDoc(docRef, {
            lastLogin: user.metadata.lastLoginAt
        });
    } else {
        const newUser = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: user.metadata.createdAt,
            lastLoginAt: user.metadata.lastLoginAt,
            bookmarked_movie: [],
            bookmarked_tv: [],
            bookmarked_person: [],
        };
        await setDoc(docRef, newUser);
    }
};

// Function to get user document data
const getUserDocumentData = (uid) => {
    return doc(db, "users", uid);
};

// Function to handle user sign-in
const signInUser = async (email, password) => {
    await setPersistence(auth, browserLocalPersistence);
    return signInWithEmailAndPassword(auth, email, password);
};

// Function to handle user sign-up
const signUpUser = async (email, password) => {
    await setPersistence(auth, browserLocalPersistence);
    return createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign out user
const signOutUser = async () => {
    return signOut(auth);
};

export { app, auth, db, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, getUserDocRef, updateUserBookmarks, checkAndCreateUser, getUserDocumentData, signInUser, signUpUser, signOutUser };

