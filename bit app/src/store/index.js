import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { AuthEpic } from "./epics/index.js"
import { AuthActions } from "./actions/index.js";

import { authReducer } from "./reducers/index.js";


const rootReducer = combineReducers({
    authReducer
});

const rootEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login
)
const epicMiddlerware = createEpicMiddleware(rootEpics);

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddlerware)
)
export default store;