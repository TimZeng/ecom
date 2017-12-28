import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './authReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: formReducer
});

export default rootReducer;
