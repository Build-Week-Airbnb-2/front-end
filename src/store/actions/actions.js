import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'

// === action without payload
// export const TOGGLE_EDITING = "TOGGLE_EDITING";
// export const toggleEditing = () => {
//   return { type: TOGGLE_EDITING };
// };

//  === action with payload ===
// export const UPDATE_TITLE = "UPDATE_TITLE";
// export const updateTitle = newTitle => {
//   return { type: UPDATE_TITLE, payload: newTitle };
// };



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
			//TODO: handle errors
		})}


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