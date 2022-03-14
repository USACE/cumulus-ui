import React from 'react';
// import { connect } from 'redux-bundler-react'
import Header from '../../app-components/Header';
import { RedocStandalone } from 'redoc';

const ApiDoc = () => (
  <>
    <Header />
    <RedocStandalone
      spec={
        'https://raw.githubusercontent.com/USACE/cumulus-api/stable/docs/apidoc.yaml'
      }
    />
  </>
);

export default ApiDoc;
