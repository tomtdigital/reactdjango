import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Assignments from '../pages/assignments/index';

const App = () => (
  <Provider store={store}>
    <>
      <h1>Test</h1>
      <Assignments />
    </>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
