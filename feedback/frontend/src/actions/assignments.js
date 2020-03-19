import axios from 'axios';
import {
  GET_ASSIGNMENTS,
  DELETE_ASSIGNMENT,
  ADD_ASSIGNMENT,
  GET_ERRORS,
} from './types';
import { createMessage } from './messages';

// GET ASSIGNMENTS
export const getAssignments = () => dispatch => {
  axios
    .get('/api/assignments/')
    .then(res => {
      dispatch({
        type: GET_ASSIGNMENTS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// DELETE ASSIGNMENTS
export const deleteAssignment = id => dispatch => {
  axios
    .delete(`/api/assignments/${id}/`)
    .then(() => {
      dispatch(createMessage({ assignmentDeleted: 'Assignment deleted' }));
      dispatch({
        type: DELETE_ASSIGNMENT,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

// ADD ASSIGNMENT
export const addAssignment = assignment => dispatch => {
  axios
    .post(`/api/assignments/`, assignment)
    .then(res => {
      dispatch({
        type: ADD_ASSIGNMENT,
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
