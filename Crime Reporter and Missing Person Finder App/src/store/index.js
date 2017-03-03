import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { AuthEpic,ReportEpic  } from "./epics/index.js"

import { authReducer, ReportReducer } from "./reducers/index.js";


const rootReducer = combineReducers({
    authReducer,
    ReportReducer
});

const rootEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login,
    AuthEpic.logout,
    ReportEpic.getReport,
    ReportEpic.getUserReport
)
const epicMiddlerware = createEpicMiddleware(rootEpics);

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddlerware)
)
export default store;