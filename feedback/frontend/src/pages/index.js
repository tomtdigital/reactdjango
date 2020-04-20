import React from 'react';
import Section from '../components/atoms/section';
import Center from '../components/atoms/center';
import Container from '../components/atoms/container';

const Home = () => (
  <Section>
    <Container>
      <Center padding="1em">
        <h1>Welcome to Compass</h1>
      </Center>
      <h3>To do..</h3>
      <ul>
        <li>Map out full UX</li>
        <li>Add next model</li>
      </ul>
      <h3>Post P.O.C</h3>
      <ul>
        <li>DRF course</li>
        <li>Refactor API</li>
        <li>Change password</li>
        <li>Superuser permissions</li>
        <li>Friend requests</li>
        <li>View friends tasks</li>
        <li>Adapt friends tasks</li>
      </ul>
      <h3>Ideas</h3>
      <ul>
        <li>Add friends</li>
        <li>Gain rep if people use your tasks</li>
      </ul>
    </Container>
  </Section>
);

export default Home;
