import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextInput from '../atoms/text-input';

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
          <TextInput label="Username" value={username} onChange={setUsername} />
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
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
