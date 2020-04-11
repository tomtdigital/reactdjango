import React from 'react';
import LoginFormRdx from '../../components/organisms/login-form';
import Section from '../../components/atoms/section';
import Container from '../../components/atoms/container';

const Login = () => (
  <Section>
    <Container>
      <h2>Login</h2>
      <LoginFormRdx />
    </Container>
  </Section>
);

export default Login;
