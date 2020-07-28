//import  actions from actions import { * as ACTIONS} from
import { REGISTER_USER } from '../actions/actions';

export const initialState = {
    hasProperties: false,
    properties: [1,2]
}

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
       default: 
        return state
    }  
}

