import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './organisms/alerts';
import store from '../store';
import HomePage from '../pages';
import CategoryPage from '../pages/subjects/index';
import AssignmentsPage from '../pages/assignments/index';
import HeaderNav from './organisms/header-nav';
import '../styles/styles.css';

const App = () => (
  <Provider store={store}>
    <AlertProvider
      template={AlertTemplate}
      timeout={3000}
      position="top center"
    >
      <HashRouter>
        <HeaderNav />
        <Alerts />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/categories">
            <CategoryPage />
          </Route>
          <Route path="/assignments">
            <AssignmentsPage />
          </Route>
        </Switch>
      </HashRouter>
    </AlertProvider>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
