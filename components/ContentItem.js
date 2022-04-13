import React from 'react'

const ContentItem = ({ contentItem }) => {
    return (
        <>
            <div className="content-item">
                <div className="content-thumbnail"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/${contentItem.thumbnail.regular.large})`,
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className="content-info">
                    <p>{contentItem.year}  <span>&#8226;</span>   <img src={`/assets/icon-category-${contentItem.category === "Movie" ? "movie" : "tv"}.svg`} alt="category symbol"></img> {contentItem.category} <span>&#8226;</span>  {contentItem.rating}</p>
                    <p>{contentItem.title}</p>
                </div>
            </div>
        </>
    )
}

export default ContentItem