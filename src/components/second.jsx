import React from 'react';
import { TextField, Button } from '@material-ui/core';



const Second = ({nextStep, prevStep, changeHandler}) => {
	return (
        <form className="multiform-container">
			<TextField label="city" onChange={changeHandler} name="city" />
			<TextField label="neighbourhood" onChange={changeHandler} name='neighbourhood' />
			<TextField label="zipcode" onChange={changeHandler} name="zipcode" />
            <TextField label="property type" onChange={changeHandler} name="property_type"/>
            <TextField label="state" onChange={changeHandler} name="state"/>


			<Button color="secondary" onClick={nextStep}>Continue</Button>
            <Button color="secondary" onClick={prevStep}>Back</Button>

		</form>
    )
};

export default Second;
