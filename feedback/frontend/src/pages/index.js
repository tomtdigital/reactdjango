import React from 'react';
import Section from '../components/atoms/section';
import Center from '../components/atoms/center';
import Container from '../components/atoms/container';

const Home = () => (
  <Section>
    <Container>
      <Center padding="1em">
        <h1>Welcome to Compass Learning</h1>
      </Center>
    </Container>
  </Section>
);

export default Home;
