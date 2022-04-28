import React from 'react'
import { paths } from '../../utilities';
import Collection from '../../components/Collection';
import Head from 'next/head';
const _id_ = ({ router, app, userData }) => {
    const { query } = router.query;
    const optional = `&query=${query}&page=${router.query.page}`;
    const path = paths.search.multi;
    return (
        <>
            <Head>
                <title>{`${query} - Search`}</title>
            </Head>
            <Collection router={router} label={`Results for "${query}"`} path={path} optional={optional} pagination={true} app={app} userData={userData}></Collection>
        </>
    )
}

export default _id_