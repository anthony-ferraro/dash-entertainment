import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from'next/head';
const nowPlaying = ({ router, app, userData }) => {
  return (
    <>
      <Head>
        <title>In Theaters</title>
      </Head>
      <Collection label="In Theaters" path={paths.nowPlaying.movies} router={router} optional={`&page=${router.query.page}`} pagination={true} app={app} userData={userData}></Collection>
    </>
  )
}

export default nowPlaying