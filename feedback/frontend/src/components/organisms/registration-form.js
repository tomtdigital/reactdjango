import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Label from '../atoms/label';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export const RegistrationForm = ({
  isAuthenticated,
  registerRdx,
  createMessageRdx,
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirmPassword) {
      const newUser = { username, email, password };
      registerRdx(newUser);
      resetForm();
    } else {
      createMessageRdx({
        passwordNoMatch: 'Your password fields must match',
      });
    }
  };

  return (
    <>
      {isAuthenticated && <Redirect to="/" />}
      <form onSubmit={handleSubmit}>
        <Label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            onChange={e => setUsername(e.target.value)}
            value={username || ''}
          />
        </Label>
        <Label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email || ''}
          />
        </Label>
        <Label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password || ''}
          />
        </Label>
        <Label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword || ''}
          />
        </Label>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

RegistrationForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerRdx: PropTypes.func.isRequired,
  createMessageRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  registerRdx: register,
  createMessageRdx: createMessage,
})(RegistrationForm);
