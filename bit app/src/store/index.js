import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { AuthEpic,ProductEpic  } from "./epics/index.js"

import { authReducer, productReducer } from "./reducers/index.js";


const rootReducer = combineReducers({
    authReducer,
    productReducer
});

const rootEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login,
    AuthEpic.logout,
    ProductEpic.getCategory,
    ProductEpic.getProduct
)
const epicMiddlerware = createEpicMiddleware(rootEpics);

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddlerware)
)
export default store;