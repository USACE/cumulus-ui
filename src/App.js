import React from 'react';
import { connect } from 'redux-bundler-react';
// import Dashboard from './pages/Dashboard';

const App = connect('selectRoute', ({ route: Route }) => {
  return <Route>Hello</Route>;
});

export default App;
