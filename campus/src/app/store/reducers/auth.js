import { AuthActions } from '../actions';

const InitalState= {
  isLoading: false,
  isError: { status: false, msg: null },
  isLoggedin: false,
  user: {},
  isRegistered: false,
};

export const authReducer = function (state= InitalState, action) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return Object.assign({}, state, { isLoading: true });
    case AuthActions.LOGIN_FAIL:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: {} });
    case AuthActions.LOGIN_SUCCESS:
    console.log("isLoggedin")
      return Object.assign({}, state, { isLoading: false, isLoggedin: true, user: action.payload });
    case AuthActions.LOGOUT_FAIL:
      return Object.assign({}, state, { isLoading: false });
    case AuthActions.LOGOUT_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: {} });
    // case AuthActions.SETCURRENTUSERDATA:
    //   return Object.assign({}, state, { user: Object.assign({}, state.user, action.payload) });
    case AuthActions.SIGN_UP:
      return Object.assign({}, state, { isLoading: true, isRegistered: false });
    case AuthActions.SIGN_UP_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isRegistered: true });
    case AuthActions.SIGN_UP_FAIL:
      return Object.assign({}, state, { isLoading: false, isError: action.payload.isError });
    
    // case AuthActions.GET_USER_INFO:
    // console.log("GET_USER_INFO fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfc")
    
    //   return Object.assign({}, state, { isLoadding: true });
    case AuthActions.GET_USER_INFO_SUCCESS:
    console.log("GET_USER_INFO_SUCCESS")
      return Object.assign({}, state, { user: action.payload, isLoading: false });
    case AuthActions.GET_USER_INFO_FAIL:
      return Object.assign({}, state, { isLoadding: false });
    default:
      return state;
  }
}