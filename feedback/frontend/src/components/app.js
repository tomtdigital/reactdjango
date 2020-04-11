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
            <Route path="/categories">
              <CategoryPage />
            </Route>
            <Route path="/tasks/all">
              <AllTasksPage />
            </Route>
            <Route path="/tasks/view-task">
              <ViewTaskPage />
            </Route>
            <Route path="/tasks/edit-task">
              <EditTaskPage />
            </Route>
          </Switch>
        </Router>
      </AlertProvider>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
