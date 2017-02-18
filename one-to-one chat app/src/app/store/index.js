
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


// Application State IAppState

// reducers
import { authReducer, chatReducer } from "./reducers/index.js";


import { AuthEpics, ChatEpics } from "./epics/index.js";

export const rootEpic = combineEpics(
    AuthEpics.register,
    AuthEpics.login,
    AuthEpics.getAllUser,
    ChatEpics.getUserConversation,
)
// Application Reducers
export const rootReducer = combineReducers({
    authReducer,
    chatReducer
});




// for initialize in application 


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);
