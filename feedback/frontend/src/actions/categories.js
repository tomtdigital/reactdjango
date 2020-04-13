import axios from 'axios';

import { GET_CATEGORIES, DELETE_CATEGORY, ADD_CATEGORY } from './types';
import { tokenConfig } from './auth';

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
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
};
