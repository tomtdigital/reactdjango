import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { editCategory, getCategory } from '../../actions/categories';
import CategoryFormRdx from '../molecules/category-form';

export const EditCategoryForm = ({
  category,
  getCategoryRdx,
  editCategoryRdx,
}) => {
  useEffect(() => {
    const categoryId = window.location.href.split('edit-category/')[1];
    getCategoryRdx(categoryId);
  }, [getCategoryRdx]);

  return (
    <>
      {category ? (
        <CategoryFormRdx category={category} onSubmit={editCategoryRdx} />
      ) : (
        <p>
          Cannot load category.{' '}
          <Link to="/categories/all">View valid categories</Link>
        </p>
      )}
    </>
  );
};

EditCategoryForm.propTypes = {
  category: PropTypes.object,
  getCategoryRdx: PropTypes.func.isRequired,
  editCategoryRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.categories.category,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCategoryRdx: id => dispatch(getCategory(id)),
  editCategoryRdx: (category, id) =>
    dispatch(editCategory(category, id, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditCategoryForm)
);
