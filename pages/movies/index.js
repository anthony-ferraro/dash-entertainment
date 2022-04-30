import { paths } from "../../utilities";
import GenreList from "../../components/GenreList";
import Collection from "../../components/Collection";
import Head from 'next/head';
export default function index({ router, userData}) {
    return (
        <>
            <Head>
                <title>Movies</title>
            </Head>
            <p className="heading-XL c-white" style={{paddingBottom: "10px"}}>Movies</p>
            <Collection label="In Theaters" type="wide" path={paths.nowPlaying.movies} optional={"&language=en"} displayCount={12} router={router} userData={userData} morePath="/movies/now-playing?page=1"></Collection>
            <p className="c-white heading-L">Top Genres</p>
            <GenreList path={paths.genres.movies} router={router}></GenreList>
            <Collection label="Popular" path={paths.popular.movies} type="wide" optional={"&language=en"} displayCount={12} router={router} userData={userData} morePath="/movies/popular?page=1"></Collection>
        </>
    )
}