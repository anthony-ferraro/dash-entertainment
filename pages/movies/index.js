import React from 'react'
import ContentList from '../../components/ContentList'
import {server} from '../../config/'
const index = ({ content }) => {
    
    return (
        <>
            <p className="heading-L c-white">Movies</p>
            <ContentList content={content}></ContentList>
        </>
    )
}

export default index

export const getServerSideProps = async () => {
    const res = await fetch(`${server}/api/content`)
    const content = await res.json()

    return {
        props: {
            content
        }
    }
}