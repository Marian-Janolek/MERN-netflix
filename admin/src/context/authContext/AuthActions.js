import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_START } from '../';

export const loginStart = () => ({ type: LOGIN_START });
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
export const loginFailure = () => ({ type: LOGIN_FAIL });
