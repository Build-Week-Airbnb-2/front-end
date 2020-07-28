import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';
import axios from 'axios';
import * as Yup from 'yup';
import NavBar from '../navbar/navbar'


const Register = () => {
	let [ formValues, setFormValues ] = useState({
		email: '',
		password: ''
	});

	const formSchema = Yup.object().shape({
		email: Yup.string().email('Must be a valid email address.').required('Must include email address.'),
		password: Yup.string().min(6, 'Passwords must be at least 6 characters long.').required('Password is Required')
	});

	let [ errors, setErrors ] = useState({
		email: '',
		password: ''
	});

	const postUser = (user) => {
		axios
			.post('https://reqres.in/api/users/', user)
			.then((res) => {
				console.log(res.data);
			})
			.catch((er) => {
				console.log(er);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');
		let newUser = {
			email: formValues.email.trim(),
			password: formValues.password.trim()
		};
		postUser(newUser);
	};

	const handleChange = (e) => {
		e.persist();
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
			<NavBar></NavBar>

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
				<Button type="submit" variant="contained" color="secondary">
					REGISTER
				</Button>
			</form>
			
		</div>
	);
};

export default Register;
