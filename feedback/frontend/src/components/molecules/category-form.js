import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atoms/text-input';

export const CategoryForm = ({ category, onSubmit }) => {
  const [categoryName, setCategoryName] = useState();

  const resetForm = () => {
    setCategoryName('');
  };

  useEffect(() => {
    if (category) {
      setCategoryName(category.category_name);
    }
  }, [category]);

  const handleSubmit = event => {
    event.preventDefault();
    const categoryData = { category_name: categoryName };
    if (category) {
      onSubmit(categoryData, category.id);
    } else {
      onSubmit(categoryData);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Category Name"
        value={categoryName}
        onChange={setCategoryName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

CategoryForm.propTypes = {
  category: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
