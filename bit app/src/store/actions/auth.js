export class AuthActions {

    constructor() {

    }
    static REGISTER = 'REGISTER';
    static REGISTER_SUCCESS = 'REGISTER_SUCCESS';
    static REGISTER_FAIL = 'REGISTER_FAIL';

    static LOGIN = 'LOGIN';
    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    static LOGIN_FAIL = 'LOGIN_FAIL';

    static register = (obj) => {
        return {
            type: AuthActions.REGISTER,
            payload: obj,
        }
    }
    static login = (email, password) => {
        console.log("mapDispatchToProps", email, password)
        return {
            type: AuthActions.LOGIN,
            payload: { email, password }
        }

    }
}