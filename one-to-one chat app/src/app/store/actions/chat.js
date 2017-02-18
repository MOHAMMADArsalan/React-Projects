import { store } from "./../index.js"
export class ChatAction {

    static GET_USER_CONVERSATION = 'GET_USER_CONVERSATION';
    static GET_USER_CONVERSATION_SUCCESS = 'GET_USER_CONVERSATION_SUCCESS';
    static GET_USER_CONVERSATION_FAIL = 'GET_USER_CONVERSATION_FAIL';



    static ADD_USER_CONVERSATION = 'ADD_USER_CONVERSATION';


    static NULL = 'NULL'
    constructor() { }
    static addUserConversation(payload) {

        store.dispatch({
            type: ChatAction.ADD_USER_CONVERSATION,
            payload
        })
    }

    static getUserConversation(userConId, otherConId,messageId) {
        return {
            type: ChatAction.GET_USER_CONVERSATION,
            payload: { userConId, otherConId,messageId }
        }
    }
}