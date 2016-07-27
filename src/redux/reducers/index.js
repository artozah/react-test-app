import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './userReducer';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
