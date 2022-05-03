import React from 'react'
import styles from '../styles/Hero.module.css';
import Image from 'next/image'
const Hero = ({ router }) => {
    return (
        <div className={styles.hero}>
            <div className={styles.title}>
                <div style={{ position: "relative", verticalAlign: "middle", width: "25px", height: "25px", flexShrink: "0", display: "inline-block", whiteSpace: "nowrap" }}>
                    <Image src="/assets/dash-logo.png" layout="fill" object-fit="contain"></Image>
                </div>
                <h3>&nbsp;Dash Entertainment</h3>
            </div>
            <h4 className={styles.slogan}>Hollywood, at your fingertips.</h4>
            <p className="body-L c-greyblue">
                At Dash, we believe that everyone deserves instant access to information about the latest Movies, TV Shows, and rising stars. We are committed to providing the best entertainment experience possible for our users.
                Create an account today!
            </p>
            <button className="button back-button" onClick={() => router.push("/favorites")}>Join Now</button>
        </div>
    )
}

export default Hero