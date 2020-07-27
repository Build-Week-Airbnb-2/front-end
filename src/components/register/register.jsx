import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';
import axios from 'axios';
import * as Yup from 'yup';

const Register = () => {
	let [ formValues, setFormValues ] = useState({
		email: '',
		password: ''
    });
    
    let [errors, setErrors] = useState({})

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
		let newUser = {
			email: formValues.email.trim(),
			password: formValues.password.trim()
		};
		postUser(newUser);
	};

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
		console.log(formValues);
	};

	return (
		<div className="form-container">
			<h1>Register</h1>
			<form className="form" onSubmit={handleSubmit}>
				<TextField
					className="email"
					type="email"
					name="email"
					id="name"
					label="email"
					onChange={handleChange}
				/>
				<TextField
					className="password"
					type="password"
					name="password"
					id="name"
					label="password"
					onChange={handleChange}
				/>

				<Button type="submit" variant="contained" color="secondary">
					REGISTER
				</Button>
			</form>
			<Link className="bottom-link" to="/team">
				<Button>Login</Button>
			</Link>
		</div>
	);
};

export default Register;
