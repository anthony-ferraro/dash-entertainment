import React from 'react'

const index = ({ content }) => {
    return (
        <>
            <p className="heading-L c-white">TV Series</p>
            <div className="content-list">
                {content.filter((contentItem) => contentItem.category==="TV Series").map((contentItem, index) =>
                    <div className="content-item">
                        <div key={index} className="content-thumbnail" style={{ backgroundImage: `url(../${contentItem.thumbnail.regular.large})`, backgroundSize: 'cover', }}>
                        </div>
                        <div key={index} className="content-info">
                            <p>{contentItem.year}  <span>&#8226;</span>   <img src={`../assets/icon-category-${contentItem.category === "Movie" ? "movie" : "tv"}.svg`} alt="category symbol"></img> {contentItem.category} <span>&#8226;</span>  {contentItem.rating}</p>
                            <p>{contentItem.title}</p>
                        </div>
                    </div>
                )}
            </div>
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