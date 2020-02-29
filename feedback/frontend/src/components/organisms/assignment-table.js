import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from '../molecules/data-table';
import { getAssignments, deleteAssignment } from '../../actions/assignments';

export const AssignmentTable = ({
  assignments,
  connectGetAssignments,
  connectDeleteAssignment,
}) => {
  useEffect(() => {
    connectGetAssignments();
  }, [connectGetAssignments]);

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
    <DataTable
      data={tableData}
      deleteOption
      deleteFunction={connectDeleteAssignment}
    />
  );
};

AssignmentTable.propTypes = {
  assignments: PropTypes.array.isRequired,
  connectGetAssignments: PropTypes.func.isRequired,
  connectDeleteAssignment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  assignments: state.assignments.assignments,
});

export default connect(mapStateToProps, {
  connectGetAssignments: getAssignments,
  connectDeleteAssignment: deleteAssignment,
})(AssignmentTable);
