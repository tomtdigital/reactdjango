import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';

const App = () => (
  <>
    <h1>Assignments</h1>
    <Table />
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
