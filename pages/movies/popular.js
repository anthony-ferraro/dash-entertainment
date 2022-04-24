import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from 'next/head';
const popular = ({ router }) => {
  return (
    <>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Collection label="Popular Movies" path={paths.popular.movies} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
    </>
  )
}

export default popular