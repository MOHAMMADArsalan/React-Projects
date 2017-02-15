
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


// Application State IAppState

// reducers
import { authReducer, parkingReducer } from "./reducers/index.js";


import { AuthEpics, ParkingEpics } from "./epics/index.js";

export const rootEpic = combineEpics(
    AuthEpics.register,
    AuthEpics.login,
    ParkingEpics.getParkingLocation,
    ParkingEpics.getOneParkingData,
    ParkingEpics.getParkingAvailablity,
    ParkingEpics.getParkingDetailByUser,
    ParkingEpics.getFeedbacks
    // CompanyEpics.getCompanyPost,
    // CompanyEpics.getOneCompanyPost,
    // CompanyEpics.getPosts,
    // StudentEpics.getStudents
)
// Application Reducers
export const rootReducer = combineReducers({
    authReducer,
    parkingReducer
});




// for initialize in application 


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);
