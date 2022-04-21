import React from 'react'
import Image from 'next/image'
import { getIMG } from '../utilities';
const PersonDetails = ({ personData, router }) => {
    const personDetails = personData[0];
    const knownFor = personData[1];
    return (
        <>
            <div className="details">
                <button className="button back-button" onClick={() => router.back()}>Go Back</button>
                <div>
                    <div className="poster-wrapper">
                        <Image src={getIMG(personDetails.profile_path, "w500")} layout="fill" objectFit="contain"></Image>
                    </div>
                    <div className="details-stats">
                        <p className="heading-XL c-white">{personDetails.name}</p>
                        <p className="body-M c-white">{personDetails.biography}</p>
                        {/* <div className="c-white">{JSON.stringify(knownFor.cast)}</div> */}
                        <div className="known-for">
                            <p className="heading-S c-white">Best Known For</p>
                            <ul>
                                {knownFor.cast.slice(0, 5).map(knownForItem => <li onClick={() => router.push(`/details/${knownForItem.media_type}/${knownForItem.id}`)}className="cast-member">{knownForItem.title}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default PersonDetails