import React from 'react';
import { connect } from 'redux-bundler-react';
const App = connect('selectRoute', ({ route: Route }) => {
  return <Route />;
});

export default App;
