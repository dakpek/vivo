import axios from 'axios';
import { actionConstants } from './action-consts'

const BASE_URL = `http://devapi.localties.io:8084`;
// const BASE_URL = `http://localhost:3001`;

                                                                                // SIGN IN
// ACTION
export const signInAction = (merchant) => {
  let ROUTE = '/merchantsignin';
  const url = BASE_URL + ROUTE;

  return dispatch => {
    dispatch(signInStarted());
    axios.post(url, merchant)
      .then(res => {
        dispatch(signInSuccess(res));
      })
      .catch(err => {
        dispatch(signInFailure(err.message));
      })
  }
};

// REACTION
const signInSuccess = (merchant) => ({
  type: actionConstants.SIGN_IN_SUCCESS,
  payload: merchant
});

const signInStarted = () => ({
  type: actionConstants.SIGN_IN_STARTED
});

const signInFailure = (error) => ({
  type: actionConstants.SIGN_IN_ERROR,
  payload: error
});


// ACTION                                                                       // SIGN UP
export const signUpAction = (merchant) => {
  let ROUTE = 'merchant';

  return dispatch => {
    dispatch(signUpStarted());
    ApiClient.req('post', ROUTE, '', merchant, 'admin')
      .then(res => {
        dispatch(signUpSuccess(res));
      })
      .catch(err => {
        dispatch(signUpFailure(err.message));
      })
  }
};

// REACTION
const signUpSuccess = (merchant) => ({
  type: actionConstants.SIGN_UP_SUCCESS,
  payload: merchant
});

const signUpStarted = () => ({
  type: actionConstants.SIGN_UP_STARTED
});

const signUpFailure = (error) => ({
  type: actionConstants.SIGN_UP_ERROR,
  payload: error
});
