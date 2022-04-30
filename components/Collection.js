import React from 'react'
import useSWR from 'swr'
import styles from '../styles/Collection.module.css';
import { getURL, parse } from '../utilities'
import CollectionItem from './CollectionItem'
import Paginator from './Paginator'
import Loading from './Loading'


const Collection = ({ type = "normal", displayCount, path, optional = "", label, router, morePath = "", pagination = false, app, userData }) => {
    function fetcher(...urls) {
        const f = (u) => fetch(u).then((r) => r.json());

        if (urls.length > 1) {
            return Promise.all(urls.map(f));
        }
        return f(urls);
    }

    const paths = Array.isArray(path) ? path.map(path => getURL(path)) : getURL(path, optional);

    const { data, error } = useSWR(paths, fetcher)
    const handleClick = (contentItem) => {
        router.push(`/details/${contentItem.category.toLowerCase()}/${contentItem.id}`)
    }

    if (error) {
        return (
            <div>
                {getURL(path)}
                {label}
                Failed to load content
            </div>
        )
    } else if (!data) {
        return (
            <Loading></Loading>
        )
    } else {
        const contentList = (displayCount === undefined || (displayCount !== undefined && displayCount > parse(data).length)) ? parse(data) : parse(data).slice(0, displayCount);
        return (
            <>
                <div className={`${styles.labels}`}>
                    <p className="heading-L c-white">{label}</p>
                    {morePath !== "" && <p onClick={() => router.push(morePath)}>VIEW MORE</p>}
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
}

export default Collection