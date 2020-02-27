import axios from 'axios';

import { GET_ASSIGNMENTS } from './types';

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
