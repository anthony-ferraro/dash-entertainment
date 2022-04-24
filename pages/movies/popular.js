import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
const popular = ({ router }) => {
  return (
    <Collection label="Popular Movies" path={paths.popular.movies} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
  )
}

export default popular