import React from 'react'

function Property({property}) {
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
    </div>
  )
}

export default Property;