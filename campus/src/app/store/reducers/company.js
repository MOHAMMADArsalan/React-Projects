// import { CompanyAction } from "./../actions/index.js";
import { CompanyAction } from "./../actions/company.js"
console.log("CompanyAction", CompanyAction)
const InitailState = {
    companies: [],
    posts: [],
    temp: {},
    isLoading: false
}

export const companyReducer = (state = InitailState, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_POST':
            newState = state.posts;
            newState.push({ value: action.payload });
            return Object.assign({}, state, { posts: newState });
        case 'ADD_COMPANY':
            newState = state.companies;
            console.log("newState companies",newState)
            newState.push({ value: action.payload });
            return Object.assign({}, state, { companies: newState });
        case 'GET_COMPANY':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_COMPANY_SUCCESS':
            newState = state;
            newState.companies = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)
        case 'GET_COMPANY_FAIL':
            return Object.assign({}, state, { isLoading: false })
        case 'GET_POST_BY_COMPANY':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_POST_BY_COMPANY_SUCCESS':
            newState = state;
            newState.posts = action.payload;
            newState.isLoading = false;
            // console.log("Object.assign({}, state, newState);",Object.assign({}, state, newState))
            return Object.assign({}, state, newState);
        case 'GET_POST_BY_COMPANY_FAIL':
            return Object.assign({}, state, { isLoading: false });

        case 'GET_POST':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_POST_SUCCESS':
            newState = state;
            newState.posts = action.payload;
            newState.isLoading = false;
            // console.log("Object.assign({}, state, newState);",Object.assign({}, state, newState))
            return Object.assign({}, state, newState);
        case 'GET_POST_FAIL':
            return Object.assign({}, state, { isLoading: false });



        case 'GET_ONE_POST_BY_COMPANY':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_ONE_POST_BY_COMPANY_SUCCESS':
            newState = state;
            newState.temp = action.payload;
            newState.isLoading = false;
            // console.log("Object.assign({}, state, newState);",Object.assign({}, state, newState))
            return Object.assign({}, state, newState);
        case 'GET_ONE_POST_BY_COMPANY_FAIL':
            return Object.assign({}, state, { isLoading: false });


        default:
            return state;
    }
}