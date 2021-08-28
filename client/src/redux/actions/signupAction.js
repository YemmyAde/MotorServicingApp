import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from './actionType.js';
import axios from 'axios';
import { config } from '../../config.js';
const { BASEURL } = config;

const signupRequest = () => ({
  type: USER_REGISTER_REQUEST,
});

const signupSuccess = (data) => ({
  type: USER_REGISTER_SUCCESS,
  payload: data,
});

const signupFailure = (error) => ({
  type: USER_REGISTER_FAILURE,
  payload: error,
});

const signupAsync = (data) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const response = await axios.post(`${BASEURL}/signup`, data);
    dispatch(signupSuccess(response.data));
    // localStorage.setItem('token', response.data.user.token)
    return response.data.status;
  } catch (error) {
    dispatch(signupFailure(error.response));
  }
};

export default signupAsync;
