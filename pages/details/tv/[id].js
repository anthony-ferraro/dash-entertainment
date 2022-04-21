import React from 'react'
import useSWR from 'swr'
import { getURL } from '../../../utilities';
import MediaDetails from '../../../components/MediaDetails';
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

  const paths = [`tv/${id}`, `tv/${id}/videos`, `tv/${id}/watch/providers`, `tv/${id}/credits`].map(path => getURL(path));
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
    return (
      <>
        <MediaDetails contentData={data} router={router}></MediaDetails>
      </>
    )
  }
}

export default _id_