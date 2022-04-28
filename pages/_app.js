import '../styles/globals.css'
import '../styles/utilities.css'
import '../styles/styles.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { placeholders } from '../utilities'
import NextNProgress from "nextjs-progressbar";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore, doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
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

  const [userData] = useDocumentData(doc(db, "users", user !== null ? user.uid : "dummy"));

  return (
    <>
      <Head>
        <title>Dash Entertainment</title>
      </Head>
      <div className="main">
        <NextNProgress height={6} color="#FC4747" options={{ showSpinner: false }}></NextNProgress>
        <Navbar router={router} ></Navbar>
        <div className="container">
          {currentPath !== "404" && currentPath !== "details" && currentPath !== "user" && <SearchBar placeholder={searchPlaceholder} searchPath={localSearchPath} searchQuery={searchQuery} setSearchQuery={setSearchQuery} router={router}></SearchBar>}
          <Component {...pageProps} router={router} app={app} userData={userData}></Component>
          {currentPath !== "404" && currentPath !== "user" && <Footer router={router}></Footer>}
          <p className="c-white">{JSON.stringify(userData)}</p>
        </div>
      </div>
    </>
  )

}


export default MyApp
