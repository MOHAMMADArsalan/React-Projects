import { AuthActions } from "./../actions/auth.js";
const initialState = {
    isLoading: false,
    user: {},
    isLoggedIn: false,
    isRegister: false,
    error: {}
}
export const authReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // REGISTER Action handlers
        case AuthActions.REGISTER:
            return Object.assign({}, state, { isLoading: true });

        case AuthActions.REGISTER_SUCCESS:
            newState = state;
            newState['isLoading'] = false;
            newState['register'] = true;
            return Object.assign({}, state, newState)

        case AuthActions.REGISTER_FAIL:
            return Object.assign({}, state, { isLoading: false });
        // REGISTER Action handlers End

        // LOGIN Action handlers
        case AuthActions.LOGIN:
            return Object.assign({}, state, { isLoading: true });

        case AuthActions.LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS: ", action.payload)
            newState = state;
            newState['isLoading'] = false;
            newState['user'] = action.payload;
            return Object.assign({}, state, newState)

        case AuthActions.LOGIN_FAIL:
            return Object.assign({}, state, { isLoading: false })
        // LOGIN Action handlers End

        //default state return
        default:
            return state;
    }
}