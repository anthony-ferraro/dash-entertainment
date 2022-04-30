import '../styles/globals.css'
import '../styles/utilities.css'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'


import { placeholders } from '../utilities'

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore, doc, onSnapshot, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useDocumentData } from 'react-firebase-hooks/firestore';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const currentPath = router.pathname.split("/")[1];
  const localSearchPath = `${currentPath === "" || currentPath === "search" ? "" : "/"}${currentPath === "search" || currentPath === "trending" ? "" : currentPath}/search/`;
  const searchPlaceholder = placeholders[currentPath];

  //initialize app
  const firebaseConfig = {
    apiKey: "AIzaSyBsotELzMAwiWgxTCeI30olHK7yxmcuPrg",
    authDomain: "dash-entertainment-dev.firebaseapp.com",
    projectId: "dash-entertainment-dev",
    storageBucket: "dash-entertainment-dev.appspot.com",
    messagingSenderId: "123039203266",
    appId: "1:123039203266:web:bf86c0beaa0f871390a05b",
    measurementId: "G-84QCHKW5P9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const db = getFirestore(app);

  useEffect(() => {
    // when the auth state changes to logged in, check if the user exists in the database
    // if it does not exist then create it
    if (user) {
      const checkCreateUser = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          updateDoc(docRef, {
            lastLogin: user.metadata.lastLoginAt
          })
        } else {
          // create a new user in the database
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
      }
      checkCreateUser();
    }
  }, [user]);

  const [userData, userDataLoading] = useDocumentData(doc(db, "users", user !== null ? user.uid : "dummy"));

  return (
    <>
      <Head>
        <title>Dash Entertainment</title>
      </Head>
      <div className="main">
        <NextNProgress height={6} color="#FC4747" options={{ showSpinner: false }}></NextNProgress>
        <Navbar router={router} ></Navbar>
        <div className="container">
          {currentPath !== "404" && currentPath !== "details" && currentPath !== "favorites" && <SearchBar placeholder={searchPlaceholder} searchPath={localSearchPath} searchQuery={searchQuery} setSearchQuery={setSearchQuery} router={router}></SearchBar>}
          <Component {...pageProps} router={router} app={app} userData={userData} userDataLoading={userDataLoading}></Component>
          {currentPath !== "404" && (currentPath !== "favorites" || currentPath==="favorites" && userData) && <Footer router={router}></Footer>}
        </div>
      </div>
    </>
  )

}


export default MyApp
