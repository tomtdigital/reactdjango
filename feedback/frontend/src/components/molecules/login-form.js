import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atoms/text-input';

export const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput label="Username" value={username} onChange={setUsername} />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
