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
export class AuthEpics {
    constructor() {}

    static register = (action$) =>
        action$.ofType(AuthActions.SIGN_UP)
        .switchMap(({
            payload
        }) => {
            return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((response) => {
                let multipath = {};
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
        // .do(x => { console.log("login ecpis =-=-=-=-=-=-=-=-=-=-=-=-=-", x) })
        .switchMap(({
            payload
        }) => {
            // console.log('LOGIN--- ', payload)
            return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
                .catch(err => {
                    console.log('err ', err)
                    return Observable.of(err);
                })
                .switchMap((d) => {
                    console.log('d login ecpis', d)
                    if (d.message) {
                        // error
                        return Observable.of({
                            type: AuthActions.LOGIN_FAILER,
                            payload: d.message
                        });
                    } else {
                        console.log('22222222222222222222', d)
                        return Observable.fromPromise(firebase.database().ref('/').child(`users/${d.uid}`).once('value'))
                            .map(u => {
                                //set local storage
                                let obj = {}
                                obj["uid"] = d.uid,
                                    obj = Object.assign({}, obj, u.val())
                                AuthEpics.setLocalStorage(JSON.stringify(obj))
                                console.log("usersssssssssssssssss", u.val())
                                    // localStorage.setItem('react-localStorage-user', JSON.stringify(u.val()));
                                return {
                                    type: AuthActions.LOGIN_SUCCESS,
                                    payload: obj
                                }
                            })
                    }
                })
        })
        // action$.ofType(AuthActions.LOGIN)
        //     .switchMap(({payload}) =>
        //         firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then((auth) => {
        //             AuthEpics.setLocalStorage(auth)
        //             console.log("auth", auth)
        //             return Observable.fromPromise(firebase.database().ref('/').child(`users/${payload.uid}`).once('value'))
        //                 .map(u => {
        //                     return {
        //                         type: AuthActions.LOGIN_SUCCESS,
        //                         payload: u.val()
        //                     }
        //                 })
        //         }, (err) => {
        //             console.log("LOGIN_FAIL")
        //             return {
        //                 type: AuthActions.LOGIN_FAIL,
        //                 payload: {}
        //             };
        //         })
        //     );
    getUserInfo = (action$) =>
        action$.ofType('GET_USER_INFO')
        .switchMap(({
            payload
        }) => {
            console.log("" / users / " + payload.uid", payload)
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
                console.log('auth exists: ')
                return Observable.of({
                    type: AuthActions.GET_USER_INFO,
                    payload: AuthEpics.getLocalStorage()
                });
            } else {
                console.log('auth not exists')
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