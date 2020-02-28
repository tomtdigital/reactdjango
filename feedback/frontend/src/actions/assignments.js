import axios from 'axios';

import { GET_ASSIGNMENTS, DELETE_ASSIGNMENT } from './types';

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
    .then(res => {
      dispatch({
        type: DELETE_ASSIGNMENT,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};
