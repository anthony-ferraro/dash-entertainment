import React from 'react'
import ChooseProvider from '../../components/ChooseProvider'
import UserProfile from '../../components/UserProfile'
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, getDoc, doc, setDoc } from 'firebase/firestore';

const profile = ({ app }) => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    if (user) {
        const checkCreateUser = async () => {
            //check if user exists in the database, if it does not exist then create it
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                //do nothing
                console.log("User already exists");
            } else {
                // create a new user in the database
                const newUser = {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    bookmarked_movie: [],
                    bookmarked_tv: [],
                    bookmarked_person: [],
                };
                await setDoc(docRef, newUser);
            }
        }
        checkCreateUser();

        return (
            <div>
                <UserProfile db={db} user={user} signOut={() => signOut(auth)}></UserProfile>
            </div>
        );
    } else {
        return (
            <>
                <ChooseProvider auth={auth} db={db}></ChooseProvider>
            </>
        )
    }

}

export default profile