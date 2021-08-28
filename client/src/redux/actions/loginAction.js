import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from './actionType.js';
import axios from 'axios';
import { config } from '../../config.js';
const { BASEURL } = config;

const loginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

const loginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

const loginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

const loginAsync = (data) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await axios.post(`${BASEURL}/login`, data);
    dispatch(loginSuccess(response.data));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    return response.data.message;
  } catch (error) {
    dispatch(loginFailure(error.response));
  }
};

export default loginAsync;
