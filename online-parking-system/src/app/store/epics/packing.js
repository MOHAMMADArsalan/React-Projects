import {
    ParkingAction
} from "./../actions/index.js";
import {
    Observable
} from "rxjs";
import * as firebase from "firebase";
export class ParkingEpics {
    constructor() { }

    static getParkingLocation = (action$) =>
        action$.ofType('GET_PARKING_LOCATION')
            .switchMap(({
                payload
            }) => {
                if (!payload) {
                    firebase.database().ref("/").child('/parking-location').off('value')
                    firebase.database().ref("/").child('/parking-location').on('value', (snapshot) => {
                        if (snapshot.val()) {
                            console.log("snapshot===============", snapshot.val())
                            let obj = {};
                            for (let key in snapshot.val()) {
                                obj[key] = snapshot.val()[key];
                                // let obj = Object.assign({}, snapshot.val()[key]);
                                // obj['$key'] = key
                                // CompanyAction.addCompany(obj);
                            }
                            console.log("Objectttttttttttttttttttttt",obj)
                               ParkingAction.addParkingLocation(obj)
                            // return Observable.of({
                            //     type: 'GET_PARKING_LOCATION_SUCCESS',
                            //     payload: obj
                            // })
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PARKING_LOCATION_FAIL',
                    payload: []
                })
            })
    static getParkingDetailByUser = (action$) =>
        action$.ofType('GET_PARKING_DETAILS_BY_USER')
            .switchMap(({
                payload
            }) => {
                if (payload) {
                    firebase.database().ref(`/user-parking/${payload.uid}`).off('value')
                    firebase.database().ref(`/user-parking/${payload.uid}`).on('value', (snapshot) => {
                        if (snapshot.val()) {
                            for (let key in snapshot.val()) {
                                let obj = Object.assign({}, snapshot.val()[key]);
                                obj['$key'] = key
                                CompanyAction.addPost(obj);
                            }
                        }
                    })
                }
                return Observable.of({
                    type: CompanyAction.NULL
                })
            })
    // static getOneCompanyPost = (action$) =>
    //     action$.ofType('GET_ONE_POST_BY_COMPANY')
    //         .switchMap(({
    //             payload
    //         }) => {

    //             return firebase.database().ref(`/company-posts/${payload.coId}/${payload.key}`).once("value")
    //                 .mergeMap((posts) => {
    //                     if (posts) {
    //                         return Observable.of({
    //                             type: 'GET_ONE_POST_BY_COMPANY_SUCCESS',
    //                             payload: posts
    //                         })
    //                     } else {
    //                         return Observable.of({
    //                             type: 'GET_ONE_POST_BY_COMPANY_FAIL',
    //                             payload: []
    //                         })
    //                     }
    //                 })
    //         })
    // static getPosts = (action$) =>
    //     action$.ofType('GET_POST')
    //         .switchMap((payload) => {
    //             if (payload) {
    //                 firebase.database().ref(`/posts`).off('value')
    //                 firebase.database().ref(`/posts`).on('value', (snapshot) => {
    //                     if (snapshot.val()) {
    //                         for (let key in snapshot.val()) {
    //                             let obj = Object.assign({}, snapshot.val()[key]);
    //                             obj['$key'] = key
    //                             CompanyAction.addPost(obj);
    //                         }
    //                     }
    //                 })
    //             }
    //             return Observable.of({
    //                 type: CompanyAction.NULL
    //             })
    //         })
}