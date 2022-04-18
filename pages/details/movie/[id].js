import React from 'react'
import useSWR from 'swr'
import { getURL } from '../../../utilities';
import Details from '../../../components/Details';
import Loading from '../../../components/Loading';
const _id_ = ({ router }) => {
  const { id } = router.query;
  function fetcher(...urls) {
    const f = (u) => fetch(u).then((r) => r.json());

    if (urls.length > 1) {
      return Promise.all(urls.map(f));
    }
    return f(urls);
  }
  const paths = [`movie/${id}`, `movie/${id}/videos`, `movie/${id}/watch/providers`].map(path => getURL(path));
  const { data, error } = useSWR(paths, fetcher)

  if (error) {
    return (
      <div>
        {getURL(path)}
        Failed to load content
      </div>
    )
  } else if (!data) {
    return (
      <Loading></Loading>
    )
  } else {
    const contentItem = data[0];
    const videoKey = data[1].results[0].key;
    const providerCategories = "US" in data[2].results ? Object.keys(data[2].results.US).slice(1) : null;
    const providerCategoryString = !!providerCategories ? (providerCategories.length > 1 ? `${contentItem.title} is available for ${providerCategories.slice(0, -1).join(", ")} and ${providerCategories.slice(-1)}` : `${contentItem.title} is available for ${providerCategories[0]}`) : `${contentItem.title} is not available`;

    return (

      <>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <p className="c-white">{JSON.stringify()}</p> */}
        {/* <p className="c-white">{providerString}</p> */}
        
        {/* list of provider categories (rent, buy, flatrate)*/}
        {/* <ul>
          {!!providerCategories && providerCategories.map(providerCategory =>
            <>
              <li className="c-red">{providerCategory}</li>
              <li>
                <ul>
                  {data[2].results.US[providerCategory].map(provider => <li className="c-white">{provider.provider_name}</li>)}
                </ul>
              </li>
            </>
          )}
        </ul> */}
      </>
    )
  }
}

export default _id_