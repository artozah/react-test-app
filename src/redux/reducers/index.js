import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  auth: authReducer
});

export default rootReducer;
