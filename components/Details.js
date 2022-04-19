import React from 'react'
import Image from 'next/image';
import { getIMG, parseContentItem, parseProviderData } from '../utilities';
const Details = ({ contentData, router }) => {

  // const contentItem = parse(contentData[0]);
  const contentItem = parseContentItem(contentData[0]);
  const videoKey = contentData[1] !== undefined && "results" in contentData[1] && contentData[1].results[0] !== undefined && "key" in contentData[1].results[0] ? contentData[1].results[0].key : null;
  const providerData = parseProviderData(contentData[2]);
  const creditsData = contentData[3];
  const categories = Object.keys(providerData).filter(category => providerData[category].length !== 0)

  return (
    <div className="details">
      <button className="button back-button" onClick={() => router.back()}>Go Back</button>
      <div>
        {/* <p className="c-white">{JSON.stringify(contentItem)}</p> */}
        <div className="poster-wrapper">
          <Image src={getIMG(contentItem.poster, "w500")} layout="fill" objectFit="contain"></Image>
        </div>
        <div className="details-stats">
          <p className="heading-XL c-white">{contentItem.title}</p>
          <p className="heading-M c-fadedgrey">{contentItem.tagline}</p>
          <br></br>
          <p className="heading-L c-white">{contentItem.rating / 2}/5</p>
          <br></br>
          <div>
            <div><p className="c-fadedgrey heading-XS">{contentItem.category==="movie" ?"Length" : "Seasons"}</p><p className="c-white heading-XS">{contentItem.category==="movie" ? contentItem.runtime : contentItem.seasons}</p></div>
            <div><p className="c-fadedgrey heading-XS">Language</p><p className="c-white heading-XS">{contentItem.language}</p></div>
            <div><p className="c-fadedgrey heading-XS">Year</p><p className="c-white heading-XS">{contentItem.year}</p></div>
            <div><p className="c-fadedgrey heading-XS">Status</p><p className="c-white heading-XS">{contentItem.status}</p></div>

          </div>
          <p className="heading-XS c-white">Synopsis</p>
          <p className="body-M c-white">{contentItem.synopsis}</p>
          <br></br>
          <p className="heading-XS c-white">Top Cast</p>
          <ul>
            {creditsData.cast.slice(0,15).map(castMember => <li className="cast-member">{castMember.name}</li> )}
          </ul>
        </div>
      </div>
      <div>
        {!!videoKey ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :
          <div className="video-placeholder">
            <p className="heading-XL c-white">No Trailer Available</p>
          </div>}
        <div className="providers-display">
          <p>{categories.length > 1 ? `${contentItem.title} is available to ${categories.slice(0, -1).join(', ') + ' and ' + categories.slice(-1)}!` : categories.length > 0 ? `${contentItem.title} is avaliable to ${categories[0]}!` : `We don't know where ${contentItem.title} is available to watch.`}</p>
          <ul className="provider-categories-list">
            {!!categories && categories.map(category =>
              <>
                <li className="provider-category">{category}:</li>
                <li>
                  <ul className="provider-list">
                    {providerData[category].map(provider =>
                      <li className="provider">
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

export default Details