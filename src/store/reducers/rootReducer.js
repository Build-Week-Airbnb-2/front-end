//import  actions from actions import { * as ACTIONS} from
import {
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  USER_IS_LOGGED_IN,
  GET_LISTINGS,
  DATA_LOADING,
  ADDED_LISTING,
  DELETE_LISTING,
  ERROR
} from "../actions/actions";

export const initialState = {
  listings: [],
  error: "",
  loggedIn: false,
  loading: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return{
        ...state,
        error: action.payload.error
      }
    case LOG_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loggedIn: false,
      };
    case USER_IS_LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case GET_LISTINGS:
        return{
            ...state,
            listings: action.payload.listings,
            loading: false
        }
    case DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    case ADDED_LISTING:
      return {
        ...state,
        loading: false
      }
      case DELETE_LISTING:
        return{
          ...state,
          listings: state.listings.filter(item => item.id !== action.payload.id)
        }
      case 'ERROR':
        return {
          ...state,
          error: action.payload.data.message
        }
    default:
      return state;
  }
};
