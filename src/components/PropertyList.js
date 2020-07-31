import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/property-list.styles.css';

//import components
import Property from './Property';

function PropertyList() {
	const listings = useSelector((state) => state.listings); //array with all the listings
	// console.log('listings', listings);
	return (
		<div className="container">
			{listings.map((property) => {
				return <Property key={property.id} property={property} />;
			})}
		</div>
	);
}

export default PropertyList;
