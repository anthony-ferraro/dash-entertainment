import React from 'react'
import Image from 'next/image'
import { getIMG } from '../utilities';
import Collection from '../components/Collection'
import styles from '../styles/PersonDetails.module.css';
import { shimmer, toBase64 } from '../utilities';

const PersonDetails = ({ personData, router, path, personID, setTitle }) => {
    const personDetails = personData[0];
    const knownFor = personData[1];
    setTitle(`${personDetails.name}`);
    return (
        <>
            <div className={`${styles.details}`}>
                <button className="button back-button" onClick={() => router.back()}>Go Back</button>
                <div>
                    <div className={`${styles.posterWrapper}`}>
                        <Image placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(240, 140))}`} src={getIMG(personDetails.profile_path, "w500")} layout="fill" objectFit="contain"></Image>
                    </div>
                    <div className={`${styles.detailsStats}`}>
                        <p className="heading-XL c-white">{personDetails.name}</p>
                        <p className="body-M c-white">{personDetails.biography}</p>
                    </div>
                </div>
                <div className={`${styles.knownFor}`}>
                    <Collection label="Best Known For" type="normal" path={`person/${personID}/combined_credits`} router={router}></Collection>
                </div>
            </div>

        </>
    )
}

export default PersonDetails