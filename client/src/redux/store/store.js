import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/Reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [logger, thunk];

//get user from local storage and save in the store

var signupTokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

var loginTokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

var initialState = {
  signup: {
    signup_token: signupTokenFromLocalStorage,
    data: {
      user:{
        token: ""
      }
    },
    isLoading: false,
    error: {
      data: {
        message: ""
      }
    }
  },
  login: {
    login_token: loginTokenFromLocalStorage,
    data: {
      token: ""
    },
    isLoading: false,
    error: {
      data: {
        message: ""
      }
    }
  },
  forgotPassword: {
      data: {},
      isLoading:false,
      error: {
        data: {
        status: '',
        message: ''
      }}
  },
  services:{
    data: {
      data:{
      services:[]
    }},
    isLoading:false,
    error: {}
  },
  servicesDetails:{
    data: {
      data:{
      service:{
        otherServices:[]
      }
    }},
    isLoading: false,
    error:{}
  }

};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
