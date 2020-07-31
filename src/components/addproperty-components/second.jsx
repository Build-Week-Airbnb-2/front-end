import React from 'react';
import { TextField, Button } from '@material-ui/core';

const Second = ({ nextStep, prevStep, changeHandler, formValues }) => {
	const { city, neighbourhood, zipcode, property_type, state } = formValues;
	return (
		<form className="multiform-container">
			<TextField label="city" value={city} onChange={changeHandler} name="city" />
			<TextField label="neighbourhood" value={neighbourhood} onChange={changeHandler} name="neighbourhood" />
			<TextField label="zipcode" value={zipcode} onChange={changeHandler} name="zipcode" />
			<TextField label="property type" value={property_type} onChange={changeHandler} name="property_type" />
			<TextField label="state" value={state} onChange={changeHandler} name="state" />

			<Button color="secondary" onClick={nextStep}>
				Continue
			</Button>
			<Button color="secondary" onClick={prevStep}>
				Back
			</Button>
		</form>
	);
};

export default Second;
