import React from 'react';
import { connect } from 'redux-bundler-react';
import Modal from './app-components/Modal';
import Notification from './app-components/Notification';

const App = connect('selectRoute', ({ route: Route }) => {
  return (
    <>
      <Notification />
      <Route />
      <Modal />
    </>
  );
});

export default App;
