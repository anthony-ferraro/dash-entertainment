import React from 'react'
import ContentList from '../../components/ContentList'
const index = ({ content }) => {
    return (
        <>
            <p className="heading-L c-white">TV Series</p>
            <ContentList content={content}></ContentList>
        </>
    )
}

export default index

export const getServerSideProps = async () => {
    const res = await fetch(`http://localhost:3000/api/content`)
    const content = await res.json()

    return {
        props: {
            content
        }
    }
}