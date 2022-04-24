import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
const nowPlaying = ({ router }) => {
  return (
    <Collection label="In Theaters" path={paths.nowPlaying.movies} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
  )
}

export default nowPlaying