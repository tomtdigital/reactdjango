import { combineReducers } from 'redux';
import tasks from './tasks';
import categories from './categories';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  categories,
  tasks,
  errors,
  messages,
});
