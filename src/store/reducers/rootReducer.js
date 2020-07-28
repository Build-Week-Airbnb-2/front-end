//import  actions from actions import { * as ACTIONS} from
import { REGISTER_USER, LOG_OUT, LOG_IN, USER_IS_LOGGED_IN} from '../actions/actions';

export const initialState = {
    properties: [1,2],
    error:'',
    loggedIn: false

}

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOG_IN:
            console.log('Logged in Reducer');
            return {
                ...state,
                loggedIn: true
            }
        case LOG_OUT:
            localStorage.removeItem('token')
        return {
            ...state,
            loggedIn: false
        }
        case USER_IS_LOGGED_IN:
           return {
               ...state,
               loggedIn:true
            }
       default: 
        return state
    }  
}

