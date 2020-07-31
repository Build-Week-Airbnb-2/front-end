import React from 'react';
import { TextField, Button } from '@material-ui/core';

const Third = ({nextStep, prevStep, changeHandler}) => {
	return (
        <form className="multiform-container">
			<TextField label="bedrooms" onChange={changeHandler} name="bedrooms" />
			<TextField label="bathrooms" onChange={changeHandler} name='bathrooms' />
			<TextField label="beds" onChange={changeHandler} name="beds" />
            <TextField label="accomodates" onChange={changeHandler} name="accomodates"/>
            <TextField label="guests included" onChange={changeHandler} name="guests_included"/>
            <TextField label="square feet" onChange={changeHandler} name="square_feet"/>


			<Button color="secondary" onClick={nextStep}>Continue</Button>
            <Button color="secondary" onClick={prevStep}>Back</Button>
        </form>
    )
};

export default Third;
