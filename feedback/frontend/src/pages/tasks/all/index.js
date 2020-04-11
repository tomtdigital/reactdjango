import React from 'react';
import TaskTableRdx from '../../../components/organisms/task-table';
import NewTaskFormRdx from '../../../components/organisms/new-task-form';
import Section from '../../../components/atoms/section';
import Half from '../../../components/atoms/half';
import FlexWrapper from '../../../components/atoms/flex-wrapper';
import Container from '../../../components/atoms/container';

const AllTasks = () => (
  <Section>
    <Container>
      <FlexWrapper align="flex-start">
        <Half padding="1em">
          <h1>Tasks</h1>
          <TaskTableRdx />
        </Half>
        <Half padding="1em">
          <h2>Create new task</h2>
          <NewTaskFormRdx />
        </Half>
      </FlexWrapper>
    </Container>
  </Section>
);

export default AllTasks;
