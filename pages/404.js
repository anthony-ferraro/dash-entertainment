import React from 'react'
import Head from 'next/head'
import styles from '../styles/Error.module.css'
const Error = ({ router }) => {
    return (
        <>
            <Head>
                <title>Error 404 - Not Found</title>
            </Head>
            <div className={`${styles.error_404}`}>
                <p>404 - Page Not Found</p>
                <button onClick={() => router.push("/")} className="button back-button">Go Home</button>
            </div>
        </>
    )
}

export default Error