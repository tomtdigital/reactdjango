import axios from 'axios';
import {
  GET_ALL_TASKS,
  GET_TASK,
  DELETE_TASK,
  ADD_TASK,
  EDIT_TASK,
  GET_ERRORS,
} from './types';
import { createMessage } from './messages';

// GET TASKS
export const getAllTasks = () => dispatch => {
  axios
    .get('/api/tasks/')
    .then(res => {
      dispatch({
        type: GET_ALL_TASKS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// GET INDIVIDUAL TASK
export const getTask = id => dispatch => {
  axios
    .get(`/api/tasks/${id}/`)
    .then(res => {
      dispatch({
        type: GET_TASK,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// EDIT TASK
export const editTask = (task, id) => dispatch => {
  axios
    .put(`/api/tasks/${id}/`, task)
    .then(res => {
      dispatch({
        type: EDIT_TASK,
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
