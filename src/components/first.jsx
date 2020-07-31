import React from 'react';
import { TextField, Button } from '@material-ui/core';

const First = ({ nextStep, changeHandler }) => {
	return (
		<form className="multiform-container">
			<TextField label="name" onChange={changeHandler} name="name" />
			<TextField label="description" onChange={changeHandler} rows={5} multiline name="description_len" />
			<TextField label="About" onChange={changeHandler} name="host_about_len" multiline rows={5} />
			<Button color="secondary" onClick={nextStep}>Continue</Button>
		</form>
	);
};

export default First;
