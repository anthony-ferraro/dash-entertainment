import React from 'react'
import Image from 'next/dist/client/image';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
const CollectionItem = ({ contentItem, type, handleClick, app, userData }) => {
  const bookmarkField = `bookmarked_${contentItem.category.toLowerCase()}`;
  const imageResolution = "w500";
  const [localBookmarked, setLocalBookmarked] = useState(false);
  const db = getFirestore(app);

  useEffect(() => {
    if(userData) {
      setLocalBookmarked(userData[bookmarkField].includes(contentItem.id));
    }
  },[userData])

  const toggleRemoteBookmarked = () => {
    const userRef = doc(db, "users", userData.uid);
    if(userData[bookmarkField].includes(contentItem.id)) {
      updateDoc(userRef, {
        [bookmarkField]: arrayRemove(contentItem.id)
      })
    } else {
      updateDoc(userRef, {
        [bookmarkField]: arrayUnion(contentItem.id)
      })
    }
  }

  return (
    <>
      <div onClick={(e) =>
        (!e.target.classList.contains('bookmark') && e.target.tagName !== "path" && e.target.tagName !== "svg") && handleClick(contentItem)
      } className={type === "wide" ? "wide-item" : type === "normal" ? "content-item" : "content-item"}>
        <div className="content-thumbnail"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <Image layout="fill" objectFit="cover" src={`https://image.tmdb.org/t/p/${imageResolution}/${contentItem.image}`} style={{ filter: "brightness(70%)" }}></Image>
          {userData && <div className="bookmark" onClick={() => {setLocalBookmarked(!localBookmarked); toggleRemoteBookmarked()}}>{localBookmarked ? <BsBookmarkFill></BsBookmarkFill> : <BsBookmark></BsBookmark>}</div>}
        </div>
        <div className="content-info">
          <p>{contentItem.year}  {contentItem.category.toLowerCase() !== "person" && <span>&#8226;</span>} <img style={{ display: "inline-block", transform: "translateY(3px)" }} src={`/assets/icon-category-${contentItem.category.toLowerCase() === "movie" ? "movie" : contentItem.category.toLowerCase() === "tv" ? "tv" : "person"}.svg`} alt={contentItem.category}/*"category symbol"*/></img> {contentItem.category === "movie" ? "Movie" : contentItem.category === "tv" ? "TV Series" : contentItem.category === "person" ? "Person" : null} {contentItem.category !== "person" && <span>&#8226; {contentItem.rating}/10</span>} </p>
          <p>{contentItem.title}</p>
        </div>
      </div>
    </>
  )
}

export default CollectionItem