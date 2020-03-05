import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAssignments, deleteAssignment } from '../../actions/assignments';
import DataTable from '../molecules/data-table';

export const AssignmentTable = ({
  assignments,
  getAssignmentsRdx,
  deleteAssignmentRdx,
}) => {
  useEffect(() => {
    getAssignmentsRdx();
  }, [getAssignmentsRdx]);

  const tableData = {
    columns: ['Subject', 'Title', 'Description'],
    rows: assignments.map(assignment => ({
      id: assignment.id,
      values: [
        assignment.inspect_subject.subject_name,
        assignment.title,
        assignment.description,
      ],
    })),
  };

  assignments.forEach(assignment => console.log(assignment));

  return (
    <>
      {assignments.length > 0 ? (
        <DataTable
          data={tableData}
          enableDeletion
          onDeletion={deleteAssignmentRdx}
        />
      ) : (
        <p>Please fill out the form to add an assignment >>></p>
      )}
    </>
  );
};

AssignmentTable.propTypes = {
  assignments: PropTypes.array.isRequired,
  getAssignmentsRdx: PropTypes.func.isRequired,
  deleteAssignmentRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  assignments: state.assignments.assignments,
});

export default connect(mapStateToProps, {
  getAssignmentsRdx: getAssignments,
  deleteAssignmentRdx: deleteAssignment,
})(AssignmentTable);
