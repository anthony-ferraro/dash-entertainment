import { paths } from "../../utilities";
import GenreList from "../../components/GenreList";
import Head from 'next/head';
export default function index({ router, }) {
    return (
        <>
            <Head>
                <title>Movies</title>
            </Head>
            <GenreList path={paths.genres.movies} router={router}></GenreList>
        </>
    )
}