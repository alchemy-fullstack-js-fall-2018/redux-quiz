import { combineReducers } from 'redux';
import greetingReducer from './greeting';
import nameReducer from './name';

export default combineReducers({
  greeting: greetingReducer,
  name: nameReducer
});
