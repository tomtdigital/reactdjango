import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atoms/text-input';
import TextArea from '../atoms/text-area';

export const RegistrationForm = ({ onSubmit, message }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirmPassword) {
      const profile = {
        first_name: firstName,
        last_name: lastName,
        age,
        about_me: aboutMe,
      };
      const newUser = { username, email, password, profile };
      onSubmit(newUser);
      resetForm();
    } else {
      message({
        passwordNoMatch: 'Your password fields must match',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Username" value={username} onChange={setUsername} />
      <TextInput label="Email" type="email" value={email} onChange={setEmail} />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <TextInput
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />
      <TextInput label="First Name" value={firstName} onChange={setFirstName} />
      <TextInput label="Last Name" value={lastName} onChange={setLastName} />
      <TextInput label="Age" type="number" value={age} onChange={setAge} />
      <TextArea label="About Me" value={aboutMe} onChange={setAboutMe} />
      <button type="submit">Register</button>
    </form>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.func.isRequired,
};

export default RegistrationForm;
