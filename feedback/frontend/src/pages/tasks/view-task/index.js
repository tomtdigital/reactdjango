import React from 'react';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import TaskDetailsRdx from '../../../components/organisms/task-details';

const ViewTask = () => (
  <Section>
    <Container>
      <TaskDetailsRdx />
    </Container>
  </Section>
);

export default ViewTask;
