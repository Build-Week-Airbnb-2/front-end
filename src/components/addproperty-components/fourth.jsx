import React from 'react';
import { TextField, Button } from '@material-ui/core';



// cancellation_policy: 'moderate',
// 	instant_bookable: 't',
// 	is_business_travel_ready: 'f',
// 	review_scores_rating: 90,
// 	number_of_reviews: 4,
// 	transit_len: 'There is a bus stop at the end of the street!',
// 	name: 'Silver Lake House'

const Fourth = ({ nextStep, prevStep, changeHandler, formValues, submitHandler}) => {
	const {
		instant_bookable,
		cancellation_policy,
		is_business_travel_ready,
		review_scores_rating,
		number_of_reviews,
		transit_len
	} = formValues;
	return (
		<div className="center-middle">
			<form className="multiform-container">
			<TextField
				value={instant_bookable}
				label="Instantly Bookable"
				onChange={changeHandler}
				name="instant_bookable"
			/>
			<TextField
				label="Cancellation Policy"
				value={cancellation_policy}
				onChange={changeHandler}
				name="cancellation_policy"
			/>
			<TextField
				label="Do you have any airports nearby?"
				value={is_business_travel_ready}
				onChange={changeHandler}
				name="is_business_travel_ready"
			/>
			<TextField
				label="Overall Rating"
				value={review_scores_rating}
				onChange={changeHandler}
				name="review_scores_rating"
			/>
			<TextField
				label="Number of Reviews"
				value={number_of_reviews}
				onChange={changeHandler}
				name="number_of_reviews"
			/>
			<TextField
				label="Can you get around easily?"
				value={transit_len}
				onChange={changeHandler}
				name="transit_len"
			/>
			<Button color="secondary" onClick={submitHandler}>
				Submit
			</Button>
			<Button color="secondary" onClick={prevStep}>
				Back
			</Button>
		</form>
	</div>
		
	);
};

export default Fourth;
