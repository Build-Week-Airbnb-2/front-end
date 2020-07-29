import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';
import { registerUser } from '../../store/actions/actions';
import './register.styles.css';

//refactored code to include initialForm values instead of setting state each time
const initialFormValues = {
	email: '',
	password: '',
	confirmPassword: ''
};

const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	let [ formValues, setFormValues ] = useState(initialFormValues);

	const formSchema = Yup.object().shape({
		email: Yup.string().email('Must be a valid email address.').required('Must include email address.'),
		password: Yup.string().min(6, 'Passwords must be at least 6 characters long.').required('Password is Required'),
		confirmPassword: Yup.mixed()
			.oneOf([ formValues.password ], 'passwords must match')
			.required('Please confirm your password')
	});

	let [ errors, setErrors ] = useState(initialFormValues);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');
		let newUser = {
			email: formValues.email.trim(),
			password: formValues.password.trim()
		};
		formSchema.isValid(formValues).then((valid) => {
			if (valid) {
				dispatch(registerUser(newUser, history));
			} else if (!valid) {
				alert('invalid form values');
			}
		});
	};

	const handleChange = (e) => {
		e.persist();
		// console.log(e.target.name)
		console.log(errors);
		console.log(formValues);
		Yup.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.message
				});
			});

		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<div className="field-container">
					<TextField
						className="email"
						type="email"
						name="email"
						id="name"
						label="email"
						onChange={handleChange}
					/>
					{errors.email.length ? <p>{errors.email}</p> : null}
				</div>

				<div className="field-container">
					<TextField
						className="password"
						type="password"
						name="password"
						id="name"
						label="password"
						onChange={handleChange}
					/>

					{errors.password.length ? <p>{errors.password}</p> : null}
				</div>
				<div className="field-container">
					<TextField
						className="password"
						type="password"
						name="confirmPassword"
						id="name"
						label="confirm password"
						onChange={handleChange}
					/>
					{errors.confirmPassword.length ? <p>{errors.confirmPassword}</p> : null}
				</div>

				<Button type="submit" variant="contained" color="secondary">
					REGISTER
				</Button>
			</form>
		</div>
	);
};

export default Register;
