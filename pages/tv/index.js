import { paths } from "../../utilities";
import GenreList from "../../components/GenreList";
import Head from 'next/head'
export default function index({ router }) {
    return (
        <>
            <Head>
                <title>TV Series</title>
            </Head>
            <GenreList path={paths.genres.tv} router={router}></GenreList>
        </>
    )
}