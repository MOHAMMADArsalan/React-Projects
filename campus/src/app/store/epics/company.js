import {
    CompanyAction
} from "./../actions/index.js";
import {
    Observable
} from "rxjs";
import * as firebase from "firebase";
export class CompanyEpics {
    constructor() { }

    static getCompanies = (action$) =>
        action$.ofType('GET_COMPANY')
            .switchMap(({
                payload
            }) => {
                if (!payload) {
                    firebase.database().ref("/").child('companies').off('value')
                    firebase.database().ref("/").child('companies').on('value', (snapshot) => {
                        if (snapshot.val()) {
                            for (let key in snapshot.val()) {
                                let obj = Object.assign({}, snapshot.val()[key]);
                                obj['$key'] = key
                                CompanyAction.addCompany(obj);
                            }
                        }
                    })
                }
                return Observable.of({
                    type: CompanyAction.NULL
                })
                // return Observable.fromPromise(firebase.database().ref("/").child('companies').once('value'))
                //     .map((snapshot) => {
                //         let array = [];
                //         if (snapshot.val()) {
                //             let obj = {}
                //             for (let key in snapshot.val()) {
                //                 obj['key'] = key
                //                 obj['value'] = snapshot.val()[key]
                //                 array.push(obj);
                //                 CompanyAction.addCompany(obj)
                //             }
                //             return {
                //                 type: 'GET_COMPANY_SUCCESS',
                //                 payload: array
                //             }
                //         }
                //     })
                // else {
                //     return Observable.of({
                //         type: 'NULL'
                //     })
                // }
                // firebase.database().ref("/companies").off("value")
                // firebase.database().ref("/companies").on("value", (companies) => {

                //     // companies.val().mergeMap((company) => {
                //     if (companies.val()) {
                //         return Observable.of({
                //             type: CompanyAction.GET_COMPANY_SUCCESS,
                //             payload: companies.val()
                //         })
                //     } else {
                //         return Observable.of({
                //             type: CompanyAction.GET_COMPANY_FAIL,
                //             payload: {}
                //         })
                //     }
                //     // })
                // })
                //this.af.database.list("/companies")
            })
    static getCompanyPost = (action$) =>
        action$.ofType('GET_POST_BY_COMPANY')
            .switchMap(({
                payload
            }) => {
                console.log("payloadddddddddddd", payload)
                if (payload) {
                    firebase.database().ref(`/company-posts/${payload.uid}`).off('child_added')
                    firebase.database().ref(`/company-posts/${payload.uid}`).on('child_added', (snapshot) => {
                        if (snapshot.val()) {
                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            CompanyAction.addPost(obj);
                        }
                    })
                }
                return Observable.of({
                    type: CompanyAction.NULL
                })
                // firebase.database().ref(`/company-posts/${payload.uid}`).off("value")
                // return firebase.database().ref(`/company-posts/${payload.uid}`).on("value")
                //     // return this.af.database.list(`/company-posts/${payload.uid}`)
                //     .mergeMap((posts) => {
                //         if (posts) {
                //             return Observable.of({
                //                 type: 'GET_POST_BY_COMPANY_SUCCESS',
                //                 payload: posts
                //             })
                //         } else {
                //             return Observable.of({
                //                 type: 'GET_POST_BY_COMPANY_FAIL',
                //                 payload: []
                //             })
                //         }
                //     })

            })
    static getOneCompanyPost = (action$) =>
        action$.ofType('GET_ONE_POST_BY_COMPANY')
            .switchMap(({
                payload
            }) => {

                return firebase.database().ref(`/company-posts/${payload.coId}/${payload.key}`).once("value")
                    .mergeMap((posts) => {
                        if (posts) {
                            return Observable.of({
                                type: 'GET_ONE_POST_BY_COMPANY_SUCCESS',
                                payload: posts
                            })
                        } else {
                            return Observable.of({
                                type: 'GET_ONE_POST_BY_COMPANY_FAIL',
                                payload: []
                            })
                        }
                    })
            })
    static getPosts = (action$) =>
        action$.ofType('GET_POST')
            .switchMap((payload) => {
                if (payload) {
                    firebase.database().ref(`/posts`).off('child_added')
                    firebase.database().ref(`/posts`).on('child_added', (snapshot) => {
                        if (snapshot.val()) {
                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            CompanyAction.addPost(obj);
                        }
                    })
                }
                return Observable.of({
                    type: CompanyAction.NULL
                })
                // firebase.database().ref(`/posts`).off("value")
                // return Observable.fromPromise(firebase.database().ref(`/posts`).once("value"))
                //     .mergeMap((posts) => {
                //         console.log("postsposts", posts.val())
                //         if (posts) {
                //             return Observable.of({
                //                 type: 'GET_POST_SUCCESS',
                //                 payload: posts.val()
                //             })
                //         } else {
                //             return Observable.of({
                //                 type: 'GET_POST_FAIL',
                //                 payload: []
                //             })
                //         }
                //     })
            })
}