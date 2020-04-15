import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const UserDetails = ({ user }) => (
  <>
    {user ? (
      <div>
        <p>Id: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    ) : (
      <div>
        <p>Could not identify user</p>
      </div>
    )}
    <Link to="/user/edit-user">Edit</Link>
  </>
);

UserDetails.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(UserDetails);
