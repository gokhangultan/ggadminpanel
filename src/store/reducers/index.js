// reducers/index.js

import { combineReducers } from 'redux';

import userReducer from './userReducer';
import productReducer from './productReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  global: globalReducer
});

export default rootReducer;
