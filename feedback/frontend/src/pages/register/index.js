import React from 'react';
import { RegistrationForm } from '../../components/organisms/registration-form';
import Section from '../../components/atoms/section';
import Container from '../../components/atoms/container';

const Register = () => (
  <Section>
    <Container>
      <h2>Register</h2>
      <RegistrationForm />
    </Container>
  </Section>
);

export default Register;
