import axios from 'axios';
import { GET_TASKS, DELETE_TASK, ADD_TASK, GET_ERRORS } from './types';
import { createMessage } from './messages';

// GET TASKS
export const getTasks = () => dispatch => {
  axios
    .get('/api/tasks/')
    .then(res => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// DELETE TASKS
export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/tasks/${id}/`)
    .then(() => {
      dispatch(createMessage({ taskDeleted: 'Task deleted' }));
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

// ADD TASK
export const addTask = task => dispatch => {
  axios
    .post(`/api/tasks/`, task)
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
