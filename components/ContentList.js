import React from 'react'
import ContentItem from './ContentItem'
const ContentList = ({ content }) => {
    return (
        <div className="content-list">
            {content.map((contentItem, index) =>
                <ContentItem key={index} contentItem={contentItem}></ContentItem>
            )}
        </div>
    )
}

export default ContentList