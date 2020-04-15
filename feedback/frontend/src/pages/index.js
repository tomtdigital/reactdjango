import React from 'react';
import Section from '../components/atoms/section';
import Center from '../components/atoms/center';
import Container from '../components/atoms/container';
import UserDetailsRdx from '../components/organisms/user-details';
import ProfileDetailsRdx from '../components/organisms/profile-details';

const Home = () => (
  <Section>
    <Container>
      <Center padding="1em">
        <h1>Welcome to Compass Task Manager</h1>
      </Center>
      <UserDetailsRdx />
      <ProfileDetailsRdx />
      <div style={{ marginTop: '5em', textAlign: 'right' }}>
        <h3>To do..</h3>
        <ul style={{ listStyle: 'none' }}>
          <li>Edit profile</li>
          <li>Create profile area</li>
          <li>Refactor front end</li>
          <li>Refactor API</li>
          <li>Change password</li>
          <li>Add next model</li>
        </ul>
      </div>
    </Container>
  </Section>
);

export default Home;
