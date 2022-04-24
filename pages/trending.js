import React from 'react'
import { paths } from "../utilities";
import Collection from '../components/Collection'
import Head from 'next/head'
const trending = ({ router }) => {
    return (
        <>
            <Head>
                <title>Trending</title>
            </Head>
            <Collection label="Trending Now" path={paths.trending.all} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
        </>
    )
}

export default trending