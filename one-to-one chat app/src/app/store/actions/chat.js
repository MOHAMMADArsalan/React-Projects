import { store } from "./../index.js"
export class ChatAction {

    static GET_USER_CONVERSATION = 'GET_USER_CONVERSATION';
    static GET_USER_CONVERSATION_SUCCESS = 'GET_USER_CONVERSATION_SUCCESS';
    static GET_USER_CONVERSATION_FAIL = 'GET_USER_CONVERSATION_FAIL';



    static ADD_USER_CONVERSATION = 'ADD_USER_CONVERSATION';


    static NULL = 'NULL'
    constructor() { }
    // static addParkingLocation(payload) {

    //     store.dispatch({
    //         type: ParkingAction.ADD_PARKING_LOCATION,
    //         payload
    //     })
    // }

    static getUserConversation(userConId, otherConId) {
        console.log("chatReducer", userConId, otherConId)
        return {
            type: ChatAction.GET_USER_CONVERSATION,
            payload: { userConId, otherConId }
        }
    }
}