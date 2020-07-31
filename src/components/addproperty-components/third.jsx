import React from 'react';
import { TextField, Button } from '@material-ui/core';
import StepTracker from './stepTracker'


const Third = ({ nextStep, prevStep, changeHandler, formValues , step}) => {
	const { bedrooms, bathrooms, beds, accommodates, guests_included, square_feet } = formValues;
	return (
		<div className="center-middle">
			<form className="multiform-container">
				<TextField label="bedrooms" value={bedrooms} onChange={changeHandler} name="bedrooms" />
				<TextField label="bathrooms" value={bathrooms} onChange={changeHandler} name="bathrooms" />
				<TextField label="beds" value={beds} onChange={changeHandler} name="beds" />
				<TextField label="accomodates" value={accommodates} onChange={changeHandler} name="accommodates" />
				<TextField label="guests included" value={guests_included} onChange={changeHandler} name="guests_included" />
				<TextField label="square feet" onChange={changeHandler} value={square_feet} name="square_feet" />
				<StepTracker step={step}></StepTracker>
				<div className="direction-buttons">
					<Button color="secondary" onClick={prevStep}>
					Back
					</Button>
							<Button color="secondary" onClick={nextStep}>
					Continue
					</Button>
				</div>
				
			</form>
		</div>
		
	);
};

export default Third;
