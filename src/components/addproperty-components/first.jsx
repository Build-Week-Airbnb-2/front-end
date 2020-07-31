import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './multiform.styles.css';
import StepTracker from '../addproperty-components/stepTracker';

const First = ({ nextStep, changeHandler, formValues, step }) => {
	const { name, description_len, host_about_len } = formValues;
	return (
		<div className="center-middle">
			<form className="multiform-container">
				<TextField label="name" onChange={changeHandler} name="name" value={name} />
				<TextField
					label="description"
					value={description_len}
					onChange={changeHandler}
					rows={5}
					multiline
					name="description_len"
				/>
				<TextField
					label="About"
					onChange={changeHandler}
					value={host_about_len}
					name="host_about_len"
					multiline
					rows={5}
				/>
				<StepTracker step={step}></StepTracker>
				<Button color="secondary" onClick={nextStep}>
					Continue
				</Button>
			</form>
		</div>
	);
};

export default First;
