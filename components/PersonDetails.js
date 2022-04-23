import React from 'react'
import Image from 'next/image'
import { getIMG } from '../utilities';
import Collection from '../components/Collection'
const PersonDetails = ({ personData, router, path, personID }) => {
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
                    </div>
                </div>
                <div className="known-for">
                    <Collection label="Best Known For" type="normal" path={`person/${personID}/combined_credits`} router={router}></Collection>
                </div>
            </div>

        </>
    )
}

export default PersonDetails