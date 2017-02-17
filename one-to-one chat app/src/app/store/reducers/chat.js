import { ChatAction } from "./../actions/index.js";
const InitailState = {
    isLoading: false,
    conversationIds: {},
    chats: {}
}

export const chatReducer = (state = InitailState, action) => {
    let newState;
    switch (action.type) {
        case 'GET_USER_CONVERSATION':
            return Object.assign({}, state, { isLoading: true })
        case 'GET_USER_CONVERSATION_SUCCESS':
            console.log("GET_USER_CONVERSATION_SUCCESS", action.payload)
            return Object.assign({}, state, newState)
        default:
            return state;
    }
}