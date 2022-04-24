import { paths } from "../../utilities";
import Collection from "../../components/Collection";
import Head from 'next/head';
export default function index({ router }) {
    return (
        <>
            <Head>
                <title>Trending People</title>
            </Head>
            <Collection router={router} label="Trending People" type="normal" path={paths.popular.people} optional={`&page=${router.query.page}`} pagination={true}></Collection>
        </>
    )
}