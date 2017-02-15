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
                            let obj = {};
                            for (let key in snapshot.val()) {
                                obj[key] = snapshot.val()[key];
                            }
                            ParkingAction.addParkingLocation(obj)
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
                    // let array = [];
                    firebase.database().ref(`/user-parking/${payload.uid}`).off('value')
                    firebase.database().ref(`/user-parking/${payload.uid}`).on('value', (snapshot) => {
                        if (snapshot.val()) {
                            console.log("GET_PARKING_DETAILS_BY_USER", snapshot.val())
                            let obj = {};

                            for (let key in snapshot.val()) {
                                obj[key] = snapshot.val()[key];
                            }
                            console.log("GET_PARKING_DETAILS_BY_USER", obj)
                            // for (let key in snapshot.val()) {
                            //     let obj = Object.assign({}, snapshot.val()[key]);
                            //     obj['$key'] = key;
                            //     array.push(obj)
                            // }
                            ParkingAction.addParkingItem(obj)
                        }
                    })
                }
                return Observable.of({
                    type: ParkingAction.NULL
                })
            })
    static getOneParkingData = (action$) =>
        action$.ofType('GET_ONE_PARKING_DATA')
            .switchMap(({payload}) => {
                return Observable.fromPromise(firebase.database().ref(`/parking-location/${payload.locationId}/${payload.slotId}`).once('value'))
                    .map((slot) => {
                        if (slot) {
                            return {
                                type: 'GET_ONE_PARKING_DATA_SUCCESS',
                                payload: slot.val()
                            }
                        } else {
                            return Observable.of({
                                type: 'GET_ONE_PARKING_DATA_FAIL',
                                payload: {}
                            })
                        }
                    })
            })

    static getParkingAvailablity = (action$) =>
        action$.ofType('GET_PARKING_LOCATION_AVAILABLITY')
            .switchMap(({payload}) => {
                let availablityArray = [];
                if (payload) {
                    firebase.database().ref(`/parking-availablity/${payload.locationId}/${payload.slotId}/${payload.date}`).on("value", (detail) => {
                        if (detail.val()) {
                            for (let key in detail.val()) {
                                detail.val()[key].map((availablity) => {
                                    availablityArray.push(availablity)
                                })
                            }
                            ParkingAction.addParkingAvailblity(availablityArray)
                        }
                        return Observable.of({
                            type: 'GET_PARKING_LOCATION_AVAILABLITY_FAIL',
                            payload: []
                        })
                    })
                }
                return Observable.of({
                    type: 'GET_PARKING_LOCATION_AVAILABLITY_FAIL',
                    payload: []
                })

            })

    static getFeedbacks = (action$) =>
        action$.ofType('GET_USER_FEEDBACK')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/").child('/feedback').off('value')
                    firebase.database().ref("/").child('/feedback').on('value', (snapshot) => {
                        if (snapshot.val()) {
                            let obj = {};
                            for (let key in snapshot.val()) {
                                obj[key] = snapshot.val()[key];
                            }
                            ParkingAction.getUserFeedbackSuccess(obj)
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PARKING_LOCATION_FAIL',
                    payload: []
                })
            })
}