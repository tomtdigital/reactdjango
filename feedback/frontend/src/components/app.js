import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Table from './table';

const App = () => (
  <Provider store={store}>
    <>
      <h1>Assignments</h1>
      <Table />
    </>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
