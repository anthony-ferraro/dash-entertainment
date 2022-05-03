import React from 'react'
import { paths } from "../utilities";
import Collection from '../components/Collection'
import Head from 'next/head'
const trending = ({ router, userData }) => {
    return (
        <>
            <Head>
                <title>Trending</title>
            </Head>
            <Collection label="Trending Now" path={paths.trending.all} router={router} optional={`&page=${router.query.page}`} pagination={true} userData={userData}></Collection>
        </>
    )
}

export default trending