import axios from 'axios';
import {
  GET_ALL_TASKS,
  GET_TASK,
  DELETE_TASK,
  ADD_TASK,
  EDIT_TASK,
} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET TASKS
export const getAllTasks = () => (dispatch, getState) => {
  console.log(tokenConfig(getState));
  axios
    .get('/api/tasks/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ALL_TASKS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// GET INDIVIDUAL TASK
export const getTask = id => (dispatch, getState) => {
  axios
    .get(`/api/tasks/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TASK,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// EDIT TASK
export const editTask = (task, id) => (dispatch, getState) => {
  axios
    .put(`/api/tasks/${id}/`, task, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: EDIT_TASK,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// DELETE TASKS
export const deleteTask = id => (dispatch, getState) => {
  axios
    .delete(`/api/tasks/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ taskDeleted: 'Task deleted' }));
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// ADD TASK
export const addTask = task => (dispatch, getState) => {
  axios
    .post(`/api/tasks/`, task, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
