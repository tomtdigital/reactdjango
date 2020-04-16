import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { editUserDetails } from '../../actions/auth';
import UserDetailsFormRdx from '../molecules/user-details-form';

export const EditUserDetailsForm = ({ user, editUserDetailsRdx }) => (
  <>
    {user ? (
      <UserDetailsFormRdx user={user} onSubmit={editUserDetailsRdx} />
    ) : (
      <p>
        Cannot load user. Return <Link to="/">home</Link>
      </p>
    )}
  </>
);

EditUserDetailsForm.propTypes = {
  user: PropTypes.object.isRequired,
  editUserDetailsRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editUserDetailsRdx: user => dispatch(editUserDetails(user, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditUserDetailsForm)
);
