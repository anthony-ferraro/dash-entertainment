import React from 'react'
import CollectionItem from './CollectionItem'
import Paginator from './Paginator'

const CustomCollection = ({ type = "normal", contentList, label, router, pagination = false, morePath = "", app, userData }) => {
    const handleClick = (contentItem) => {
        router.push(`/details/${contentItem.category.toLowerCase()}/${contentItem.id}`)
    }
    return (
        <>
            {/* <p className="c-white">{JSON.stringify(contentList)}</p> */}
            <div className="labels">
                <p className="heading-L c-white">{label}</p>
                {morePath !== "" && <p onClick={() => router.push(morePath)} className="body-M c-greyblue">VIEW MORE</p>}
            </div>

            <div className={type === "wide" ? "wide-list" : type === "normal" ? "content-list" : "content-list"}>
                {contentList.map((contentItem, index) =>
                    <CollectionItem key={index} contentItem={contentItem} type={type} handleClick={handleClick} app={app} userData={userData}></CollectionItem>
                )}
            </div>
            {pagination && <Paginator numPages={data.total_pages} router={router}></Paginator>}
        </>
    )
}

export default CustomCollection