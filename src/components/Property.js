import React from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {deleteListing} from '../store/actions/actions'

function Property({property}) {
  const history = useHistory();
  const dispatch = useDispatch()




  return (
    <div>
      <h5>Name</h5>
      <p>{property.name}</p>
      <h5>Description</h5>
      <p>{property.description_len}</p>
      <h5>Beds</h5>
      <p>{property.beds}</p>
      <h5>Bedrooms</h5>
      <p>{property.bedrooms}</p>
      <h5>Bathrooms</h5>
      <p>{property.bathrooms}</p>
      <h5>Type</h5>
      <p>{property.property_type}</p>
      <button onClick={()=>history.push(`/update-property/${property.id}`)}>Update</button>
      <button onClick={()=>dispatch(deleteListing(property.id,history))}>Delete</button>
    </div>
  )
}

export default Property;