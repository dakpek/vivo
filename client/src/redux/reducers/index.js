import { combineReducers } from 'redux';

import { user } from './authentication';
import { cart } from './cart';
import { boxes } from './boxes';


const rootReducer = combineReducers({
  user,
  cart,
  boxes
});

export default rootReducer;
