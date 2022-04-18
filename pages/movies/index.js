import { paths } from "../../utilities";
import GenreList from "../../components/GenreList";
export default function index({ router, }) {
    return (
        <>
            <GenreList path={paths.genres.movies} router={router}></GenreList>
        </>
    )
}