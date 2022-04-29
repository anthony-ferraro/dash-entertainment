import React from 'react'
import Image from 'next/image';
import styles from '../styles/MediaDetails.module.css'
import { getIMG, parseContentItem, parseProviderData } from '../utilities';
const MediaDetails = ({ contentData, router, setTitle }) => {

  // const contentItem = parse(contentData[0]);
  const contentItem = parseContentItem(contentData[0]);
  const videoKey = contentData[1] !== undefined && "results" in contentData[1] && contentData[1].results[0] !== undefined && "key" in contentData[1].results[0] ? contentData[1].results[0].key : null;
  const providerData = parseProviderData(contentData[2]);
  const creditsData = contentData[3];
  const categories = Object.keys(providerData).filter(category => providerData[category].length !== 0)
  setTitle(`${contentItem.title} (${contentItem.year})`);
  return (
    <div className={`${styles.details}`}>
      <button className={`button back-button`} onClick={() => router.back()}>Go Back</button>
      <div>
        <div className={`${styles.posterWrapper}`}>
          <Image src={getIMG(contentItem.poster, "w500")} layout="fill" objectFit="contain"></Image>
        </div>
        <div className={`${styles.detailsStats}`}>
          <p className="heading-XL c-white">{contentItem.title}</p>
          <p className="heading-M c-fadedgrey">{contentItem.tagline}</p>
          <br></br>
          <p className="heading-L c-white">{contentItem.rating / 2}/5</p>
          <br></br>
          <div>
            <div><p className="c-fadedgrey heading-XS">{contentItem.category === "movie" ? "Length" : "Seasons"}</p><p className="c-white heading-XS">{contentItem.category === "movie" ? contentItem.runtime : contentItem.seasons}{contentItem.category==="movie" && " min."}</p></div>
            <div><p className="c-fadedgrey heading-XS">Language</p><p className="c-white heading-XS">{contentItem.language}</p></div>
            <div><p className="c-fadedgrey heading-XS">Year</p><p className="c-white heading-XS">{contentItem.year}</p></div>
            <div><p className="c-fadedgrey heading-XS">Status</p><p className="c-white heading-XS">{contentItem.status}</p></div>

          </div>
          <p className="heading-XS c-white">Synopsis</p>
          <p className="body-M c-white">{contentItem.synopsis}</p>
          <br></br>
          <p className="heading-XS c-white">Top Cast</p>
          <ul>
            {creditsData.cast.slice(0, 15).map((castMember, index) => <li key={index} onClick={() => router.push(`/details/person/${castMember.id}`)} className={`${styles.castMember}`}>{castMember.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        {!!videoKey ? <iframe className={styles.iframe} src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :
          <div>
            <p className="heading-XL c-white">No Video Available</p>
          </div>}
        <div className={`${styles.providersDisplay}`}>
          <p>{categories.length > 1 ? `${contentItem.title} is available to ${categories.slice(0, -1).map(category => category==="ads" ? "watch with ads" : category==="free" ? "watch for free" : category).join(', ') + ' and ' + categories.slice(-1)}!` : categories.length > 0 ? `${contentItem.title} is avaliable to ${categories[0]}!` : `We don't know where ${contentItem.title} is available to watch.`}</p>
          <ul>
            {!!categories && categories.map((category, index) =>
              <>
                <li key={index} className={`${styles.providerCategory}`}>{category}:</li>
                <li key={index}>
                  <ul className={`${styles.providerList}`}>
                    {providerData[category].map((provider, index) =>
                      <li key={index} className={`${styles.provider}`}>
                        <Image width="50px" height="50px" style={{ borderRadius: "10px" }} src={getIMG(provider.logo)}></Image>
                        <p>{provider.name}</p>
                      </li>
                    )}
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MediaDetails