import { paths } from "../../utilities";
import GenreList from "../../components/GenreList";
import Collection from "../../components/Collection";
import Head from 'next/head'
export default function index({ router, userData }) {
    return (
        <>
            <Head>
                <title>TV Series</title>
            </Head>
            <p className="heading-XL c-white" style={{ paddingBottom: "10px" }}>TV Series</p>
            <Collection label="Airing Today" path={paths.nowPlaying.tv} optional={"&language=en"} displayCount={12} type="wide" router={router} userData={userData} morePath="/tv/now-playing?page=1"></Collection>
            <GenreList path={paths.genres.tv} router={router}></GenreList>
            <Collection label="Popular TV Series" path={paths.popular.tv} optional={"&language=en"} displayCount={12} type="wide" router={router} userData={userData} morePath="/tv/popular?page=1"></Collection>
        </>
    )
}