import React from 'react';
import Section from '../components/atoms/section';
import Center from '../components/atoms/center';
import Container from '../components/atoms/container';
import UserDetailsRdx from '../components/organisms/user-details';

const Home = () => (
  <Section>
    <Container>
      <Center padding="1em">
        <h1>Welcome to Compass Task Manager</h1>
      </Center>
      <UserDetailsRdx />
    </Container>
  </Section>
);

export default Home;
