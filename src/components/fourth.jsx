import React from 'react';
import { TextField, Button } from '@material-ui/core';


// cancellation_policy: 'moderate',
// 	instant_bookable: 't',
// 	is_business_travel_ready: 'f',
// 	review_scores_rating: 90,
// 	number_of_reviews: 4,
// 	transit_len: 'There is a bus stop at the end of the street!',
// 	name: 'Silver Lake House'

const Fourth = ({nextStep, prevStep, changeHandler}) => {
	return (
        <form className="multiform-container">
          	<TextField label="Cancellation Policy" onChange={changeHandler} name='cancellation_policy' />
			<TextField label="Do you have any airports nearby?" onChange={changeHandler} name='is_business_travel_ready' />
			<TextField label="Overall Rating" onChange={changeHandler} name="review_scores_rating" />
            <TextField label="Number of Reviews" onChange={changeHandler} name="number_of_reviews"/>
            <TextField label="Can you get around easily?" onChange={changeHandler} name="transit_len"/>
			<Button color="secondary" onClick={nextStep}>Continue</Button>
            <Button color="secondary" onClick={prevStep}>Back</Button>
        </form>
    )
};

export default Fourth;