import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getAssignments,
  deleteAssignment,
  addAssignment,
} from '../../actions/assignments';
import DataTable from '../../components/molecules/data-table';

export const Assignments = ({
  assignments,
  connectGetAssignments,
  connectAddAssignment,
  connectDeleteAssignment,
}) => {
  const [subject, setSubject] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    connectGetAssignments();
  }, [connectGetAssignments]);

  const handleSubmit = event => {
    event.preventDefault();
    const assignment = { subject, title, description };
    connectAddAssignment(assignment);
  };

  const tableData = {
    columns: ['ID', 'subject', 'Title', 'Description'],
    rows: assignments.map(assignment => ({
      id: assignment.id,
      values: [
        assignment.id,
        assignment.subject,
        assignment.title,
        assignment.description,
      ],
    })),
  };

  return (
    <>
      <h2>Assignment</h2>
      <DataTable
        data={tableData}
        deleteOption
        deleteFunction={connectDeleteAssignment}
      />
      <h2>Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">
          subject
          <input
            id="subject"
            name="subject"
            onChange={e => setSubject(e.target.value)}
            value={subject || ''}
          />
        </label>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            onChange={e => setTitle(e.target.value)}
            value={title || ''}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            name="description"
            onChange={e => setDescription(e.target.value)}
            value={description || ''}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

Assignments.propTypes = {
  assignments: PropTypes.array.isRequired,
  connectGetAssignments: PropTypes.func.isRequired,
  connectDeleteAssignment: PropTypes.func.isRequired,
  connectAddAssignment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  assignments: state.assignments.assignments,
});

export default connect(mapStateToProps, {
  connectGetAssignments: getAssignments,
  connectDeleteAssignment: deleteAssignment,
  connectAddAssignment: addAssignment,
})(Assignments);
