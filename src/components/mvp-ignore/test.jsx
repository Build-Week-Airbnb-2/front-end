import React from 'react';

const Test = ({ listing }) => {
	let { host_about_len, bedrooms, beds, bathrooms, state } = listing;
	return (
		<div>
			<p>{bedrooms}</p>
			<p>{beds}</p>
			<p>{bathrooms}</p>
			<p>{host_about_len}</p>
			<p>{state}</p>
		</div>
	);
};

export default Test;
