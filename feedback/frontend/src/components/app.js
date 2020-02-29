import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import AssignmentsPage from '../pages/assignments/index';

const App = () => (
  <Provider store={store}>
    <>
      <AssignmentsPage />
    </>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
