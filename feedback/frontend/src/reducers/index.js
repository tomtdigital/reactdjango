import { combineReducers } from 'redux';
import auth from './auth';
import tasks from './tasks';
import categories from './categories';
import errors from './errors';
import messages from './messages';
import profile from './profile';

export default combineReducers({
  auth,
  categories,
  tasks,
  errors,
  messages,
  profile,
});
