import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { editUserDetails } from '../../actions/auth';
import Label from '../atoms/label';

export const EditUserDetailsForm = ({ user, editUserDetailsRdx }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = event => {
    event.preventDefault();
    const userUpdate = { username, email };
    editUserDetailsRdx(userUpdate);
    history.push(`/`);
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
            <textarea
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

EditUserDetailsForm.propTypes = {
  user: PropTypes.object.isRequired,
  editUserDetailsRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  editUserDetailsRdx: editUserDetails,
})(EditUserDetailsForm);
