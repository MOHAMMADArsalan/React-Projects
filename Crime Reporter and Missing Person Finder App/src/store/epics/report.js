import { ReportActions } from "./../actions/index.js"
import * as firebase from "firebase";
import { FirebaseService } from "./../../services/firebaseService.js"
import { Observable } from "rxjs"
export class ReportEpic {
    constructor() { }
    static getReport = (actions$) =>
        actions$.ofType('GET_REPORT')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/reports").on("value", (snapshot) => {
                        if (snapshot.val()) {
                            ReportActions.addReport(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_REPORT_FAIL',
                    payload: {}
                })
            })

    static getUserReport = (actions$) =>
        actions$.ofType('GET_USER_REPORT')
            .switchMap(({payload}) => {
                if (payload) {
                    firebase.database().ref(`/user-reports/${payload.uid}`).on("value", (snapshot) => {
                        if (snapshot.val()) {
                            console.log("GET_USER_REPORT",snapshot.val())
                            ReportActions.addUserReport (snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PRODUCT_FAIL',
                    payload: {}
                })
            })

}


