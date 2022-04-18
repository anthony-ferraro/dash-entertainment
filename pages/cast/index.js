import { paths } from "../../utilities";
import Collection from "../../components/Collection";
export default function index({ router }) {
    return (
        <>
            <Collection router={router} label="Trending Cast Members" type="normal" path={paths.popular.people}></Collection>
        </>
    )
}