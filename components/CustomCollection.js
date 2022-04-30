import React from 'react'
import CollectionItem from './CollectionItem'
import Paginator from './Paginator'
import styles from '../styles/Collection.module.css';

const CustomCollection = ({ type = "normal", contentList, label, router, pagination = false, morePath = "", app, userData }) => {
    const handleClick = (contentItem) => {
        router.push(`/details/${contentItem.category.toLowerCase()}/${contentItem.id}`)
    }
    return (
        <>
            <div className={`${styles.labels}`}>
                <p className="heading-L c-white">{label}</p>
                {morePath !== "" && <p onClick={() => router.push(morePath)} className="body-M c-greyblue">VIEW MORE</p>}
            </div>

            <div className={type === "wide" ? `${styles.wideList}` : type === "normal" ? `${styles.contentList}` : `${styles.contentList}`}>
                {contentList.map((contentItem, index) =>
                    <CollectionItem key={index} contentItem={contentItem} type={type} handleClick={handleClick} app={app} userData={userData}></CollectionItem>
                )}
                {contentList.map((contentItem, index) => <div key={index} className={styles.spacer}></div>)}
            </div>
            {pagination && <Paginator numPages={data.total_pages} router={router}></Paginator>}
        </>
    )
}

export default CustomCollection