import React from 'react';
import { connect } from 'redux-bundler-react';

export default connect('selectRouteInfo', ({ routeInfo }) => {
  return <h1>{JSON.stringify(routeInfo)}</h1>;
});
