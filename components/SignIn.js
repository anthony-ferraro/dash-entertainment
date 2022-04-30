import React from "react"
import Image from "next/image";
import styles from "../styles/SignIn.module.css";
import { useState } from "react"
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithTwitter, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


const SignIn = ({ auth }) => {
    const [flow, setFlow] = useState("choose-login")
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithTwitter] = useSignInWithTwitter(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateAccount = () => {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            })
    }

    const handleSignIn = () => {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            })
    }
    return (
        <>
            <div className={styles.signinWrapper}>
                <div className={styles.signin}>
                    {(() => {
                        switch (flow) {
                            case "choose-login":
                                return (
                                    <>
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <p className="heading-L c-white" style={{ marginBottom: "10px" }}>Sign In</p>
                                            </div>
                                            <p className="body-M c-fadedgrey">Sign in to save your favorite Movies and TV Series!</p>
                                        </div>
                                        <button className={`${styles.signinButton} ${styles.google}`} onClick={() => signInWithGoogle()}><div className={`${styles.logoWrapper}`}><Image src="/assets/google-logo.png" layout="fill" object-fit="contain"></Image></div>Sign in with Google</button>
                                        <button className={`${styles.signinButton} ${styles.twitter}`} onClick={() => signInWithTwitter()}><div className={`${styles.logoWrapper}`}><FaTwitter size="20"></FaTwitter></div>Sign in with Twitter</button>
                                        <button className={`${styles.signinButton} ${styles.email}`} onClick={() => setFlow("signin-with-email")}><div className={`${styles.logoWrapper}`}><IoIosMail size="20"></IoIosMail></div>Sign in with Email</button>
                                    </>
                                )
                            case "signin-with-email":
                                return (
                                    <>
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <p className="heading-L c-white" style={{ marginBottom: "10px" }}>Sign In</p>
                                                <button onClick={() => setFlow("choose-login")} className="button back-button" style={{ marginBottom: "0px" }}>Go Back</button>
                                            </div>
                                        </div>
                                        <input type="text" className="input" placeholder="Email Address"></input>
                                        <input type="text" className="input" placeholder="Password"></input>
                                        <button className="button back-button" onClick={() => handleSignIn()} style={{ width: "100%" }}>Sign in to your account</button>
                                        <p className={`${styles.switchFlow}`}>{"Dont have an account?"}<span className="body-M c-red" onClick={() => setFlow("signup-with-email")}>Sign up</span></p>
                                    </>
                                )

                            case "signup-with-email":
                                return (
                                    <>
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <p className="heading-L c-white" style={{ marginBottom: "10px" }}>Sign Up</p>
                                                <button onClick={() => setFlow("choose-login")} className="button back-button" style={{ marginBottom: "0px" }}>Go Back</button>
                                            </div>
                                        </div>
                                        <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
                                        <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                                        <button className="button back-button" onClick={() => handleCreateAccount()} style={{ width: "100%" }}>Create an account</button>
                                        <p className={`${styles.switchFlow}`}>Already have an account? <span className="body-M c-red" onClick={() => setFlow("signin-with-email")}>Sign in</span></p>
                                    </>
                                )
                        }
                    })()}
                </div>
            </div>
        </>
    )
}

export default SignIn