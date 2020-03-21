import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks, deleteTask } from '../../actions/tasks';
import DataTable from '../molecules/data-table';

export const TaskTable = ({ tasks, getTasksRdx, deleteTaskRdx }) => {
  useEffect(() => {
    getTasksRdx();
  }, [getTasksRdx]);

  const tableData = {
    columns: ['Category', 'Title', 'Description'],
    rows: tasks.map(task => ({
      id: task.id,
      values: [task.category, task.title, task.description],
    })),
  };
  console.log(tasks);
  tasks.forEach(task => console.log(task));

  return (
    <>
      {tasks.length > 0 ? (
        <DataTable data={tableData} enableDeletion onDeletion={deleteTaskRdx} />
      ) : (
        <p>Please fill out the form to add an task >>></p>
      )}
    </>
  );
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasksRdx: PropTypes.func.isRequired,
  deleteTaskRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, {
  getTasksRdx: getTasks,
  deleteTaskRdx: deleteTask,
})(TaskTable);
