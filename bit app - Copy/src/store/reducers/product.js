import { ProductActions } from "./../actions/index";
const initialState = {
    isLoading: false,
    category: {},
    product: {},
    error: {}
}
export const productReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // CATEGORY Action handlers
        case 'GET_CATEGORY':
            return Object.assign({}, state, { isLoading: true })
        case 'GET_CATEGORY_SUCCESS':

            newState = Object.assign({}, state.category);
            newState[action.payload.key] = action.payload.name;
            return Object.assign({}, state, { isLoading: false, category: newState })

        case 'GET_CATEGORY_FAIL':
            return Object.assign({}, state, { isLoading: false })

        case 'GET_PRODUCT':
            return Object.assign({}, state, { isLoading: true })

        case 'GET_PRODUCT_SUCCESS':
            newState = Object.assign({}, state.product);
            newState[action.payload.value.category] = action.payload.value;

            return Object.assign({}, state, { isLoading: false, product: newState })
        case 'GET_PRODUCT_FAIL':
            return Object.assign({}, state, { isLoading: false })
        //default state return
        default:
            return state;
    }
}