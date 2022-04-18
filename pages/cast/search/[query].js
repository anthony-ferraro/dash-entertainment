import React from 'react'
import { paths } from '../../../utilities';
import Collection from '../../../components/Collection';
const _id_ = ({ router }) => {
    const { query } = router.query;
    const optional = `&query=${query}`;
    const currentPath = router.pathname.split("/")[1]; // returns "movies" "tv" "search" (or "" for /)
    const path = paths.search[currentPath]
        return (
            <>
                <Collection router={router} label={`Results for "${query}"`} path={path} optional={optional}></Collection>
            </>
        )
}

export default _id_