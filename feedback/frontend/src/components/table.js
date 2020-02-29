import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getAssignments,
  deleteAssignment,
  addAssignment,
} from '../actions/assignments';

export const Table = ({
  assignments,
  getAssignments,
  addAssignment,
  deleteAssignment,
}) => {
  const [subject, setSubject] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    getAssignments();
  }, [getAssignments]);

  const handleSubmit = event => {
    event.preventDefault();
    const assignment = { subject, title, description };
    addAssignment(assignment);
  };

  return (
    <>
      <h2>Assignment</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>subject</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <tr key={assignment.id}>
              <td>{assignment.id}</td>
              <td>{assignment.subject}</td>
              <td>{assignment.title}</td>
              <td>{assignment.description}</td>
              <td>
                <button
                  onClick={() => deleteAssignment(assignment.id)}
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

Table.propTypes = {
  assignments: PropTypes.array.isRequired,
  getAssignments: PropTypes.func.isRequired,
  deleteAssignment: PropTypes.func.isRequired,
  addAssignment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  assignments: state.assignments.assignments,
});

export default connect(mapStateToProps, {
  getAssignments,
  deleteAssignment,
  addAssignment,
})(Table);
