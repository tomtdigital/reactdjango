import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import HomePage from '../pages';
import SubjectsPage from '../pages/subjects/index';
import AssignmentsPage from '../pages/assignments/index';
import HeaderNav from './organisms/header-nav';
import '../styles/styles.css';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <HeaderNav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/subjects">
          <SubjectsPage />
        </Route>
        <Route path="/assignments">
          <AssignmentsPage />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
