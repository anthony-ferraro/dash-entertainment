import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
const popular = ({ router }) => {
  return (
    <Collection label="Popular TV Series" path={paths.popular.tv} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
  )
}

export default popular