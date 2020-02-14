import React from 'react';
import ReactDOM from 'react-dom';
import Assignments from './assignments';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
