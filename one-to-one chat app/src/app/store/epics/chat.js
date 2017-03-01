import {
    ChatAction
} from "./../actions/index.js";
import {
    Observable
} from "rxjs";
import * as firebase from "firebase";
export class ChatEpics {
    constructor() { }
    static getUserConversation = (action$) =>
        action$.ofType('GET_USER_CONVERSATION')
            .switchMap(({payload}) => {
                return Observable.fromPromise(firebase.database().ref(`/conversations/${payload.userConId}/${payload.otherConId}`).once('value'))
                    .map((conversation) => {
                        console.log("--save moment", conversation.val())
                        if (conversation.val()) {
                            console.log("conversation conversation conversation", conversation.val())

                            firebase.database().ref(`/messages/${payload.messageId}`).off('value')
                            firebase.database().ref(`/messages/${payload.messageId}`).on('value', (snapshot) => {
                                let obj = {}
                                if (snapshot.val()) {
                                    obj[payload.messageId] = snapshot.val();
                                    ChatAction.addUserConversation(obj)
                                }
                            })
                            return {
                                type: 'GET_USER_CONVERSATION_SUCCESS',
                                payload: {}
                            }
                        } else {
                            console.log("e;sssssssssssssssssssssssss", conversation.val())

                            return Observable.fromPromise(firebase.database().ref(`/conversations/${payload.userConId}`).update({ [payload.otherConId]: payload.messageId }))
                                .map((data) => {
                                    if (data) {
                                        return {
                                            type: 'GET_USER_CONVERSATION_SUCCESS',
                                            payload: {}
                                        }
                                        console.log("firebase.database().ref(`/conversations/${payload.userConId}`).update({[payload.otherConId]: payload.messageId})", data)
                                    } else {

                                        return Observable.of({
                                            type: 'GET_USER_CONVERSATION_FAIL',
                                            payload: {}
                                        })
                                    }
                                })
                        }
                    })
            })
}