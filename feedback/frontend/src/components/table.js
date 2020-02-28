import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAssignments, deleteAssignment } from '../actions/assignments';

export const Table = ({ getAssignments, deleteAssignment, assignments }) => {
  const [assignmentSubject, setassignmentSubject] = useState();
  const [assignmentTitle, setAssignmentTitle] = useState();
  const [assignmentDescription, setAssignmentDescription] = useState();
  useEffect(() => {
    getAssignments();
  }, [getAssignments]);
  const handleSubmit = () => {
    //   axios({
    //     method: 'post',
    //     url: '/api/assignments/',
    //     data: {
    //       subject: assignmentSubject,
    //       title: assignmentTitle,
    //       description: assignmentDescription
    //     }
    //   }).then(function (response) {
    //     console.log(response)
    //     setassignmentSubject('')
    //     setAssignmentTitle('')
    //     setAssignmentDescription('')
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    // });
    console.log('submitted');
  };
  return (
    <>
      <h2>Assignment</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
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
      <form>
        <label htmlFor="subject">
          Subject
          <input
            id="subject"
            name="subject"
            onChange={e => setassignmentSubject(e.target.value)}
            value={assignmentSubject}
          />
        </label>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            onChange={e => setAssignmentTitle(e.target.value)}
            value={assignmentTitle}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            name="description"
            onChange={e => setAssignmentDescription(e.target.value)}
            value={assignmentDescription}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

Table.propTypes = {
  assignments: PropTypes.array.isRequired,
  getAssignments: PropTypes.func.isRequired,
  deleteAssignment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  assignments: state.assignments.assignments,
});

export default connect(mapStateToProps, { getAssignments, deleteAssignment })(
  Table
);
