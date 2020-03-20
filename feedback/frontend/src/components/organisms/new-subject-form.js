import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCategory } from '../../actions/subjects';
import Label from '../atoms/label';

export const NewCategoryForm = ({ addCategoryRdx }) => {
  const [categoryName, setCategoryName] = useState();

  const resetForm = () => {
    setCategoryName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    addCategoryRdx({ category_name: categoryName });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="category-name">
        Category Name
        <input
          id="category-name"
          name="category-name"
          onChange={e => setCategoryName(e.target.value)}
          value={categoryName || ''}
        />
      </Label>
      <button type="submit">Submit</button>
    </form>
  );
};

NewCategoryForm.propTypes = {
  addCategoryRdx: PropTypes.func.isRequired,
};

export default connect(null, {
  addCategoryRdx: addCategory,
})(NewCategoryForm);
