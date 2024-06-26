import React from 'react'
import Image from 'next/dist/client/image';
import styles from '../styles/CollectionItem.module.css';
import { shimmer, toBase64 } from '../utilities';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { updateUserBookmarks } from "../utilities/firebase";

const CollectionItem = ({ contentItem, type, tall, handleClick, userData }) => {
  const bookmarkField = `bookmarked_${contentItem.category.toLowerCase()}`;
  const imageResolution = "w500";
  const [localBookmarked, setLocalBookmarked] = useState(false);

  useEffect(() => {
    if (userData) {
      setLocalBookmarked(userData[bookmarkField].includes(contentItem.id));
    }
  }, [userData, contentItem])

  const toggleRemoteBookmarked = async () => {
    if (userData[bookmarkField].includes(contentItem.id)) {
      await updateUserBookmarks(userData.uid, bookmarkField, contentItem.id, 'remove');
    } else {
      await updateUserBookmarks(userData.uid, bookmarkField, contentItem.id, 'add');
    }
  }

  return (
    <>
      <div onClick={(e) =>
        (!e.target.classList.contains(`${styles.bookmark}`) && e.target.tagName !== "path" && e.target.tagName !== "svg") && handleClick(contentItem)
      } className={type === "wide" ? `${styles.wideItem}` : type === "normal" ? `${styles.contentItem} ${tall ? styles.tall : ""}` : `${styles.contentItem} ${tall ? styles.tall : ""}`}>
        <div className={`${styles.contentThumbnail}`}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <Image layout="fill" objectFit="cover" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(240, 140))}`} src={`https://image.tmdb.org/t/p/${imageResolution}/${contentItem.image}`} style={{ filter: "brightness(70%)" }}></Image>
          {userData && <div className={`${styles.bookmark}`} onClick={() => { setLocalBookmarked(!localBookmarked); toggleRemoteBookmarked() }}>{localBookmarked ? <BsBookmarkFill></BsBookmarkFill> : <BsBookmark></BsBookmark>}</div>}
        </div>
        <div className={`${styles.contentInfo}`}>
          <p>{contentItem.year}  {contentItem.category.toLowerCase() !== "person" && <span>&#8226;</span>} <img style={{ display: "inline-block", transform: "translateY(1px)" }} src={`/assets/icon-category-${contentItem.category.toLowerCase() === "movie" ? "movie" : contentItem.category.toLowerCase() === "tv" ? "tv" : "person"}.svg`} alt={contentItem.category}/*"category symbol"*/></img> {contentItem.category === "movie" ? "Movie" : contentItem.category === "tv" ? "TV Series" : contentItem.category === "person" ? "Person" : null} {contentItem.category !== "person" && <span>&#8226; {contentItem.rating}/10</span>} </p>
          <p>{contentItem.title}</p>
        </div>
      </div>
    </>
  )
}

export default CollectionItem