import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from './AuthActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('/auth/login', user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
