import React from 'react';
import { TextField, Button } from '@material-ui/core';

const First = ({ nextStep, changeHandler , formValues}) => {
    const {name, description_len, host_about_len} = formValues
	return (
		<form className="multiform-container">
			<TextField label="name" onChange={changeHandler} name="name" value={name}/>
			<TextField label="description" value={description_len} onChange={changeHandler} rows={5} multiline name="description_len" />
			<TextField label="About" onChange={changeHandler} value={host_about_len} name="host_about_len" multiline rows={5} />
			<Button color="secondary" onClick={nextStep}>Continue</Button>
		</form>
	);
};

export default First;
