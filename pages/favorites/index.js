import React from 'react'
import SignIn from '../../components/SignIn'
import UserProfile from '../../components/UserProfile'
import { signOutUser } from '../../utilities/firebase';

const Profile = ({ router, userData, userDataLoading }) => {
    if (userData) {
        return <UserProfile router={router} userData={userData} signOut={signOutUser} />;
    }

    if (userDataLoading) {
        return null;
    }

    return <SignIn />;
};

export default Profile