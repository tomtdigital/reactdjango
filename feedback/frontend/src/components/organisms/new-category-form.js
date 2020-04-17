import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCategory } from '../../actions/categories';
import CategoryFormRdx from '../molecules/category-form';

export const NewCategoryForm = ({ addCategoryRdx }) => (
  <CategoryFormRdx onSubmit={addCategoryRdx} />
);

NewCategoryForm.propTypes = {
  addCategoryRdx: PropTypes.func.isRequired,
};

export default connect(null, {
  addCategoryRdx: addCategory,
})(NewCategoryForm);
