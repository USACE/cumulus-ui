import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from 'redux-bundler';

import createAuthBundle from './create-auth-bundle';
import createJwtApiBundle from './create-jwt-api-bundle';

import routeBundle from './route-bundle';

import cache from '../cache';
import modalBundle from './modal-bundle';
import accountdBundle from './account-bundle';
import productBundle from './product-bundle';
import profileBundle from './profile-bundle';
import tagBundle from './tag-bundle';
import unitBundle from './unit-bundle';
import officeBundle from './office-bundle';
import parameterBundle from './parameter-bundle';
import suiteBundle from './suite-bundle';
import watershedBundle from './watershed-bundle';
import selectBundle from './select-bundle';
import selectProductAvailabilityBundle from './product-availability-bundle';
import downloadBundle from './download-bundle';

// import AdminDashboard from '../pages/admin/Dashboard';
//const mockTokenTestUser =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwIiwibmFtZSI6IlVzZXIuVGVzdCIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoyMDAwMDAwMDAwLCJyb2xlcyI6WyJQVUJMSUMuVVNFUiJdfQ.q7TG-5QKo19raWrTz2A7639tB-V7RKJMPJ5-4qwdNd4';

//const mockTokenNewUser =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVzZXIuTmV3IiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjIwMDAwMDAwMDAsInJvbGVzIjpbIlBVQkxJQy5VU0VSIl19._WR_s6AGyq2FwHA980M8XoFbhVInvgTqstauxUfcmYs';

const mockTokenExistingAdmin =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6IlVzZXIuQWRtaW4iLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjAwMDAwMDAwMCwicm9sZXMiOlsiUFVCTElDLlVTRVIiXX0.4VAMamtH92GiIb5CpGKpP6LKwU6IjIfw5wS4qc8O8VM';

//const mockTokenExistingUser =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzIiwibmFtZSI6IlVzZXIuVXNlciIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoyMDAwMDAwMDAwLCJyb2xlcyI6WyJQVUJMSUMuVVNFUiJdfQ.HBI9csnyVCWUHo_JiUuCQyPEl1EpI0inEDMu2s6coGc';

// Include Token With GET Request on These Routes
const includeTokenRoutes = {
  '/downloads': true,
};

export default composeBundles(
  createCacheBundle({ cacheFn: cache.set }),
  createUrlBundle,
  modalBundle,
  routeBundle,
  accountdBundle,
  officeBundle,
  productBundle,
  profileBundle,
  suiteBundle,
  tagBundle,
  unitBundle,
  parameterBundle,
  watershedBundle,
  selectBundle,
  selectProductAvailabilityBundle,
  downloadBundle,
  createAuthBundle({
    appId: '20a4794c-91c3-4080-a42c-d9c0bda332a4',
    redirectOnLogout: '/',
    mock: process.env.NODE_ENV === 'development' ? true : false,
    token:
      process.env.NODE_ENV === 'development' ? mockTokenExistingAdmin : null,
  }),
  createJwtApiBundle({
    root: process.env.REACT_APP_CUMULUS_API_URL,
    unless: {
      // GET requests do not include token unless path starts with /my_
      // Need token to figure out who "me" is
      custom: ({ method, path }) => {
        if (method === 'GET') {
          // Include Token on Any Routes that start with /my_
          // or are explicitly whitelisted in the object
          if (
            path.slice(0, 4) === '/my_' ||
            includeTokenRoutes.hasOwnProperty(path)
          ) {
            return false;
          }
          return true;
        }
        return false;
      },
    },
  })
);
