import React from 'react'
import {useSelector} from 'react-redux'

import Property from './Property'

export default function PropertyList() {
  const propeties = useSelector( state => state.properties)
  return (
    <div>
      <h1>This is a Property List</h1>
      {
        propeties.map(property =>{
          return <Property property={property} />
        })
      }
    </div>
  )
}
