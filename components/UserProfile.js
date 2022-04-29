import CustomCollection from './CustomCollection';
import { getURL, parse } from '../utilities';
import { useState, useEffect } from 'react';
const UserProfile = ({ router, app, userData, signOut }) => {

    const urls = [
        ...userData.bookmarked_movie.map(movie => getURL(`movie/${movie}`)),
        ...userData.bookmarked_tv.map(tv => getURL(`tv/${tv}`)),
        ...userData.bookmarked_person.map(person => getURL(`person/${person}`)),
    ];

    const [loading, setLoading] = useState(true)
    const [contentList, setContentList] = useState(null);

    const update = async () => {
        function fetcher(...urls) {
            const f = (u) => fetch(u).then((r) => r.json());

            if (urls.length > 1) {
                return Promise.all(urls.map(f));
            }
            return f(urls);
        }
        if (urls.length >= 1) {
            const data = await fetcher(...urls);
            setContentList(parse(data));
            setLoading(false);
        }

    }
    useEffect(() => {
        if (userData) {
            update();
        }
    }, [userData])

    return (
        <>
            <h1 className="c-white"> Hello, {userData.displayName}</h1>
            <p className="c-white">movie {JSON.stringify(userData.bookmarked_movie)}</p>
            <p className="c-white">tv {JSON.stringify(userData.bookmarked_tv)}</p>
            <p className="c-white">person {JSON.stringify(userData.bookmarked_person)}</p>
            <button className="button" onClick={() => signOut()}>Sign Out</button>
            {loading ? null : urls.length >= 1 && <CustomCollection type="normal" contentList={contentList} label="Your Favorites" router={router} pagination={false} morePath="" app={app} userData={userData} ></CustomCollection>}

        </>
    )
}

export default UserProfile