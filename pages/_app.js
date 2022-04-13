import '../styles/globals.css'
import '../styles/utilities.css'
import '../styles/styles.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const currentPath = router.pathname.split("/")[1]; // returns "movies" "tv" "search" (or "" for /)

  return (
    <>
      <Head>
        <title>Dash Entertainment</title>
      </Head>
      <div className="main">
        <Navbar router={router} ></Navbar>
          <div className="container">
            {(currentPath==="" || currentPath==="tv" || currentPath==="movies") && <SearchBar router={router} path={currentPath} searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchBar>}
            <Component {...pageProps} router={router} searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Component>
          </div>
        </div>
    </>
  )

}

export default MyApp
