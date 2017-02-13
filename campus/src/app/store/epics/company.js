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
            })
    static getCompanyPost = (action$) =>
        action$.ofType('GET_POST_BY_COMPANY')
            .switchMap(({
                payload
            }) => {
                if (payload) {
                    firebase.database().ref(`/company-posts/${payload.uid}`).off('value')
                    firebase.database().ref(`/company-posts/${payload.uid}`).on('value', (snapshot) => {
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
                    firebase.database().ref(`/posts`).off('value')
                    firebase.database().ref(`/posts`).on('value', (snapshot) => {
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
}