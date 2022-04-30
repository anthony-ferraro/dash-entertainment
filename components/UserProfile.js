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
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1 className="c-white"> Welcome, {userData.displayName}!</h1>
                <button className="button back-button" onClick={() => signOut()}>Sign Out</button>
            </div>
            <p className="body-L c-greyblue" style={{paddingBottom: "10px"}}>You have been a member since {new Date(parseInt(userData.createdAt)).toLocaleDateString('en-us')}</p>
            {loading ? null : urls.length >= 1 && <CustomCollection type="normal" contentList={contentList} label="Your Favorites" router={router} pagination={false} morePath="" app={app} userData={userData} ></CustomCollection>}
            {(() => {
                if(!urls || urls.length==0) {
                    return <h1 className="c-greyblue" style={{marginTop: "10px", marginBottom: "10px"}}>You haven't favorited anything yet</h1>
                }
            })()}
        </>
    )
}

export default UserProfile