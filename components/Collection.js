import React from 'react';
import useSWR from 'swr';
import styles from '../styles/Collection.module.css';
import { getURL, parse, fetcher } from '../utilities';
import CollectionItem from './CollectionItem';
import Paginator from './Paginator';
import Loading from './Loading';

const Collection = ({ type = "normal", displayCount, path, tall = false, optional = "", label, router, morePath = "", pagination = false, app, userData }) => {
    const fetchMultiple = (...urls) => {
        return urls.length > 1 ? Promise.all(urls.map(fetcher)) : fetcher(urls[0]);
    };

    const paths = Array.isArray(path) ? path.map((p) => getURL(p)) : getURL(path, optional);
    const { data, error } = useSWR(paths, fetchMultiple);

    const handleClick = (contentItem) => {
        router.push(`/details/${contentItem.category.toLowerCase()}/${contentItem.id}`);
    };

    if (error) {
        return (
            <div>
                {getURL(path)}
                {label}
                Failed to load content
            </div>
        );
    }

    if (!data) {
        return <Loading />;
    }

    const contentList = (displayCount === undefined || displayCount > parse(data).length) ? parse(data) : parse(data).slice(0, displayCount);

    return (
        <>
            <div className={styles.labels}>
                <p className="heading-L c-white">{label}</p>
                {morePath && <p onClick={() => router.push(morePath)}>VIEW MORE&nbsp;</p>}
            </div>

            <div className={type === "wide" ? styles.wideList : styles.contentList}>
                {contentList.map((contentItem, index) => (
                    <CollectionItem
                        key={index}
                        tall={tall}
                        contentItem={contentItem}
                        type={type}
                        handleClick={handleClick}
                        app={app}
                        userData={userData}
                    />
                ))}
                {contentList.map((_, index) => (
                    <div key={index} className={styles.spacer}></div>
                ))}
            </div>
            {pagination && <Paginator numPages={data.total_pages} router={router} />}
        </>
    );
};

export default Collection;
