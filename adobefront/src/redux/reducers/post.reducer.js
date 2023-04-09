import {ADD_NEW_POST,DELETE_POST,ERROR,GET_All_POST,GET_POST_BY_ID,LOADING,UPDATE_POST} from "../actionTypes/post.actionType"
const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null,
  };
  
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_All_POST:
        return {
          ...state,
          posts: action.payload,
          loading: false,
          error: null,
        };
      case GET_POST_BY_ID:
        return {
          ...state,
          post: action.payload,
          loading: false,
          error: null,
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
          loading: false,
          error: null,
        };
      case ADD_NEW_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload],
          loading: false,
          error: null,
        };
      case UPDATE_POST:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
          loading: false,
          error: null,
        };
      case ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      default:
        return state;
    }
  };
  