import React from 'react'
import Image from 'next/dist/client/image';
const CollectionItem = ({ contentItem, type, handleClick }) => {
  const imageResolution = "w500";
  return (
    <>
      <div onClick={() => handleClick(contentItem)} className={type === "wide" ? "wide-item" : type === "normal" ? "content-item" : "content-item"}>
        <div className="content-thumbnail"
          style={{
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/w500/${contentItem.backdrop})`,
            // backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <Image layout="fill" objectFit="cover" src={`https://image.tmdb.org/t/p/${imageResolution}/${contentItem.image}`}></Image>

        </div>
        <div className="content-info">
          <p>{contentItem.year}  {contentItem.category.toLowerCase()!=="person" && <span>&#8226;</span>} <img style={{display: "inline-block", transform: "translateY(3px)"}}src={`/assets/icon-category-${contentItem.category.toLowerCase() === "movie" ? "movie" : contentItem.category.toLowerCase() === "tv" ? "tv" : "person"}.svg`} alt={contentItem.category}/*"category symbol"*/></img> {contentItem.category === "movie" ? "Movie" : contentItem.category === "tv" ? "TV Series" : contentItem.category === "person" ? "Person" : null} {contentItem.category!=="person" && <span>&#8226; {contentItem.rating}/10</span>} </p>
          <p>{contentItem.title}</p>
        </div>
      </div>
    </>
  )
}

export default CollectionItem