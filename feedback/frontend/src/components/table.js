import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAssignments, deleteAssignment } from '../actions/assignments';

export class Table extends Component {
  componentDidMount() {
    const { getAssignments } = this.props;
    getAssignments();
    console.log(this.props);
  }

  render() {
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
            {this.props.assignments.map(assignment => (
              <tr key={assignment.id}>
                <td>{assignment.id}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.title}</td>
                <td>{assignment.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteAssignment.bind(
                      this,
                      assignment.id
                    )}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

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
