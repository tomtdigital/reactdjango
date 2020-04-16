import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { editTask, getTask } from '../../actions/tasks';
import { getCategories } from '../../actions/categories';
import TaskFormRdx from '../molecules/task-form';

export const EditTaskForm = ({
  task,
  categories,
  getTaskRdx,
  editTaskRdx,
  getCategoriesRdx,
}) => {
  useEffect(() => {
    const taskId = window.location.href.split('edit-task/')[1];
    getTaskRdx(taskId);
  }, [getTaskRdx]);

  useEffect(() => {
    getCategoriesRdx();
  }, [getCategoriesRdx]);

  return (
    <>
      {task && categories && categories.length > 0 ? (
        <TaskFormRdx
          task={task}
          categories={categories}
          onSubmit={editTaskRdx}
        />
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
