import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Assignments from './assignments';

const App = () => (
  <HashRouter>
    <Link to="/">Home</Link>
    <Link to="/subjects">Subjects</Link>
    <Link to="/assignments">Assignments</Link>
    <Switch>
      <Route exact path="/">
        <p>Homepage</p>
      </Route>
      <Route path="/subjects">
        <p>Coming soon</p>
      </Route>
      <Route path="/assignments">
        <Assignments />
      </Route>
    </Switch>
  </HashRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
