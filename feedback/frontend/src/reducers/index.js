import { combineReducers } from 'redux';
import assignments from './assignments';
import categories from './subjects';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  categories,
  assignments,
  errors,
  messages,
});
