import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from 'redux-bundler';

import createAuthBundle from './create-auth-bundle';
import createJwtApiBundle from './create-jwt-api-bundle';

import routeBundle from './route-bundle';

import cache from '../cache';
import productBundle from './product-bundle';

// import AdminDashboard from '../pages/admin/Dashboard';

const mockTokenTestUser =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwIiwibmFtZSI6IlVzZXIuVGVzdCIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoyMDAwMDAwMDAwLCJyb2xlcyI6WyJQVUJMSUMuVVNFUiJdfQ.q7TG-5QKo19raWrTz2A7639tB-V7RKJMPJ5-4qwdNd4';

export default composeBundles(
  createCacheBundle({ cacheFn: cache.set }),
  createUrlBundle,
  routeBundle,
  productBundle,
  createAuthBundle({
    appId: '20a4794c-91c3-4080-a42c-d9c0bda332a4',
    redirectOnLogout: '/',
    mock: process.env.NODE_ENV === 'development' ? true : false,
    token: process.env.NODE_ENV === 'development' ? mockTokenTestUser : null,
  }),
  createJwtApiBundle({
    root:
      process.env.NODE_ENV === 'development'
        ? `https://cumulus-api.rsgis.dev`
        : process.env.REACT_APP_CUMULUS_API_URL,
    unless: {
      // GET requests do not include token unless path starts with /my_
      // Need token to figure out who "me" is
      custom: ({ method, path }) => {
        if (method === 'GET') {
          if (path.slice(0, 4) === '/my_') {
            return false;
          }
          return true;
        }
        return false;
      },
    },
  })
);
