import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { editTask, getTask } from '../../actions/tasks';
import { getCategories } from '../../actions/categories';
import Label from '../atoms/label';
import { useSortObjectArray } from '../../utils/use-sort-object-array';

export const EditTaskForm = ({
  task,
  categories,
  getTaskRdx,
  editTaskRdx,
  getCategoriesRdx,
}) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newCategory, setNewCategory] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const taskId = window.location.href.split('edit-task/')[1];
    getTaskRdx(taskId);
  }, [getTaskRdx]);

  useEffect(() => {
    getCategoriesRdx();
  }, [getCategoriesRdx]);

  useEffect(() => {
    if (task) {
      setCategory(task.category);
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = event => {
    event.preventDefault();
    const taskUpdate = { category, title, description };
    editTaskRdx(taskUpdate, task.id);
    history.push(`/tasks/view-task/${task.id}`);
  };

  const sortObjectArray = useSortObjectArray;
  const sortedCategories =
    categories && categories.sort(sortObjectArray('category_name'));

  return (
    <>
      {task && categories && categories.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <Label htmlFor="category">
            Category
            {newCategory ? (
              <input
                id="category"
                name="category"
                onChange={e => setCategory(e.target.value)}
                value={category || ''}
              />
            ) : (
              <select
                id="category"
                name="category"
                onChange={e => setCategory(e.target.value)}
                value={category || ''}
              >
                {sortedCategories.map((subj, index) => (
                  <option key={index} value={subj.category_name}>
                    {subj.category_name}
                  </option>
                ))}
              </select>
            )}
          </Label>
          <button type="button" onClick={() => setNewCategory(!newCategory)}>
            {newCategory ? 'Use existing' : 'Add new category'}
          </button>
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>
          Cannot load task. <Link to="/tasks/all">View valid tasks</Link>
        </p>
      )}
    </>
  );
};

EditTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  getTaskRdx: PropTypes.func.isRequired,
  editTaskRdx: PropTypes.func.isRequired,
  getCategoriesRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  task: state.tasks.task,
});

export default connect(mapStateToProps, {
  getTaskRdx: getTask,
  getCategoriesRdx: getCategories,
  editTaskRdx: editTask,
})(EditTaskForm);
