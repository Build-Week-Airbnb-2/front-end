import React from 'react';
import { TextField, Button, InputLabel, MenuItem } from '@material-ui/core';
import states from '../../utils/states'




const Second = ({ nextStep, prevStep, changeHandler, formValues }) => {
	const { city, neighbourhood, zipcode, property_type, state } = formValues;
	return (
		<div className="center-middle">
			<form className="multiform-container">
				<TextField label="city" value={city} onChange={changeHandler} name="city" />
				<TextField label="neighbourhood" value={neighbourhood} onChange={changeHandler} name="neighbourhood" />
				<TextField label="zipcode" value={zipcode} onChange={changeHandler} name="zipcode" />
				{/* <TextField label="property type" value={property_type} onChange={changeHandler} name="property_type" /> */}
				<InputLabel id="demo-simple-select-label">Property Type</InputLabel>
				<TextField name="property_type" select onChange={changeHandler} value={property_type}>
					<MenuItem value="House">House</MenuItem>
					<MenuItem value="Apartment">Apartment</MenuItem>
					<MenuItem value="Unique">Unique Space</MenuItem>
				</TextField>
				<InputLabel id="demo-simple-select-label">State</InputLabel>
				<TextField name="state" select onChange={changeHandler} value={state}>
					{states.map((state) => {
						return <MenuItem value={state[0]}>{state[1]}</MenuItem>;
					})}
				</TextField>

				<Button color="secondary" onClick={nextStep}>
					Continue
				</Button>
				<Button color="secondary" onClick={prevStep}>
					Back
				</Button>
			</form>
		</div>
	);
};

export default Second;
