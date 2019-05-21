import { combineReducers } from 'redux';

import { firebaseReducer } from 'react-redux-firebase'
import { signIn, signUp } from './authentication';
import { merchantDetails } from './merchant';


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  signIn,
  signUp,
  merchantDetails
});

export default rootReducer;
