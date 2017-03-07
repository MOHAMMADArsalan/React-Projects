import { AuthActions } from "./../actions/index.js"
import * as firebase from "firebase";
import { FirebaseService } from "./../../services/firebaseService.js"
import { Observable } from "rxjs"
export class AuthEpic {
    constructor() { }
    static register = (actions$) =>
        actions$.ofType('REGISTER')
            .switchMap(({payload}) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((res) => {
                    console.log("resssssssssssssssssssssssssssss", res)
                    if (res) {
                        let user = firebase.database().ref('/users/' + res.uid) //FirebaseService.ref('/users');
                        delete payload['password'];
                        return user.set(payload).then(() => {
                            return {
                                type: 'REGISTER_SUCCESS'
                            }
                        }, (err) => {
                            return {
                                type: 'REGISTER_FAIL',
                                payload: err
                            }
                        })
                    }
                }, (err) => {
                    console.log("ERROR RRR ", err.code)
                    return {
                        type: 'REGISTER_FAIL',
                        payload: err
                    }
                })
            })

    static login = (actions$) =>
        actions$.ofType('LOGIN')
            .switchMap(({payload}) => {
                return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
                    .catch(err => {
                        console.log('err ', err)
                        return {
                            type: 'LOGIN_FAILER',
                            payload: err
                        };
                    })
                    .switchMap((d) => {
                        if (d.message) {
                            // error
                            return {
                                type: 'LOGIN_FAILER',
                                payload: d.message
                            };
                        } else {
                            console.log("LOGIN_SUCCESS")
                            return Observable.fromPromise(firebase.database().ref('/').child(`users/${d.uid}`).once('value'))
                                .map(u => {
                                    //set local storage
                                    let obj = {}
                                    obj["uid"] = d.uid,
                                        obj = Object.assign({}, obj, u.val())
                                    AuthEpic.setLocalStorage(JSON.stringify(obj))
                                    return {
                                        type:'LOGIN_SUCCESS',
                                        payload: obj
                                    }
                                })
                        }
                    })
            })

    static logout = (actions$) =>
        actions$.ofType('LOGOUT')
            .switchMap(() => {
                firebase.auth().signOut();
                AuthEpic.clearLocalStorage();
                return Observable.of({
                    type: 'LOGOUT_SUCCESS'
                })
            })


    static setLocalStorage(userObj) {
        localStorage.setItem('inventort-app', JSON.stringify(userObj));
    }

    static clearLocalStorage() {
        localStorage.removeItem('inventort-app');
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('inventort-app'));
    }
}


