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
        action$.ofType(AuthActions.SIGN_UP)
            .switchMap(({
                payload
            }) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((response) => {
                    let multipath = {};
                    if (payload.type === 2) {
                        delete payload['password'];
                        multipath[`companies/${response.uid}`] = payload;
                        multipath[`users/${response.uid}`] = payload;
                        return FirebaseService.saveMultipath(multipath).then(() => {
                            return {
                                type: AuthActions.SIGN_UP_SUCCESS,
                                payload: response
                            };
                        }, (err) => {
                            return {
                                type: AuthActions.SIGN_UP_FAIL,
                                payload: { isError: { status: false, msg: err.message } }
                            };
                        });
                    } else {
                        let users = firebase.database().ref(`users/${response.uid}`);
                        delete payload['password'];
                        return users.set(payload).then(() => {
                            return {
                                type: AuthActions.SIGN_UP_SUCCESS,
                                payload: response
                            };
                        }, (err) => {
                            return {
                                type: AuthActions.SIGN_UP_FAIL,
                                payload: {
                                    isError: {
                                        status: false,
                                        msg: err.message
                                    }
                                }
                            };
                        });
                    }

                }, (err) => {
                    return {
                        type: AuthActions.SIGN_UP_FAIL,
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
        action$.ofType(AuthActions.LOGIN)
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
                                type: AuthActions.LOGIN_FAILER,
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
                                        type: AuthActions.LOGIN_SUCCESS,
                                        payload: obj
                                    }
                                })
                        }
                    })
            })

    getUserInfo = (action$) =>
        action$.ofType('GET_USER_INFO')
            .switchMap(({
                payload
            }) => {
                return firebase.database().ref("/users/" + payload.uid).once("value")
                    .map((user) => {
                        if (user) {
                            return {
                                type: AuthActions.GET_USER_INFO_SUCCESS,
                                payload: Object.assign({}, payload, user)
                            }
                        } else {
                            return Observable.of({
                                type: AuthActions.GET_USER_INFO_FAIL,
                                payload: {}
                            })
                        }
                    })
            })
    logout = (action$) =>
        action$.ofType(AuthActions.LOGOUT)
            .switchMap(() => {
                this.af.auth.logout();
                AuthEpics.clearLocalStorage();
                return Observable.of({
                    type: AuthActions.LOGOUT_SUCCESS
                });
            });

    isLoggedIn = (action$) =>
        action$.ofType(AuthActions.ISLOGGEDIN)
            .switchMap(() => {
                if (AuthEpics.getLocalStorage()) {
                    return Observable.of({
                        type: AuthActions.GET_USER_INFO,
                        payload: AuthEpics.getLocalStorage()
                    });
                } else {
                    return Observable.of({
                        type: AuthActions.LOGIN_FAIL
                    });
                }
            });
    static setLocalStorage(userObj) {
        localStorage.setItem('Campus-Recruitment-System', JSON.stringify(userObj));
    }

    static clearLocalStorage() {
        localStorage.removeItem('Campus-Recruitment-System');
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('Campus-Recruitment-System'));
    }


}