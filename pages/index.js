import { paths } from "../utilities";
import Collection from "../components/Collection";
export default function Home({ router }) {
  const displayCount = 11;
  return (
    <>
      <Collection label="Trending Now" path={paths.trending.all} type="wide" displayCount={displayCount} router={router} morePath="/trending?page=1"></Collection>
      <Collection label="In Theaters" path={paths.nowPlaying.movies} displayCount={displayCount} router={router} morePath="/movies/now-playing?page=1"></Collection>
      <Collection label="Popular Movies" path={paths.popular.movies} displayCount={displayCount} router={router} morePath="/movies/popular?page=1"></Collection>
      <Collection label="Airing Today" path={paths.nowPlaying.tv} type="wide" displayCount={displayCount} router={router} morePath="/tv/now-playing?page=1"></Collection>
      <Collection label="Popular TV Series" path={paths.popular.tv} displayCount={displayCount} router={router} morePath="/tv/popular?page=1"></Collection>
    </>
  )
}
