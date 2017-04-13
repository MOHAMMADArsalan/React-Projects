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

    case 'SIGN_UP':
      return Object.assign({}, state, { isLoading: true, isRegistered: false });
    
    case 'SIGN_UP_SUCCESS':

      return Object.assign({}, state, { isLoading: false, isRegistered: true });
    
    case 'SIGN_UP_FAIL':
      return Object.assign({}, state, { isLoading: false, isError: action.payload.isError });

    default:
      return state;
  }
}