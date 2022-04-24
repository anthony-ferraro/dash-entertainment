import React from 'react'
import useSWR from 'swr'
import { fetcher, getURL, parse } from '../utilities'
import Loading from './Loading'
const GenreList = ({ path, router }) => {
    const { data, error } = useSWR(getURL(path), fetcher)
    if (error) {
        return (
            <div>
                Failed to load content from {getURL(path)}
            </div>
        )
    } else if (!data) {
        return (
            <Loading></Loading>
        )
    } else {
        return (
            <>
                <div className="genre-list">
                    {data.genres.map((genre, index) => <div key={index} onClick={() => router.push(`${router.asPath}/genre/${genre.id}?name=${genre.name}&page=1`)} className="genre-item">{genre.name}</div>)}
                </div>
            </>
        )
    }

}

export default GenreList