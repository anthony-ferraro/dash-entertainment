import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = ({ router }) => {
    return (
        <div className={`${styles.footer}`}>
            <p>Powered By</p>
            <div>
                <div className={`${styles.logoWrapper}`}>
                    <Image onClick={() => router.push("https://www.justwatch.com/")} src="/assets/JustWatch-logo.png" layout="fill" objectFit="contain"></Image>
                </div>
                
                <div className={`${styles.logoWrapper}`}>
                    <Image onClick={() => router.push("https://www.themoviedb.org/")}src="/assets/TMDB-logo.svg" layout="fill" objectFit="contain"></Image>
                </div>
            </div>
        </div>
    )
}

export default Footer