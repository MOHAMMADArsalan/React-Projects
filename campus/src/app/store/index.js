
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


// Application State IAppState

// reducers
import { authReducer, companyReducer, studentReducer } from "./reducers/index.js";


import { AuthEpics, CompanyEpics, StudentEpics } from "./epics/index.js";

export const rootEpic = combineEpics(
    AuthEpics.register,
    AuthEpics.login,
    CompanyEpics.getCompanies,
    CompanyEpics.getCompanyPost,
    CompanyEpics.getOneCompanyPost,
    CompanyEpics.getPosts,
    StudentEpics.getStudents
)
// Application Reducers
export const rootReducer = combineReducers({
    authReducer,
    companyReducer,
    studentReducer
});




// for initialize in application 


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);
