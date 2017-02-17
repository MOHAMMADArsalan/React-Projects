import { ParkingAction } from "./../actions/index.js";
const InitailState = {
    parkings: [],
    posts: [],
    temp: {},
    isLoading: false,
    companyPost: [],
    avail: [],
    'parking-detail': [],
    feedbacks: {}
}

export const parkingReducer = (state = InitailState, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_PARKING_LOCATION':
            newState = state;
            newState.parkings = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)

        case 'GET_PARKING_LOCATION':
            return Object.assign({}, state, { isLoading: true });

        case "GET_PARKING_LOCATION_FAIL":
            return Object.assign({}, state, { isLoading: false })

        case "GET_PARKING_DETAILS_BY_USER":
            return Object.assign({}, state, { isLoading: true });

        case "GET_PARKING_DETAILS_BY_USER_SUCCESS":
        
            newState = state;
            newState['parking-detail'] = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)

        case "GET_PARKING_DETAILS_BY_USER_FAIL":
            return Object.assign({}, state, { isLoading: false })

        case "GET_ONE_PARKING_DATA":
            return Object.assign({}, state, { isLoading: true });

        case "GET_ONE_PARKING_DATA_SUCCESS":
            newState = state.temp;
            newState = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, { temp: newState })

        case "GET_ONE_PARKING_DATA_FAIL":
            return Object.assign({}, state, { isLoading: false })

        case "GET_PARKING_LOCATION_AVAILABLITY":
            return Object.assign({}, state, { isLoading: true });

        case "GET_PARKING_LOCATION_AVAILABLITY_SUCCESS":
            newState = state;
            newState['avail'] = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)

        case "GET_PARKING_LOCATION_AVAILABLITY_FAIL":

            return Object.assign({}, state, { isLoading: false })

        case 'GET_USER_FEEDBACK':
            return Object.assign({}, state, { isLoading: true });

        case 'GET_USER_FEEDBACK_SUCCESS':
            console.log("GET_USER_FEEDBACK_SUCCESS", action.payload)
            newState = state;
            newState.feedbacks = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)

        case 'GET_USER_FEEDBACK_SUCCESS':
            return Object.assign({}, state, { isLoading: false })
        default:
            return state;
    }
}