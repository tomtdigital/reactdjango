import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Label from '../atoms/label';

export const UserDetailsForm = ({ user, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = { username, email };
    onSubmit(userData);
  };

  return (
    <>
      {user ? (
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>
          Cannot load user. Return <Link to="/">home</Link>
        </p>
      )}
    </>
  );
};

UserDetailsForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserDetailsForm;
