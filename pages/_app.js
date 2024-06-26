import '../styles/globals.css'
import '../styles/utilities.css'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar";

import Navbar from '../components/Navbar'
import ConditionalSearchBar from '../components/ConditionalSearchBar'
import ConditionalFooter from '../components/ConditionalFooter'

import { app, auth, checkAndCreateUser, getUserDocumentData } from '../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore';

function MyApp({ Component, pageProps }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [user] = useAuthState(auth);
  const [userData, userDataLoading] = useDocumentData(getUserDocumentData(user ? user.uid : "dummy"));

  useEffect(() => {
    if (user) {
      checkAndCreateUser(user);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Dash Entertainment</title>
      </Head>
      <div className="main">
        <NextNProgress height={6} color="#FC4747" options={{ showSpinner: false }} />
        <Navbar router={useRouter()} />
        <div className="container">
          <ConditionalSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Component {...pageProps} router={useRouter()} app={app} userData={userData} userDataLoading={userDataLoading} />
          <ConditionalFooter userData={userData} />
        </div>
      </div>
    </>
  )
}

export default MyApp
