
import { actionConstants } from './action-consts';
import axios from 'axios';
import { object } from 'prop-types';



//-------------------------------------------------------------------       SIGN IN
const baseUrl = 'http://localhost:3001';

// ACTION
export const signInAction = (email, password) => {

  return dispatch => {
    dispatch(signInStarted());
    axios.post(`${baseUrl}/signin`, {email, password})
      .then(res => {
        console.log(res.data)
        if (res.data.error) {
          dispatch(signInFailure(res.data.error))
        } else {
          dispatch(signInSuccess(res.data));
        }
      })
      .catch(err => {
        dispatch(signInFailure(err.message));
      })
  }
};

// REACTION
const signInSuccess = (res) => ({
  type: actionConstants.SIGN_IN_SUCCESS,
  payload: res
});

const signInStarted = () => ({
  type: actionConstants.SIGN_IN_STARTED
});

const signInFailure = (error) => ({
  type: actionConstants.SIGN_IN_ERROR,
  payload: error
});


//-------------------------------------------------------------------       SIGN UP


// ACTION
export const signUpAction = (email, password) => {
  return dispatch => {
    dispatch(signUpStarted());
    axios.post(`${baseUrl}/signup`, {email, password})
      .then(res => {
        console.log(res.data)
        if (typeof res.data == 'object') {
          dispatch(signUpFailure(res.data.error))
        } else {
          dispatch(signUpSuccess(res.data));
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(signUpFailure(err.message));
      })
  }
};

// REACTION
const signUpSuccess = (uid) => ({
  type: actionConstants.SIGN_UP_SUCCESS,
  payload: uid
});

const signUpStarted = () => ({
  type: actionConstants.SIGN_UP_STARTED
});

const signUpFailure = (error) => ({
  type: actionConstants.SIGN_UP_ERROR,
  payload: error
});

//-------------------------------------------------------------------       SIGN OUT


// ACTION
export const signOutAction = () => {
  return dispatch => {
    dispatch(signOut());
  }
};
    

// REACTION
const signOut = () => ({
  type: actionConstants.SIGN_OUT_SUCCESS
})

//-------------------------------------------------------------------       GET USER


// // ACTION
export const getUserAction = (uid) => {

  return dispatch => {
    dispatch(getUserStarted());
    axios.post(`${baseUrl}/user`, {uid})
      .then(res => {
        dispatch(getUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(getUserFailure(err.message));
      })
  }
};

// REACTION
const getUserSuccess = (user) => ({
  type: actionConstants.GET_USER_SUCCESS,
  payload: user
});

const getUserStarted = () => ({
  type: actionConstants.GET_USER_STARTED
});

const getUserFailure = (error) => ({
  type: actionConstants.GET_USER_ERROR,
  payload: error
});

// //-------------------------------------------------------------------       EDIT USER


// // ACTION
export const editUserAction = (uid, user) => {

  return dispatch => {
    dispatch(editUserStarted());
    axios.post(`${baseUrl}/user-edit`, {uid, user})
      .then(res => {
        dispatch(editUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(editUserFailure(err.message));
        console.log(err)
      })
  }
};

// REACTION
const editUserSuccess = (res) => ({
  type: actionConstants.EDIT_USER_SUCCESS,
  payload: res
});

const editUserStarted = () => ({
  type: actionConstants.EDIT_USER_STARTED
});

const editUserFailure = (error) => ({
  type: actionConstants.EDIT_USER_ERROR,
  payload: error
});


// //-------------------------------------------------------------------       CHANGE CART


// // ACTION
export const cartChangeAction = (cart) => {

  return dispatch => {
    dispatch(cartChange(cart));
  }
};

// REACTION
const cartChange = (cart) => ({
  type: actionConstants.CART_CHANGE_SUCCESS,
  payload: cart
});



// //-------------------------------------------------------------------       GET CATALOG


// // ACTION
export const getCatalogAction = () => {

  return dispatch => {
    dispatch(getCatalogStarted());
    axios.get(`${baseUrl}/catalog`)
      .then(res => {
        dispatch(getCatalogSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCatalogFailure(err.message));
      })
  }
};

// REACTION
const getCatalogSuccess = (res) => ({
  type: actionConstants.GET_CATALOG_SUCCESS,
  payload: res
});

const getCatalogStarted = () => ({
  type: actionConstants.GET_CATALOG_STARTED
});

const getCatalogFailure = (error) => ({
  type: actionConstants.GET_CATALOG_ERROR,
  payload: error
});


