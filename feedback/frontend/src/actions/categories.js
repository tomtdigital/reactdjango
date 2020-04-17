import axios from 'axios';

import {
  GET_CATEGORIES,
  DELETE_CATEGORY,
  ADD_CATEGORY,
  GET_CATEGORY,
  EDIT_CATEGORY,
} from './types';
import { tokenConfig } from './auth';
import { returnErrors } from './messages';

// GET CATEGORIES
export const getCategories = () => (dispatch, getState) => {
  axios
    .get('/api/categories/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// GET INDIVIDUAL CATEGORY
export const getCategory = id => (dispatch, getState) => {
  axios
    .get(`/api/categories/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// DELETE CATEGORIES
export const deleteCategory = id => (dispatch, getState) => {
  axios
    .delete(`/api/categories/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: id,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// ADD CATEGORY
export const addCategory = category => (dispatch, getState) => {
  axios
    .post(`/api/categories/`, category, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// EDIT CATEGORY
export const editCategory = (category, id, ownProps) => (
  dispatch,
  getState
) => {
  axios
    .put(`/api/categories/${id}/`, category, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: EDIT_CATEGORY,
        payload: res.data,
      });
    })
    .then(res => {
      ownProps.history.push(`/categories/view-category/${id}`);
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
