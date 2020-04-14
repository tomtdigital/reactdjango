import React, { useEffect } from 'react';
import Section from '../../components/atoms/section';
import Center from '../../components/atoms/center';
import Container from '../../components/atoms/container';

const NotAuthorised = () => {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '#/login';
    }
  });
  return (
    <Section>
      <Container>
        <Center padding="1em">
          <h1>You are not authorised to view this page</h1>
        </Center>
      </Container>
    </Section>
  );
};

export default NotAuthorised;
