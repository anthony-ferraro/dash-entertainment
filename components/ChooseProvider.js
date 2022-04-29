import React from 'react'
import Image from 'next/image';
import styles from '../styles/ChooseProvider.module.css';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithTwitter, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const ChooseProvider = ({ auth }) => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithTwitter] = useSignInWithTwitter(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    return (
        <>
            <div className={styles.signinWrapper}>
                <div className={styles.signin}>
                    <p className="heading-L c-white">Sign In</p>
                    <p className="body-M c-fadedgrey">Sign in to save your favorite Movies and TV Series!</p>
                    <button className={`${styles.signinButton} ${styles.google}`} onClick={() => signInWithGoogle()}><div className={`${styles.logoWrapper}`}><Image src="/assets/google-logo.png" layout="fill" object-fit="contain"></Image></div> Sign in with Google</button>
                    <button className={`${styles.signinButton} ${styles.facebook}`} onClick={() => signInWithFacebook()}><div className={`${styles.logoWrapper}`}><FaFacebookSquare size="20"></FaFacebookSquare></div>Sign in with Facebook</button>
                    <button className={`${styles.signinButton} ${styles.twitter}`} onClick={() => signInWithTwitter()}><div className={`${styles.logoWrapper}`}><FaTwitter size="20"></FaTwitter></div>Sign in with Twitter</button>
                    <button className={`${styles.signinButton} ${styles.email}`} onClick={() => signInWithEmailAndPassword()}><div className={`${styles.logoWrapper}`}><IoIosMail size="20"></IoIosMail></div>Sign in with Email</button>
                </div>
            </div>
        </>
    )
}

export default ChooseProvider