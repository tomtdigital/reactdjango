import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategory } from '../../actions/categories';

export const CategoryDetails = ({ category, getCategoryRdx }) => {
  useEffect(() => {
    const categoryId = window.location.href.split('view-category/')[1];
    getCategoryRdx(categoryId);
  }, [getCategoryRdx]);
  return (
    <>
      {category ? (
        <>
          <p>Category name: {category.category_name}</p>
          <Link to={`/categories/edit-category/${category.id}`}>Edit</Link>
          <br />
          <Link to="/categories/all">Back to all categories</Link>
        </>
      ) : (
        <>
          <p>Could not locate category</p>
        </>
      )}
    </>
  );
};

CategoryDetails.propTypes = {
  category: PropTypes.object,
  getCategoryRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.categories.category,
});

export default connect(mapStateToProps, { getCategoryRdx: getCategory })(
  CategoryDetails
);
