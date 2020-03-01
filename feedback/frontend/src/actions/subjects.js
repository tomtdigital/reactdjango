import axios from 'axios';

import { GET_SUBJECTS, DELETE_SUBJECT, ADD_SUBJECT } from './types';

// GET SUBJECTS
export const getSubjects = () => dispatch => {
  axios
    .get('/api/subjects/')
    .then(res => {
      dispatch({
        type: GET_SUBJECTS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// DELETE SUBJECTS
export const deleteSubject = id => dispatch => {
  axios
    .delete(`/api/subjects/${id}/`)
    .then(() => {
      dispatch({
        type: DELETE_SUBJECT,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

// ADD SUBJECT
export const addSubject = subject => dispatch => {
  axios
    .post(`/api/subjects/`, subject)
    .then(res => {
      dispatch({
        type: ADD_SUBJECT,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
