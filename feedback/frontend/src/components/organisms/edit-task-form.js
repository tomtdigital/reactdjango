import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { editTask, getTask } from '../../actions/tasks';
import { getCategories } from '../../actions/categories';
import { useSortObjectArray } from '../../utils/use-sort-object-array';
import TextInput from '../atoms/text-input';
import Select from '../atoms/select';
import TextArea from '../atoms/text-area';

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
  };

  const sortObjectArray = useSortObjectArray;
  const sortedCategories =
    categories && categories.sort(sortObjectArray('category_name'));

  return (
    <>
      {task && categories && categories.length > 0 ? (
        <form onSubmit={handleSubmit}>
          {newCategory ? (
            <TextInput
              label="Category"
              value={category}
              onChange={setCategory}
            />
          ) : (
            <Select label="Category" value={category} onChange={setCategory}>
              {sortedCategories.map((subj, index) => (
                <option key={index} value={subj.category_name}>
                  {subj.category_name}
                </option>
              ))}
            </Select>
          )}
          <button type="button" onClick={() => setNewCategory(!newCategory)}>
            {newCategory ? 'Use existing' : 'Add new category'}
          </button>
          <TextInput label="Title" value={title} onChange={setTitle} />
          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
          />
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
  task: PropTypes.object,
  categories: PropTypes.array.isRequired,
  getTaskRdx: PropTypes.func.isRequired,
  editTaskRdx: PropTypes.func.isRequired,
  getCategoriesRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  task: state.tasks.task,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTaskRdx: id => dispatch(getTask(id)),
  getCategoriesRdx: () => dispatch(getCategories()),
  editTaskRdx: (task, id) => dispatch(editTask(task, id, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditTaskForm)
);
