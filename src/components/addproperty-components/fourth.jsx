import React from 'react';
import {
	TextField,
	Button,
	MenuItem,
	Select,
	InputLabel,
	FormControlLabel,
	RadioGroup,
	Radio
} from '@material-ui/core';

// cancellation_policy: 'moderate',
// 	instant_bookable: 't',
// 	is_business_travel_ready: 'f',
// 	review_scores_rating: 90,
// 	number_of_reviews: 4,
// 	transit_len: 'There is a bus stop at the end of the street!',
// 	name: 'Silver Lake House'

const Fourth = ({ nextStep, prevStep, changeHandler, formValues, submitHandler }) => {
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
				<InputLabel>Instantly Bookable</InputLabel>
				<RadioGroup
					aria-label="gender"
					name="instant_bookable"
					value={instant_bookable}
					onChange={changeHandler}
				>
					<div className="radio-buttons">
						<FormControlLabel value="t" control={<Radio />} label="True" />
						<FormControlLabel value="f" control={<Radio />} label="False" />
					</div>
				</RadioGroup>
					<InputLabel>Do you have any airports or trains nearby?</InputLabel>
					<RadioGroup
						aria-label="gender"
						name="is_business_travel_ready"
						value={is_business_travel_ready}
						onChange={changeHandler}
				>
					<div className="radio-buttons">
						<FormControlLabel value="t" control={<Radio />} label="Yes!" />
						<FormControlLabel value="f" control={<Radio />} label="No" />
					</div>
				</RadioGroup>
				<InputLabel id="demo-simple-select-label">Cancellation Policy</InputLabel>
				<TextField value={cancellation_policy} name="cancellation_policy" select onChange={changeHandler}>
					<MenuItem value="flexible">Flexible</MenuItem>
					<MenuItem value="moderate">Moderate</MenuItem>
					<MenuItem value="strict">Strict</MenuItem>
				</TextField>

				{/* <TextField
					label="Do you have any airports nearby?"
					value={is_business_travel_ready}
					onChange={changeHandler}
					name="is_business_travel_ready"
				/> */}
		


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
