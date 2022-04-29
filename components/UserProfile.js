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
        if(urls.length >= 1) {
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



    // //when data is 
    // const useLatestContent = () => {
    //     const get = async () => {

    //     }
    //     const update = async () => {

    //     }
    //     const [data, setData] = useState(null);
    //     const [loading, setLoading] = useState(true);

    //     return [data, loading, update]
    // }
    return (
        <>
            <h1 className="c-white"> Hello, {userData.displayName}</h1>
            <p className="c-white">{JSON.stringify(contentList)}</p>
            <button className="button" onClick={() => signOut()}>Sign Out</button>
            {loading ? <div>Loading...</div> : urls.length >= 1 && <CustomCollection type="normal" contentList={contentList} label="Your Favorites" router={router} pagination={false} morePath="" app={app} userData={userData} ></CustomCollection>}
            {/* {moviePaths.length > 0 && <Collection label="Your Favorite Movies" path={moviePaths} router={router} userData={userData}></Collection>}
            {tvPaths.length > 0 && <Collection label="Your Favorite TV Series" path={tvPaths} router={router} userData={userData}></Collection>}
            {personPaths.length > 0 && <Collection label="Your Favorite People" path={personPaths} router={router} userData={userData}></Collection>} */}

        </>
    )
}

export default UserProfile