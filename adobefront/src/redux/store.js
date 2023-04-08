import {combineReducers,applyMiddleware,legacy_createStore} from "redux"
import thunk from "redux-thunk"

let rootReducer=combineReducers({

})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))