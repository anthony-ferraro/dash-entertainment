import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from'next/head';
const nowPlaying = ({ router }) => {
  return (
    <>
      <Head>
        <title>In Theaters</title>
      </Head>
      <Collection label="In Theaters" path={paths.nowPlaying.movies} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
    </>
  )
}

export default nowPlaying