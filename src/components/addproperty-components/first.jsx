import React from 'react';
import { TextField, Button, InputLabel } from '@material-ui/core';
import './multiform.styles.css';
import StepTracker from '../addproperty-components/stepTracker';
import { Link } from 'react-router-dom';

const First = ({ nextStep, changeHandler, formValues, step, setStep }) => {
	const { name, description_len, host_about_len } = formValues;
	return (
		<div className="center-middle">
			<form className="multiform-container">
				<TextField label="name" onChange={changeHandler} name="name" value={name} color="secondary" />
				<TextField
					label="describe your property"
					value={description_len}
					onChange={changeHandler}
					rows={5}
					multiline
					name="description_len"
					color="secondary"
				/>
				<TextField
					label="Additional Information"
					onChange={changeHandler}
					value={host_about_len}
					name="host_about_len"
					multiline
					rows={5}
					color="secondary"
				/>
				<StepTracker step={step} setStep={setStep} />
				<div className="direction-buttons">
					<Link to="/">
						<Button color="secondary">Back</Button>
					</Link>
					<Button color="secondary" onClick={nextStep} variant="contained">
						Continue
					</Button>
				</div>
			</form>
		</div>
	);
};

export default First;
