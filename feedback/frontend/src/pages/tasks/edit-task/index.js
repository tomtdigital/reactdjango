import React from 'react';
import TaskTableRdx from '../../../components/organisms/task-table';
import Section from '../../../components/atoms/section';
import Half from '../../../components/atoms/half';
import FlexWrapper from '../../../components/atoms/flex-wrapper';

const EditTaskPage = () => (
  <Section>
    <FlexWrapper align="flex-start">
      <Half padding="1em">
        <h1>Pick a task</h1>
        <TaskTableRdx />
      </Half>
      <Half padding="1em">
        <h2>Edit task</h2>
        <p>insert content</p>
      </Half>
    </FlexWrapper>
  </Section>
);

export default EditTaskPage;
