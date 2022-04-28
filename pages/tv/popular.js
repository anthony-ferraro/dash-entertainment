import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from 'next/head'
const popular = ({ router, app, userData }) => {
  return (
    <>
      <Head>
        <title>Popular TV Series</title>
      </Head>
      <Collection label="Popular TV Series" path={paths.popular.tv} router={router} optional={`&page=${router.query.page}`} pagination={true} app={app} userData={userData}></Collection>
    </>
  )
}

export default popular