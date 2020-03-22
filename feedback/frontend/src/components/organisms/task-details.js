import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
