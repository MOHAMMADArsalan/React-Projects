import { AuthActions } from "./../actions/auth.js";
const initialState = {
    isLoading: false,
    user: {},
    isLoggedIn: false,
    register: false
}
export const authReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case AuthActions.REGISTER:
            return Object.assign({}, state, { isLoading: true });
        case AuthActions.REGISTER_SUCCESS:
            newState = state;
            return Object.assign({}, state, )

    }
}