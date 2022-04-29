import React from 'react'
import ChooseProvider from '../../components/ChooseProvider'
import UserProfile from '../../components/UserProfile'
import { getAuth, signOut } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { collection, getDoc, doc, setDoc } from 'firebase/firestore';

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
                <p className="c-white">Loading...</p>
            </>
        )
    } else {
        return (
            <>
                <ChooseProvider auth={auth}></ChooseProvider>
            </>
        )
    }
}

export default Profile