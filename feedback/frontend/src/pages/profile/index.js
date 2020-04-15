import React from 'react';
import Section from '../../components/atoms/section';
import Center from '../../components/atoms/center';
import Container from '../../components/atoms/container';
import UserDetailsRdx from '../../components/organisms/user-details';
import ProfileDetailsRdx from '../../components/organisms/profile-details';

const Profile = () => (
  <Section>
    <Container>
      <Center padding="1em">
        <h2>My profile</h2>
      </Center>
      <UserDetailsRdx />
      <ProfileDetailsRdx />
    </Container>
  </Section>
);

export default Profile;
