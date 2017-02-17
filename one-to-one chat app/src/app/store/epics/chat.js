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
                        if (conversation) {
                            console.log("GET_USER_CONVERSATION", conversation.val())
                            return {
                                type: 'GET_USER_CONVERSATION_SUCCESS',
                                payload: conversation.val()
                            }
                        } else {
                            return Observable.of({
                                type: 'GET_USER_CONVERSATION_FAIL',
                                payload: {}
                            })
                        }
                    })
            })
}