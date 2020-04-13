import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Label from '../atoms/label';
import { login } from '../../actions/auth';

export const LoginForm = ({ loginRdx, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    loginRdx(username, password);
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>
    </>
  );
};

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  loginRdx: login,
})(LoginForm);
