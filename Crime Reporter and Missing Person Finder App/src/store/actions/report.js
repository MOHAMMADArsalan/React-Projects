import store from "./../index"

export class ReportActions {

    constructor() { }

    static GET_REPORT = 'GET_REPORT';
    static GET_REPORT_SUCCESS = 'GET_REPORT_SUCCESS';
    static GET_REPORT_FAIL = 'GET_REPORT_FAIL';

    static GET_USER_REPORT = 'GET_USER_REPORT';
    static GET_USER_REPORT_SUCCESS = 'GET_USER_REPORT_SUCCESS';
    static GET_USER_REPORT_FAIL = 'GET_USER_REPORT_FAIL';

    // static GET_PRODUCT = 'GET_PRODUCT'
    // static GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
    // static GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL'

    static getReport = () => {
        return {
            type: ReportActions.GET_REPORT
        }
    }

    static addReport = (payload) => {
        store.dispatch({
            type: ReportActions.GET_REPORT_SUCCESS,
            payload: payload
        })
    }
    static addUserReport = (payload) => {
        store.dispatch({
            type: ReportActions.GET_USER_REPORT_SUCCESS,
            payload: payload
        })
    }

    static getUserReport = (uid) => {
        return {
            type: ReportActions.GET_USER_REPORT,
            payload: { uid }
        }
    }
}