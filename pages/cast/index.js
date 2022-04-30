import { paths } from "../../utilities";
import Collection from "../../components/Collection";
import Head from 'next/head';
export default function index({ router, app, userData }) {
    return (
        <>
            <Head>
                <title>Trending People</title>
            </Head>
            <Collection router={router} label="Trending People" type="normal" tall={true} path={paths.popular.people} optional={`&page=${router.query.page}`} pagination={true} app={app} userData={userData}></Collection>
        </>
    )
}