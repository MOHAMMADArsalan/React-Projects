import { AuthActions } from '../actions/auth.js';

const InitalState = {
  isLoading: false,
  isError: { status: false, msg: null },
  isLoggedin: false,
  user: {},
  isRegistered: false,
  users: {}
};

export const authReducer = function (state = InitalState, action) {
  console.log("GET_ALL_USER_SUCCESS",action)
  let newState;
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { isLoading: true });
    case 'LOGIN_FAIL':
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: {} });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, { isLoading: false, isLoggedin: true, user: action.payload });
    case 'LOGOUT_FAIL':
      return Object.assign({}, state, { isLoading: false });
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: {} });
    // case AuthActions.SETCURRENTUSERDATA:
    //   return Object.assign({}, state, { user: Object.assign({}, state.user, action.payload) });
    case 'SIGN_UP':
      return Object.assign({}, state, { isLoading: true, isRegistered: false });
    case 'SIGN_UP_SUCCESS':
      return Object.assign({}, state, { isLoading: false, isRegistered: true });
    case 'SIGN_UP_FAIL':
      return Object.assign({}, state, { isLoading: false, isError: action.payload.isError });

    case 'GET_ALL_USER_SUCCESS':
      newState = state;
      newState['users'] = action.payload;
      newState.isLoading = false;
      return Object.assign({}, state, newState);

    case 'GET_ALL_USER_FAIL':
      return Object.assign({}, state, { isLoadding: false });


    default:
      return state;
  }
}