import { store } from "./../index.js"

export class AuthActions {

    static REGISTER = 'REGISTER';

    static ISLOGGEDIN = 'ISLOGGEDIN';

    static LOGIN = 'LOGIN';
    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    static LOGIN_FAIL = 'LOGIN_FAIL';


    static SIGN_UP = 'SIGN_UP';
    static SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
    static SIGN_UP_FAIL = 'SIGN_UP_FAIL';

    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    static LOGOUT_FAIL = 'LOGOUT_FAIL';

    static GET_ALL_USER = 'GET_ALL_USER';
    static GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
    static GET_ALL_USER_FAIL = 'GET_ALL_USER_FAIL';

    static NULL = 'NULL';

    constructor() {
    }

    static register(user) {
        return {
            type: AuthActions.SIGN_UP,
            payload: user
        };
    }

    static login(credentials) {
        return {
            type: AuthActions.LOGIN,
            payload: credentials
        };
    }
    static isLoggedIn() {
        return {
            type: AuthActions.ISLOGGEDIN
        }
    }
    static logout() {
        return {
            type: AuthActions.LOGOUT
        }
    }
}