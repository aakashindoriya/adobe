import {ADD_NEW_USER,DELETE_USER,ERROR,GET_All_USERS,GET_USER_BY_ID,LOADING,UPDATE_USER} from "../actionTypes/user.actionTypes"
const initialState = {
    users: [],
    userById: {},
    loading: false,
    error: null
  }
  
 export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_All_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false,
          error: null
        }
      case GET_USER_BY_ID:
        return {
          ...state,
          userById: action.payload,
          loading: false,
          error: null
        }
      case ADD_NEW_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
          loading: false,
          error: null
        }
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map(user => user._id === action.payload._id ? action.payload : user),
          userById: action.payload,
          loading: false,
          error: null
        }
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => user._id !== action.payload),
          userById: {},
          loading: false,
          error: null
        }
      case LOADING:
        return {
          ...state,
          loading: true,
          error: null
        }
      case ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default:
        return state
    }
  }
  