
import { actionConstants } from './action-consts';
import axios from 'axios';



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
        if (res.data.error) {
          dispatch(signUpFailure(res.data.error))
        } else {
          console.log('RES: ', res.data)
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
const signUpSuccess = (res) => ({
  type: actionConstants.SIGN_UP_SUCCESS,
  payload: res
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
    dispatch(cartChangeStarted());
    dispatch(cartChange(cart));
  }
};

// REACTION
const cartChangeStarted = () => ({
  type: actionConstants.CART_CHANGE_STARTED
});

const cartChange = (cart) => ({
  type: actionConstants.CART_CHANGE_SUCCESS,
  payload: cart
});



// //-------------------------------------------------------------------       GET BOXES


// // ACTION
export const getBoxesAction = () => {

  return dispatch => {
    dispatch(getBoxesStarted());
    axios.get(`${baseUrl}/boxes`)
      .then(res => {
        dispatch(getBoxesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getBoxesFailure(err.message));
      })
  }
};

// REACTION
const getBoxesSuccess = (res) => ({
  type: actionConstants.GET_BOXES_SUCCESS,
  payload: res
});

const getBoxesStarted = () => ({
  type: actionConstants.GET_BOXES_STARTED
});

const getBoxesFailure = (error) => ({
  type: actionConstants.GET_BOXES_ERROR,
  payload: error
});


