import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addAssignment } from '../../actions/assignments';
import { getCategories } from '../../actions/subjects';
import Label from '../atoms/label';
import { useSortObjectArray } from '../../utils/use-sort-object-array';

export const NewAssignmentForm = ({
  categories,
  addAssignmentRdx,
  getCategoriesRdx,
}) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getCategoriesRdx();
  }, [getCategoriesRdx]);

  const resetForm = () => {
    setCategory('');
    setTitle('');
    setDescription('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const assignment = { category, title, description };
    addAssignmentRdx(assignment);
    resetForm();
  };

  const sortObjectArray = useSortObjectArray;
  const sortedCategories =
    categories && categories.sort(sortObjectArray('category_name'));

  return (
    <>
      {categories && categories.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <Label htmlFor="category">
            Category
            <select
              id="category"
              name="category"
              onChange={e => setCategory(e.target.value)}
              value={category || ''}
            >
              <option>---</option>
              {sortedCategories.map((subj, index) => (
                <option key={index} value={subj.category_name}>
                  {subj.category_name}
                </option>
              ))}
            </select>
          </Label>
          <Label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title || ''}
            />
          </Label>
          <Label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              onChange={e => setDescription(e.target.value)}
              value={description || ''}
            />
          </Label>
          {/* {category.length > 0 && title.length > 0 && description.length > 0 && ( */}
          <button type="submit">Submit</button>
          {/* )} */}
        </form>
      ) : (
        <p>
          You must first <Link to="/categories">create a category</Link> before
          adding an assignment
        </p>
      )}
    </>
  );
};

NewAssignmentForm.propTypes = {
  categories: PropTypes.array.isRequired,
  addAssignmentRdx: PropTypes.func.isRequired,
  getCategoriesRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  addAssignmentRdx: addAssignment,
  getCategoriesRdx: getCategories,
})(NewAssignmentForm);
