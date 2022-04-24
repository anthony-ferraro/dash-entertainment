import React from 'react'
import { paths } from '../../../utilities'
import Collection from '../../../components/Collection'
const _id_ = ({ router }) => {
    const { id, name, page=1 } = router.query;
    const optional = `&with_genres=${id}&page=${page}`;
    const currentPath = router.pathname.split("/")[1]; // returns "movies" "tv" "search" (or "" for /)
    const path = paths.discover[currentPath]
        return (
            <>
                <Collection router={router} label={name} path={path} optional={optional} pagination={true}></Collection>
            </>
        )
}

export default _id_