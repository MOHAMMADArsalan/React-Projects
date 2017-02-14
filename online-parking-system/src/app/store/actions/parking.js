import { store } from "./../index.js"
export class ParkingAction {

    static ADD_PARKING_LOCATION = 'ADD_PARKING_LOCATION';


    static GET_PARKING_LOCATION = 'GET_PARKING_LOCATION';
    static GET_PARKING_LOCATION_SUCCESS = 'GET_PARKING_LOCATION_SUCCESS';
    static GET_PARKING_LOCATION_FAIL = 'GET_PARKING_LOCATION_FAIL';

    static GET_PARKING_DETAILS_BY_USER = 'GET_PARKING_DETAILS_BY_USER';
    static GET_PARKING_DETAILS_BY_USER_SUCCESS = 'GET_PARKING_DETAILS_BY_USER_SUCCESS';
    static GET_PARKING_DETAILS_BY_USER_FAIL = 'GET_PARKING_DETAILS_BY_USER_FAIL';

    static GET_ONE_PARKING_DATA = 'GET_ONE_PARKING_DATA';
    static GET_ONE_PARKING_DATA_SUCCESS = 'GET_ONE_PARKING_DATA_SUCCESS';
    static GET_ONE_PARKING_DATA_FAIL = 'GET_ONE_PARKING_DATA_FAIL';

    static GET_PARKING_LOCATION_AVAILABLITY = 'GET_PARKING_LOCATION_AVAILABLITY';
    static GET_PARKING_LOCATION_AVAILABLITY_SUCCESS = 'GET_PARKING_LOCATION_AVAILABLITY_SUCCESS';
    static GET_PARKING_LOCATION_AVAILABLITY_FAIL = 'GET_PARKING_LOCATION_AVAILABLITY_FAIL';
    static NULL = 'NULL'
    constructor() { }
    static addParkingLocation(payload) {

        store.dispatch({
            type: ParkingAction.ADD_PARKING_LOCATION,
            payload
        })
    }
    static addParkingAvailblity(payload) {
        store.dispatch({
            type: ParkingAction.GET_PARKING_LOCATION_AVAILABLITY_SUCCESS,
            payload
        })
    }
    static addParkingItem(payload) {
        store.dispatch({
            type: ParkingAction.GET_PARKING_DETAILS_BY_USER_SUCCESS,
            payload
        })
    }
    static addCompanyPost(payload) {
        store.dispatch({
            type: CompanyAction.ADD_COMPANY_POST,
            payload
        })
    }
    static getParking() {
        return {
            type: ParkingAction.GET_PARKING_LOCATION
        }
    }
    static getParkingDetailByUser(uid) {
        console.log("getParkingDetailByUser",uid)
        return {
            type: ParkingAction.GET_PARKING_DETAILS_BY_USER,
            payload: { uid }
        }
    }
    // static getOneParkingData(locationId, slotId) {
    //     return {
    //         type: CompanyAction.GET_POST
    //     }
    // }
    static getOneParkingData(locationId, slotId) {
        return {
            type: ParkingAction.GET_ONE_PARKING_DATA,
            payload: { locationId, slotId }
        }
    }
    static getParkingAvailablity(locationId, slotId, date) {
        return {
            type: ParkingAction.GET_PARKING_LOCATION_AVAILABLITY,
            payload: { locationId, slotId, date }
        }
    }
}