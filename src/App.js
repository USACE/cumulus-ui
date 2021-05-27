import React from 'react';
import { connect } from 'redux-bundler-react';
import Modal from './app-components/Modal';
// import Dashboard from './pages/Dashboard';

const App = connect('selectRoute', ({ route: Route }) => {
  return (
    <>
      <Route />
      <Modal />
    </>
  );
});

export default App;
