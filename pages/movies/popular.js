import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from 'next/head';
const popular = ({ router, app, userData }) => {
  return (
    <>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Collection label="Popular Movies" path={paths.popular.movies} router={router} optional={`&page=${router.query.page}`} pagination={true} app={app} userData={userData}></Collection>
    </>
  )
}

export default popular