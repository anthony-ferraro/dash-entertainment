import React from 'react'
import ContentList from '../../../../components/ContentList';
import { server } from '../../../../config';

const search = ({ router, content }) => {
    const searchResults = content.filter(contentItem => contentItem.title.toLowerCase().includes(router.query.query.toLowerCase()));
    return (
        <>
            <p className="heading-L c-white">Found {searchResults.length} results for &quot;{router.query.query}&quot;</p>
            <ContentList content={searchResults}></ContentList>
        </>
    )
}

export default search

export const getServerSideProps = async () => {
    const res = await fetch(`${server}/api/content`)
    const content = await res.json()

    return {
        props: {
            content
        }
    }
}
