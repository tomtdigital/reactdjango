import { combineReducers } from 'redux';
import assignments from './assignments';
import subjects from './subjects';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  subjects,
  assignments,
  errors,
  messages,
});
