import axios from 'axios';
import { GET_PROFILE, EDIT_PROFILE } from './types';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET PROFILE
export const getProfile = () => (dispatch, getState) => {
  axios
    .get('/api/profile/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// EDIT PROFILE
export const editProfile = (profile, id, ownProps) => (dispatch, getState) => {
  axios
    .put(`/api/profile/${id}/`, profile, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: EDIT_PROFILE,
        payload: res.data,
      });
    })
    .then(res => {
      ownProps.history.push('/profile');
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
