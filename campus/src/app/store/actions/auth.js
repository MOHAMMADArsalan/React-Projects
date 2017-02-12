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

    static GET_USER_INFO = 'GET_USER_INFO';
    static GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
    static GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';

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
    static  isLoggedIn() {
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