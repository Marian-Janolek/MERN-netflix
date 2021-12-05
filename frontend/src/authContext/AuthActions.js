import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_START, LOGOUT } from './constants';

// login
export const loginStart = () => ({ type: LOGIN_START });
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
export const loginFailure = () => ({ type: LOGIN_FAIL });

// logout
export const logout = () => ({ type: LOGOUT });
