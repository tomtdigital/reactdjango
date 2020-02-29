import React from 'react';
import ConnectAssignmentTable from '../../components/organisms/assignment-table';
import ConnectNewAssignmentForm from '../../components/organisms/new-assignment-form';

const Assignments = () => (
  <>
    <h1>Assignments</h1>
    <ConnectAssignmentTable />
    <h2>Create new assignment</h2>
    <ConnectNewAssignmentForm />
  </>
);

export default Assignments;
