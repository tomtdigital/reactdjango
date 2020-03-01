import { combineReducers } from 'redux';
import assignments from './assignments';
import subjects from './subjects';

export default combineReducers({
  subjects,
  assignments,
});
