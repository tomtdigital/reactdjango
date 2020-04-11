import React, { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Label from '../atoms/label';

export const RegistrationForm = () => {
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
      // Do something
      resetForm();
    }
  };

  return (
    <>
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

// RegistrationForm.propTypes = {

// };

// const mapStateToProps = state => ({

// });

// export default connect(mapStateToProps, {
// addTaskRdx: addTask,
// getCategoriesRdx: getCategories,
// })(RegistrationForm);
