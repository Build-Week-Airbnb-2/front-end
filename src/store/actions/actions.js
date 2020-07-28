import axios from 'axios'
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
		})}



