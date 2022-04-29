import React from 'react'
import styles from '../styles/Paginator.module.css';
const Paginator = ({ numPages, router }) => {
    const handlePageChange = (direction) => {
        switch (direction) {
            case "previous":
                router.query.page > 1 && router.push({
                    ...router,
                    query: {
                        ...router.query,
                        page: "" + (parseInt(router.query.page) - 1),
                    }
                })
                break
            case "next":
                router.query.page < numPages && router.push({
                    ...router,
                    query: {
                        ...router.query,
                        page: "" + (parseInt(router.query.page) + 1),
                    }
                })
                break
            default:
                break
        }
    }
    return (
        <>
            <div className={`${styles.paginator}`}>
                <a onClick={() => handlePageChange("previous")}>{"< Prev"}</a>
                <p>{`Page ${router.query.page} of ${numPages}`}</p>
                <a onClick={() => handlePageChange("next")}>{"Next >"}</a>
            </div>
        </>
    )
}

export default Paginator