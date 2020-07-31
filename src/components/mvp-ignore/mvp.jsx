import axios from 'axios';

import React, { useState, useEffect } from 'react';
import Test from './test';

const Mvp = () => {
	const fetchListings = async (stateHandler) => {
		try {
			let request = await axios.get('https://airbnboptimalpricing.herokuapp.com/api/listings', {
				headers: {
					Authorization:
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJlbWFpbCI6ImNvdmlkQGdtYWlsLmNvbSIsImlhdCI6MTU5NjE0MTA3NSwiZXhwIjoxNTk2MTQ0Njc1fQ.FWcBaay8zHVp8JY8w81_x3kHC6hHlQYzzLwXF9LN48Q'
				}
			});
			let result = request.data.listings;
			console.log(result);
			stateHandler(result);
		} catch (error) {
			console.log(error);
		}
	};
	const [ myListings, setMyListings ] = React.useState([]);
	useEffect(() => {
		fetchListings(setMyListings);
	}, []);

	return (
		<div>
			{myListings.map((el) => {
				return <Test listing={el} />;
			})}
		</div>
	);
};

export default Mvp;
