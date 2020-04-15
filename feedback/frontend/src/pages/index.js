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
        <li>Refactor front end</li>
        <li>Refactor API</li>
        <li>Change password</li>
        <li>Add next model</li>
      </ul>
    </Container>
  </Section>
);

export default Home;
