import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from 'next/head'
const popular = ({ router }) => {
  return (
    <>
      <Head>
        <title>Popular TV Series</title>
      </Head>
      <Collection label="Popular TV Series" path={paths.popular.tv} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
    </>
  )
}

export default popular