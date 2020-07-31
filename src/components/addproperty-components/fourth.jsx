import React from 'react';
import { green } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import StepTracker from './stepTracker';


// const GreenRadio = withStyles({
// 	root: {
// 		color: green[400],
// 		'&$checked': {
// 			color: green[600]
// 		}
// 	},
// 	checked: {}
// })((props) => <Radio color="default" {...props} />);







const useStyles = makeStyles({
	submit:{
		color: green[400],
		color: 'white',
		backgroundColor: green[400]
	}
})


const Fourth = ({ nextStep, prevStep, changeHandler, formValues, submitHandler, step, setStep }) => {
	const {
		instant_bookable,
		cancellation_policy,
		is_business_travel_ready,
		review_scores_rating,
		number_of_reviews,
		transit_len
	} = formValues;

	const classes = useStyles()
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
				<StepTracker step={step} setStep={setStep}/>
				<Button onClick={submitHandler}  variant='outlined' color='secondary' id='submit-button'>
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
