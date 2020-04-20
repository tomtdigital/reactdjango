import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import RegistrationFormRdx from '../molecules/registration-form';

export const Register = ({
  isAuthenticated,
  registerRdx,
  createMessageRdx,
}) => (
  <>
    {isAuthenticated && <Redirect to="/" />}
    <RegistrationFormRdx onSubmit={registerRdx} message={createMessageRdx} />
    <p>
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </>
);

Register.propTypes = {
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
})(Register);
