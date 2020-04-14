import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, path }) => {
  const token = localStorage.getItem('token');
  let component;
  if (!token) {
    component = <Redirect to="/login" />;
  } else {
    component = children;
  }
  return <Route path={path}>{component}</Route>;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
};

export default PrivateRoute;
