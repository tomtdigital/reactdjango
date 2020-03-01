import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSubjects, deleteSubject } from '../../actions/subjects';
import DataTable from '../molecules/data-table';
import { useSortObjectArray } from '../../utils/use-sort-object-array';

export const SubjectsTable = ({
  subjects,
  getSubjectsRdx,
  deleteSubjectRdx,
}) => {
  useEffect(() => {
    getSubjectsRdx();
  }, [getSubjectsRdx]);

  const sortObjectArray = useSortObjectArray;
  const sortedSubjects =
    subjects && subjects.sort(sortObjectArray('subject_name'));

  const tableData = {
    columns: ['Subject Name'],
    rows: sortedSubjects.map(subject => ({
      id: subject.id,
      values: [subject.subject_name],
    })),
  };

  return (
    <>
      {subjects.length > 0 ? (
        <DataTable
          data={tableData}
          enableDeletion
          onDeletion={deleteSubjectRdx}
        />
      ) : (
        <p>Please fill out the form to add an subject >>></p>
      )}
    </>
  );
};

SubjectsTable.propTypes = {
  subjects: PropTypes.array.isRequired,
  getSubjectsRdx: PropTypes.func.isRequired,
  deleteSubjectRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: state.subjects.subjects,
});

export default connect(mapStateToProps, {
  getSubjectsRdx: getSubjects,
  deleteSubjectRdx: deleteSubject,
})(SubjectsTable);
