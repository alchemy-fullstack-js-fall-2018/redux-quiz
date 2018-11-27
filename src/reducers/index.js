import { combineReducers } from 'redux';
import greeting from './greeting';
import name from './name';

export default combineReducers({
  greeting,
  name
});
