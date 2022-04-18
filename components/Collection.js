import React from 'react'
import useSWR from 'swr'
import { fetcher, getURL, parse } from '../utilities'
import CollectionItem from './CollectionItem'
import Loading from './Loading'
const Collection = ({ type = "normal", displayCount, path, optional="", label, router}) => {
    const { data, error } = useSWR(getURL(path, optional), fetcher)
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
        const contentList = (displayCount===undefined || (displayCount!==undefined && displayCount>parse(data).length)) ? parse(data) : parse(data).slice(0, displayCount);
        return (
            <>  
                {/* <p className="c-white">{JSON.stringify(data)}</p> */}
                <p className="heading-L c-white">{label}</p>
                <div className={type === "wide" ? "wide-list" : type === "normal" ? "content-list" : "content-list"}>
                    {contentList.map((contentItem, index) =>
                        <CollectionItem key={index} contentItem={contentItem} type={type} handleClick={handleClick}></CollectionItem>
                    )}
                </div>
            </>
        )
    }
}

export default Collection