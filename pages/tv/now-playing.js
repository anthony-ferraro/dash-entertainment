import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
const nowPlaying = ({ router }) => {
  return (
    <Collection label="Airing Today" path={paths.nowPlaying.tv} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
  )
}

export default nowPlaying