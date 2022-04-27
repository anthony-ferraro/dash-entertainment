import React from 'react'
import Image from 'next/image';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { useAuthState, useSignInWithGoogle, useSignInWithFacebook, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const ChooseProvider = ({ auth, db }) => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithTwitter] = useSignInWithTwitter(auth);

    return (
        <>
            <div className="signin-wrapper">
                <div className="logo">
                    <Image src="/assets/dash-logo.png" layout="fill" object-fit="contain"></Image>
                </div>
                <div className="signin">
                    <p className="heading-L c-white">Sign In</p>
                    <p className="body-M c-fadedgrey">Sign in to save your favorite Movies and TV Series!</p>
                    <button className="signin-button google" onClick={() => signInWithGoogle()}><div className="logo-wrapper"><Image src="/assets/google-logo.png" layout="fill" object-fit="contain"></Image></div> Sign in with Google</button>
                    <button className="signin-button facebook" onClick={() => signInWithFacebook()}><div className="logo-wrapper"><FaFacebookSquare size="20"></FaFacebookSquare></div>Sign in with Facebook</button>
                    <button className="signin-button twitter" onClick={() => signInWithTwitter()}><div className="logo-wrapper"><FaTwitter size="20"></FaTwitter></div>Sign in with Twitter</button>
                    <button className="signin-button email"><div className="logo-wrapper"><IoIosMail size="20"></IoIosMail></div>Sign in with Apple</button>
                </div>
            </div>
        </>
    )
}

export default ChooseProvider