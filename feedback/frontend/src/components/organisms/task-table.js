import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllTasks, deleteTask } from '../../actions/tasks';
import DataTable from '../molecules/data-table';

export const TaskTable = ({ tasks, getAllTasksRdx, deleteTaskRdx }) => {
  useEffect(() => {
    getAllTasksRdx();
  }, [getAllTasksRdx]);

  const tableData = {
    columns: ['Category', 'Title', 'Description'],
    rows: tasks.map(task => ({
      id: task.id,
      values: [task.category, task.title, task.description],
    })),
  };

  return (
    <>
      {tasks.length > 0 ? (
        <DataTable
          data={tableData}
          linkPath="/tasks/view-task"
          enableDeletion
          onDeletion={deleteTaskRdx}
        />
      ) : (
        <p>Please fill out the form to add an task >>></p>
      )}
    </>
  );
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  getAllTasksRdx: PropTypes.func.isRequired,
  deleteTaskRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, {
  getAllTasksRdx: getAllTasks,
  deleteTaskRdx: deleteTask,
})(TaskTable);
