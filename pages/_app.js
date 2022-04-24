import '../styles/globals.css'
import '../styles/utilities.css'
import '../styles/styles.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { placeholders } from '../utilities'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const currentPath = router.pathname.split("/")[1];
  const localSearchPath = `${currentPath === "" || currentPath === "search" ? "" : "/"}${currentPath === "search" || currentPath === "trending" ? "" : currentPath}/search/`;
  const searchPlaceholder = placeholders[currentPath];


  return (
    <>
      <Head>
        <title>Dash Entertainment</title>
      </Head>
      <div className="main">
        <NextNProgress height={6} color="#FC4747" options={{ showSpinner: false }}></NextNProgress>
        <Navbar router={router} ></Navbar>
        <div className="container">
          {currentPath !== "404" && currentPath !== "details" && <SearchBar placeholder={searchPlaceholder} searchPath={localSearchPath} searchQuery={searchQuery} setSearchQuery={setSearchQuery} router={router}></SearchBar>}
          <Component {...pageProps} router={router}></Component>
          {currentPath !== "404" && <Footer router={router}></Footer>}
        </div>
      </div>
    </>
  )

}


export default MyApp
