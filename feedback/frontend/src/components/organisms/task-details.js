import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTask } from '../../actions/tasks';

export const TaskDetails = ({ task, getTaskRdx }) => {
  useEffect(() => {
    const taskId = window.location.href.split('view-task/')[1];
    getTaskRdx(taskId);
  }, [getTaskRdx]);
  return (
    <>
      {task ? (
        <>
          <p>Category: {task.category}</p>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <Link to={`/tasks/edit-task/${task.id}`}>Edit</Link>
          <br />
          <Link to="/tasks/all">Back to all tasks</Link>
        </>
      ) : (
        <>
          <p>Could not locate task</p>
        </>
      )}
    </>
  );
};

TaskDetails.propTypes = {
  task: PropTypes.object,
  getTaskRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  task: state.tasks.task,
});

export default connect(mapStateToProps, { getTaskRdx: getTask })(TaskDetails);
