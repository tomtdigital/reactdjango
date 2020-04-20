import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import LoginFormRdx from '../molecules/login-form';

export const Login = ({ loginRdx, isAuthenticated }) => (
  <>
    {isAuthenticated && <Redirect to="/" />}
    <LoginFormRdx onSubmit={loginRdx} />
    <p>
      Don't have an account yet? <Link to="/register">Register</Link>
    </p>
  </>
);

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  loginRdx: login,
})(Login);
