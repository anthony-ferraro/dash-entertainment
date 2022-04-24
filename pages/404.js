import React from 'react'
import Head from 'next/head'
const Error = ({ router }) => {
    return (
        <>
            <Head>
                <title>Error 404 - Not Found</title>
            </Head>
            <div className="error_404">
                <p>404 - Page Not Found</p>
                <button onClick={() => router.push("/")} className="button">Go Home</button>
            </div>
        </>
    )
}

export default Error