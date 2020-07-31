import React from 'react';
import { Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './multiform.styles.css'
const GreenRadio = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600]
		}
	},
	checked: {}
})((props) => <Radio color="default" {...props} />);


const StepTracker = ({ step, setStep }) => {

	return (
		<div className="step-tracker">
			<Radio checked={step == 1} onClick={() => setStep(1)}/>
			<Radio checked={step == 2} onClick={() => setStep(2)}/>
			<Radio checked={step == 3} onClick={() => setStep(3)}/>
			<GreenRadio checked={step == 4} onClick={() => setStep(4)}/>
		</div>
	);
};

export default StepTracker;
