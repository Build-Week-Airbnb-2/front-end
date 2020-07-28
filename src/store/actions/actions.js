import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'

// ======= USER ACTIONS ========

export const registerUser = (user, history) => dispatch => {
  axios.post('https://airbnboptimalpricing.herokuapp.com/api/auth/register', user)
		.then( res => {
      alert('Registered User', res.data.email)
			history.push('/login')
		})
		.catch( err => {
			console.log(err);
			//TODO: handle errors
		})}

export const loginUser = (user, history) => dispatch =>{
  axios.post('https://airbnboptimalpricing.herokuapp.com/api/auth/login', user)
		.then(res => {
      window.localStorage.setItem('token', JSON.stringify(res.data.token));
			history.push('/');
		})
		.catch( err => {
			console.log(err.response);
			//TODO: handle errors
		})}


		// ====== CRUD OPERATIONS ======

		// == READ ==
export const GET_PROPERTIES = 'GET_PROPERTIES'
export const getProperties = () => {
	console.log('getting properties actions file');
	//TODO: Get properties from endpoint, set propeties to state in reducer
	// axiosWithAuth()
	// 	.get()
	// 	.then(res =>{
	// 		console.log(res);
	// 	})
	// 	.catch(err =>{
	// 		console.log(err);
	// 	})
}

// === CREATE ====



// ==== UPDATE ====



// ===== DESTROY =====




// ======= DS MODEL OPERATIONS =======


export const getPriceSuggestion = (property, history) => dispatch =>{
	axios.post('https://ds-bw-airbnb-2.herokuapp.com/predict', property)
		.then(res =>{
			console.log(res);
			alert(`Suggested Price ${res.data.predicted_price}`)
			// predicted price res.data.predicted_price
			history.push('/')
		})
		.catch(err =>{
			console.log({err});
			//TODO: handle Error 
		})
}