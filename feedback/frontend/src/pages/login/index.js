import React from 'react';
import LoginRdx from '../../components/organisms/login';
import Section from '../../components/atoms/section';
import Container from '../../components/atoms/container';

const Login = () => (
  <Section>
    <Container>
      <h2>Login</h2>
      <LoginRdx />
    </Container>
  </Section>
);

export default Login;
