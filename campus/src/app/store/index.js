
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


// Application State IAppState

// reducers
import { authReducer, companyReducer, studentReducer } from "./reducers/index.js";

// epics
// import AuthEpics from "./epics/index.js";
// import StudentEpic from "./epic/student";

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
// Application Epics / Effects
// export const rootEpic = combineEpics(
// AuthEpics.register
// AuthEpic.signupEpic,
// AuthEpic.createrMemberEpic,
// AuthEpic.loginEpic,
// AuthEpic.isLoggedInEpic,
// AuthEpic.LogoutEpic,
// StudentEpic.getVacancies,
// StudentEpic.getCompanies,
// StudentEpic.applyVacantEpic,
// StudentEpic.onVacancyEventChangesEpics,
// StudentEpic.addVacancyEpics,
// StudentEpic.updateVacancyEpics,
// StudentEpic.deleteVacancyEpics,
// StudentEpic.onVacancyEventDeleteEpics,
// StudentEpic.getAllStudents,

// );

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

// import { createStore, applyMiddleware , combineReducers  } from "redux";
// import { createEpicMiddleware, combineEpics } from "redux-observable";

// import { authReducer } from "./reducers/index.js";
// import { AuthEpics } from "./epics/index.js";

// export const rootEpic = combineEpics(
//     AuthEpics.register
// )

// export const rootReducer = combineReducers({
//     authReducer
// })

// const epicMiddleware = createEpicMiddleware(rootEpic);
// const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);
// // export let store = createStoreWithMiddleware(rootReducer)