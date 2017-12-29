import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './authReducer';
import surveysReducer from './surveysReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: formReducer,
  surveys: surveysReducer
});

export default rootReducer;
