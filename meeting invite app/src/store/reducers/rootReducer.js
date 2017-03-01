import { combineReducers } from "redux";
import { inviteReducer } from "./inviteReducer.js"

const rootReducer = combineReducers({
    invite: inviteReducer
})
export default rootReducer;