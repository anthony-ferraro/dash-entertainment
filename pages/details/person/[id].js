import React from 'react'
import useSWR from 'swr'
import { getURL } from '../../../utilities';
import PersonDetails from '../../../components/PersonDetails';
import Loading from '../../../components/Loading';
import Head from 'next/head';

const _id_ = ({ router }) => {
    const [title, setTitle] = React.useState('');
    const { id } = router.query;
    function fetcher(...urls) {
        const f = (u) => fetch(u).then((r) => r.json());

        if (urls.length > 1) {
            return Promise.all(urls.map(f));
        }
        return f(urls);
    }
    const paths = [`person/${id}`, `person/${id}/combined_credits`].map(path => getURL(path));
    const { data, error } = useSWR(paths, fetcher)

    if (error) {
        return (
            <div>
                {getURL(path)}
                Failed to load content
            </div>
        )
    } else if (!data) {
        return (
            <Loading></Loading>
        )
    } else {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <PersonDetails personData={data} router={router} path={paths[1]} personID={id} setTitle={setTitle}></PersonDetails>
            </>
        )
    }
}

export default _id_