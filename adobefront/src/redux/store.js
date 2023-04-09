import {combineReducers,applyMiddleware,legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { userReducer } from "./reducers/user.reducer"
import { postReducer } from "./reducers/post.reducer"

let rootReducer=combineReducers({
user:userReducer,
post:postReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))