import React from 'react'
import { addBookmark, removeBookmark } from '../utilities/firebase'
const UserProfile = ({ db, user, signOut }) => {
    return (
        <>
            <h1 className="c-white"> Hello, {user.displayName}</h1>
            <p className="c-white">{JSON.stringify(user)}</p>
            <button className="button" onClick={() => signOut()}>Sign Out</button>
        </>
    )
}

export default UserProfile