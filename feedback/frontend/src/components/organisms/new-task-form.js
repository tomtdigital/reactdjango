import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addTask } from '../../actions/tasks';
import { getCategories } from '../../actions/categories';
import TaskFormRdx from '../molecules/task-form';

export const NewTaskForm = ({ categories, addTaskRdx, getCategoriesRdx }) => {
  useEffect(() => {
    getCategoriesRdx();
  }, [getCategoriesRdx]);

  return (
    <>
      {categories && categories.length > 0 ? (
        <TaskFormRdx onSubmit={addTaskRdx} categories={categories} />
      ) : (
        <p>
          You must first <Link to="/categories">create a category</Link> before
          adding an task
        </p>
      )}
    </>
  );
};

NewTaskForm.propTypes = {
  categories: PropTypes.array.isRequired,
  addTaskRdx: PropTypes.func.isRequired,
  getCategoriesRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  addTaskRdx: addTask,
  getCategoriesRdx: getCategories,
})(NewTaskForm);
