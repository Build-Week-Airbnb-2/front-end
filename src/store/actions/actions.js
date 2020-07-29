import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// ======= USER ACTIONS ========

export const registerUser = (user, history) => (dispatch) => {
	axios
		.post('https://airbnboptimalpricing.herokuapp.com/api/auth/register', user)
		.then((res) => {
			alert('Registered User', res.data.email);
			history.push('/login');
		})
		.catch((err) => {
			console.log(err);
			//TODO: handle errors
		});
};

export const LOG_IN = 'LOG_IN';
export const loginUser = (user, history) => (dispatch) => {
	axios
		.post('https://airbnboptimalpricing.herokuapp.com/api/auth/login', user)
		.then((res) => {
			window.localStorage.setItem('token', JSON.stringify(res.data.token));
			history.push('/');
			dispatch({ type: LOG_IN });
		})
		.catch((err) => {
			console.log(err.response);
			//TODO: handle errors
		});
};

export const LOG_OUT = 'LOG_OUT';
export const logOut = (history) => {
	history.push('/login'); //switch to marketing site
	return { type: LOG_OUT };
};

export const USER_IS_LOGGED_IN = 'USER_IS_LOGGED_IN';
export const checkLogIn = () => {
	const item = window.localStorage.getItem('token');
	if (item) {
		return { type: USER_IS_LOGGED_IN };
	}
	return { type: 'USER_IS_NOT_LOGGED_IN' };
};

// ====== CRUD OPERATIONS ======

// == READ ==
export const GET_LISTINGS = 'GET_LISTINGS';

export const getProperties = () => (dispatch) => {
	console.log('listings actions file');
	axiosWithAuth()
		.get('/api/listings')
		.then((res) => {
			// listings array at res.data.listings
			console.log(res);
			dispatch({ type: GET_LISTINGS, payload: { listings: res.data.listings } });
		})
		.catch((err) => {
			console.log(err);
		});
};

// === CREATE ====

// ==== UPDATE ====

// ===== DESTROY =====

// ======= DS MODEL OPERATIONS =======

export const getPriceSuggestion = (property, history) => (dispatch) => {
	axios
		.post('https://ds-bw-airbnb-2.herokuapp.com/predict', property)
		.then((res) => {
			console.log(res);
			alert(`Suggested Price ${res.data.predicted_price}`);
			// predicted price res.data.predicted_price
			history.push('/');
		})
		.catch((err) => {
			console.log({ err });
			//TODO: handle Error
		});
};
