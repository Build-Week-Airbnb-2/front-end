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
const StepTracker = ({ step }) => {
	return (
		<div className="step-tracker">
			<Radio checked={step} />
			<Radio checked={step >= 2} />

			<Radio checked={step >= 3} />
			<GreenRadio checked={step >= 4} />
		</div>
	);
};

export default StepTracker;
