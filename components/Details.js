import React from 'react'
import Image from 'next/image';
import { getIMG, parseContentItem, parseProviderData } from '../utilities';
const Details = ({ contentData, router }) => {

  // const contentItem = parse(contentData[0]);
  const contentItem = parseContentItem(contentData[0]);
  const videoKey = "key" in contentData[1].results[0] ? contentData[1].results[0].key : null;
  const providerData = parseProviderData(contentData[2]);
  const categories = Object.keys(providerData).filter(category => providerData[category].length !== 0)

  return (
    <div className="details">
      <button className="button back-button" onClick={() => router.back()}>Go Back</button>
      <div>
        {/* <p className="c-white">{JSON.stringify(contentItem)}</p> */}
        <div className="poster-wrapper">
          <Image src={getIMG(contentItem.poster)} layout="fill" objectFit="contain"></Image>
        </div>
        <div className="details-stats">
          <p className="heading-L c-white">{contentItem.title}</p>
          <p className="heading-M c-fadedgrey">{contentItem.tagline}</p>
          <br></br>
          <p className="heading-M c-white">Rating: <span className="body-L c-fadedgrey">{contentItem.rating}/10</span></p>
          <br></br>
          <p className="heading-M c-white">Runtime: <span className="body-L c-fadedgrey">{contentItem.runtime} minutes</span></p>
          <br></br>
          <p className="heading-M c-white">Released: <span className="body-L c-fadedgrey">{contentItem.year}</span></p>
          <br></br>
          <p className="heading-M c-white">Synopsis:</p>
          <p className="body-L c-fadedgrey">{contentItem.synopsis}</p>
          <br></br>
        </div>
      </div>
      <div>
        {!!videoKey && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
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