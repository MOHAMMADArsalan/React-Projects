import {
    Observable
} from 'rxjs';
import {
    ActionsObservable
} from "redux-observable";
import {
    AuthActions
} from '../actions';
import * as firebase from "firebase";
import { FirebaseService } from "./../../services/FirebaseService.js"
export class AuthEpics {
    constructor() { }

    static register = (action$) =>
        action$.ofType('SIGN_UP')
            .switchMap(({
                payload
            }) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((response) => {
                    let multipath = {};
                    let users = firebase.database().ref(`users/${response.uid}`);
                    delete payload['password'];
                    payload['conversationId'] = response.uid;
                    return users.set(payload).then(() => {
                        return {
                            type: 'SIGN_UP_SUCCESS',
                            payload: response
                        };
                    }, (err) => {
                        return {
                            type: 'SIGN_UP_FAIL',
                            payload: {
                                isError: {
                                    status: false,
                                    msg: err.message
                                }
                            }
                        };
                    });

                }, (err) => {
                    return {
                        type: 'SIGN_UP_FAIL',
                        payload: {
                            isError: {
                                status: false,
                                msg: err.message
                            }
                        }
                    };
                });
            })

    static login = (action$) =>
        action$.ofType('LOGIN')
            .switchMap(({
                payload
            }) => {
                return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
                    .catch(err => {
                        console.log('err ', err)
                        return Observable.of(err);
                    })
                    .switchMap((d) => {
                        if (d.message) {
                            // error
                            return Observable.of({
                                type: 'LOGIN_FAILER',
                                payload: d.message
                            });
                        } else {
                            return Observable.fromPromise(firebase.database().ref('/').child(`users/${d.uid}`).once('value'))
                                .map(u => {
                                    //set local storage
                                    let obj = {}
                                    obj["uid"] = d.uid,
                                        obj = Object.assign({}, obj, u.val())
                                    AuthEpics.setLocalStorage(JSON.stringify(obj))
                                    return {
                                        type: 'LOGIN_SUCCESS',
                                        payload: obj
                                    }
                                })
                        }
                    })
            })
    static logout = (action$) =>
        action$.ofType('LOGOUT')
            .switchMap(() => {
                firebase.auth().signOut();
                // this.af.auth.logout();
                AuthEpics.clearLocalStorage();
                return Observable.of({
                    type: 'LOGOUT_SUCCESS'
                });
            });

    static isLoggedIn = (action$) =>
        action$.ofType('ISLOGGEDIN')
            .switchMap(() => {
                if (AuthEpics.getLocalStorage()) {
                    return Observable.of({
                        type: 'GET_USER_INFO',
                        payload: AuthEpics.getLocalStorage()
                    });
                } else {
                    return Observable.of({
                        type: 'LOGIN_FAIL'
                    });
                }
            });
    static setLocalStorage(userObj) {
        localStorage.setItem('upwork-app', JSON.stringify(userObj));
    }

    static clearLocalStorage() {
        localStorage.removeItem('upwork-app');
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('upwork-app'));
    }


}