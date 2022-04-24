import React from 'react'
import { paths } from '../../utilities';
import Collection from '../../components/Collection';
const _id_ = ({ router }) => {
    const { query } = router.query;
    const optional = `&query=${query}&page=${router.query.page}`;
    const path = paths.search.multi;
        return (
            <>
                <Collection router={router} label={`Results for "${query}"`} path={path} optional={optional} pagination={true}></Collection>
            </>
        )
}

export default _id_