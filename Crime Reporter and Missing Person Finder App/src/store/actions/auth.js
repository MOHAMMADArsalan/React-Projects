export class AuthActions {

    constructor() {
        console.log("AuthActions")
    }
    static REGISTER = 'REGISTER';
    static REGISTER_SUCCESS = 'REGISTER_SUCCESS';
    static REGISTER_FAIL = 'REGISTER_FAIL';

    static LOGIN = 'LOGIN';
    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    static LOGIN_FAIL = 'LOGIN_FAIL';

    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    static LOGOUT_FAIL = 'LOGOUT_FAIL';

    static register = (obj) => {
        return {
            type: AuthActions.REGISTER,
            payload: obj,
        }
    }
    static login = (email, password) => {
        return {
            type: AuthActions.LOGIN,
            payload: { email, password }
        }
    }

    static logout = () => {
        return {
            type: AuthActions.LOGOUT
        }
    }
}