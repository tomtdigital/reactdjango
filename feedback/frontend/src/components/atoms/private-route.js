import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NotAuthorisedPage from '../../pages/403';

const PrivateRoute = ({ children, auth, path }) => {
  const { isLoading, isAuthenticated } = auth;
  let component;
  if (isLoading) {
    component = <h2>Loading</h2>;
  } else if (!isAuthenticated) {
    component = <NotAuthorisedPage />;
  } else {
    component = children;
  }
  return <Route path={path}>{component}</Route>;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
  auth: PropTypes.object,
  path: PropTypes.string,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
