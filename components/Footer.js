import Image from 'next/image'
import React from 'react'

const Footer = ({ router }) => {
    return (
        <div className="footer">
            <p>Powered By</p>
            <div>
                <div className="logo-wrapper">
                    <Image onClick={() => router.push("https://www.justwatch.com/")} src="/assets/JustWatch-logo.png" layout="fill" objectFit="contain"></Image>
                </div>
                
                <div className="logo-wrapper">
                    <Image onClick={() => router.push("https://www.themoviedb.org/")}src="/assets/TMDB-logo.svg" layout="fill" objectFit="contain"></Image>
                </div>
            </div>
        </div>
    )
}

export default Footer