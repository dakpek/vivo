import { combineReducers } from 'redux';

import { user } from './authentication';
import { cart } from './cart';
import { catalog } from './catalog';


const rootReducer = combineReducers({
  user,
  cart,
  catalog
});

export default rootReducer;
