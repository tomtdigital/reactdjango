import React from 'react';
import AssignmentTableRdx from '../../components/organisms/assignment-table';
import NewAssignmentFormRdx from '../../components/organisms/new-assignment-form';
import Section from '../../components/atoms/section';
import Half from '../../components/atoms/half';
import FlexWrapper from '../../components/atoms/flex-wrapper';

const Assignments = () => (
  <Section>
    <FlexWrapper align="flex-start">
      <Half padding="1em">
        <h1>Assignments</h1>
        <AssignmentTableRdx />
      </Half>
      <Half padding="1em">
        <h2>Create new assignment</h2>
        <NewAssignmentFormRdx />
      </Half>
    </FlexWrapper>
  </Section>
);

export default Assignments;
