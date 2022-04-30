import React from 'react'
import SignIn from '../../components/SignIn'
import UserProfile from '../../components/UserProfile'
import { getAuth, signOut } from 'firebase/auth';

const Profile = ({ router, app, userData, userDataLoading }) => {
    const auth = getAuth(app);

    if (userData) {
        return (
            <>
                <UserProfile router={router} userData={userData} signOut={() => signOut(auth)}></UserProfile>
            </>
        )
    } else if (userDataLoading) {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <SignIn auth={auth}></SignIn>
            </>
        )
    }
}

export default Profile