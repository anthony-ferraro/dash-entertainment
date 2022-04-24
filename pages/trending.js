import React from 'react'
import { paths } from "../utilities";
import Collection from '../components/Collection'
const trending = ({ router }) => {
    return (
        <Collection label="Trending Now" path={paths.trending.all} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
    )
}

export default trending