import React from 'react'
import { paths } from '../../../utilities';
import Collection from '../../../components/Collection';
import Head from 'next/head'
const _id_ = ({ router, app, userData }) => {
    const { query, page } = router.query;
    const optional = `&query=${query}&page=${page}`;
    const currentPath = router.pathname.split("/")[1]; // returns "movies" "tv" "search" (or "" for /)
    const path = paths.search[currentPath]
    return (
        <>
            <Head>
                <title>{`${query} - Search TV Series`}</title>
            </Head>
            <Collection router={router} label={`Results for "${query}"`} path={path} optional={optional} pagination={true} app={app} userData={userData}></Collection>
        </>
    )
}

export default _id_