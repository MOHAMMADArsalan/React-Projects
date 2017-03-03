import { ReportActions } from "./../actions/index";
const initialState = {
    isLoading: false,
    reports: {},
    userReports: {},
    error: {}
}
export const ReportReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // CATEGORY Action handlers
        case 'GET_REPORT':
            return Object.assign({}, state, { isLoading: true })
        case 'GET_REPORT_SUCCESS':

            newState = Object.assign({}, state.reports);
            newState= action.payload;
            return Object.assign({}, state, { isLoading: false, reports: newState })

        case 'GET_REPORT_FAIL':
            return Object.assign({}, state, { isLoading: false })

        case 'GET_USER_REPORT':
            return Object.assign({}, state, { isLoading: true })

        case 'GET_USER_REPORT_SUCCESS':
            newState = Object.assign({}, state.userReports);
            newState = action.payload;

            return Object.assign({}, state, { isLoading: false, userReports: newState })
        case 'GET_USER_REPORT_FAIL':
            return Object.assign({}, state, { isLoading: false })
        //default state return
        default:
            return state;
    }
}