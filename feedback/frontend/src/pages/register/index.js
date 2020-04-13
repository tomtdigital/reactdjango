import React from 'react';
import RegistrationFormRdx from '../../components/organisms/registration-form';
import Section from '../../components/atoms/section';
import Container from '../../components/atoms/container';

const Register = () => (
  <Section>
    <Container>
      <h2>Register</h2>
      <RegistrationFormRdx />
    </Container>
  </Section>
);

export default Register;
