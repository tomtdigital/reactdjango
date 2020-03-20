import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories, deleteCategory } from '../../actions/categories';
import DataTable from '../molecules/data-table';
import { useSortObjectArray } from '../../utils/use-sort-object-array';

export const CategoriesTable = ({
  categories,
  getCategoriesRdx,
  deleteCategoryRdx,
}) => {
  useEffect(() => {
    getCategoriesRdx();
  }, [getCategoriesRdx]);
  console.log(categories);
  categories.forEach(category => console.log(category));
  const sortObjectArray = useSortObjectArray;
  const sortedCategories =
    categories && categories.sort(sortObjectArray('category_name'));

  const tableData = {
    columns: ['Category Name'],
    rows: sortedCategories.map(category => ({
      id: category.id,
      values: [category.category_name],
    })),
  };

  return (
    <>
      {categories.length > 0 ? (
        <DataTable
          data={tableData}
          enableDeletion
          onDeletion={deleteCategoryRdx}
        />
      ) : (
        <p>Please fill out the form to add a category >>></p>
      )}
    </>
  );
};

CategoriesTable.propTypes = {
  categories: PropTypes.array.isRequired,
  getCategoriesRdx: PropTypes.func.isRequired,
  deleteCategoryRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  getCategoriesRdx: getCategories,
  deleteCategoryRdx: deleteCategory,
})(CategoriesTable);
