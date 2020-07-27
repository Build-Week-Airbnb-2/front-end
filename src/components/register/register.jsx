import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';

import * as Yup from 'yup';

const Register = () => {
	return (
		<div className="form-container">
			<h1>Register</h1>
			<form className="form">
				<TextField className="email" type="email" name="email" id="name" label="email" />
				<TextField className="password" type="password" name="password" id="name" label="password" />

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
