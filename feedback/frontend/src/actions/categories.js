import axios from 'axios';

import { GET_CATEGORIES, DELETE_CATEGORY, ADD_CATEGORY } from './types';

// GET CATEGORIES
export const getCategories = () => dispatch => {
  axios
    .get('/api/categories/')
    .then(res => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// DELETE CATEGORIES
export const deleteCategory = id => dispatch => {
  axios
    .delete(`/api/categories/${id}/`)
    .then(() => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

// ADD CATEGORY
export const addCategory = category => dispatch => {
  axios
    .post(`/api/categories/`, category)
    .then(res => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
