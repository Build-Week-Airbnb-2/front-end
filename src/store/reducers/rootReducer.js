//import  actions from actions import { * as ACTIONS} from

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