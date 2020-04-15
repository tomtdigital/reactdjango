import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './organisms/alerts';
import store from '../store';
import HomePage from '../pages';
import CategoryPage from '../pages/categories/index';
import AllTasksPage from '../pages/tasks/all/index';
import HeaderNav from './organisms/header-nav';
import '../styles/styles.css';
import ViewTaskPage from '../pages/tasks/view-task';
import EditTaskPage from '../pages/tasks/edit-task';
import RegisterPage from '../pages/register';
import LoginPage from '../pages/login';
import EditUserDetailsPage from '../pages/user/edit-user-details';
import PrivateRoute from './atoms/private-route';
import { loadUser } from '../actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <AlertProvider
        template={AlertTemplate}
        timeout={3000}
        position="top center"
      >
        <Router>
          <HeaderNav />
          <Alerts />
          <Switch>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute exact path="/">
              <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/categories">
              <CategoryPage />
            </PrivateRoute>
            <PrivateRoute path="/tasks/all">
              <AllTasksPage />
            </PrivateRoute>
            <PrivateRoute path="/tasks/view-task">
              <ViewTaskPage />
            </PrivateRoute>
            <PrivateRoute path="/tasks/edit-task">
              <EditTaskPage />
            </PrivateRoute>
            <PrivateRoute path="/user/edit-details">
              <EditUserDetailsPage />
            </PrivateRoute>
          </Switch>
        </Router>
      </AlertProvider>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
