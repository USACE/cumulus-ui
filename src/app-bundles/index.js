import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from 'redux-bundler';

import createAuthBundle from '@usace/create-keycloak-auth-bundle';
import createJwtApiBundle from '@usace/create-jwt-api-bundle';

import routeBundle from './route-bundle';

import cache from '../cache';
import modalBundle from './modal-bundle';
import productBundle from './product-bundle';
import productFilterBundle from './product-filter-bundle';
import productSelectBundle from './product-select-bundle';
import tagBundle from './tag-bundle';
import unitBundle from './unit-bundle';
import officeBundle from './office-bundle';
import parameterBundle from './parameter-bundle';
import suiteBundle from './suite-bundle';
import watershedBundle from './watershed-bundle';
import selectBundle from './select-bundle';
import selectProductAvailabilityBundle from './product-availability-bundle';
import downloadBundle from './download-bundle';
import downloadModalBundle from './download-modal-bundle';
import downloadMetricsBundle from './download-metrics-bundle';
import adminDownloadBundle from './admin-download-bundle';
import productIngestStatusBundle from './project-ingest-status';
import dssDatatypeBundle from './dss-datatype-bundle';

const mockTokens = {
  ADMIN:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJZYVZSTS0xVmp1LWR2N2NEZ0k5ZnJkNVRtZFl1RU5QbWRoV0NaZU1TWmMifQ.eyJleHAiOjE4Mzg1NTU5ODgsImlhdCI6MTYzODU1NTY4OCwianRpIjoiY2YxMWIzMGEtZDg3Zi00OTU2LWEwNjctMTE0OTJjMTZkYjk2IiwiaXNzIjoiaHR0cHM6Ly9kZXZlbG9wLWF1dGguY29ycHMuY2xvdWQvYXV0aC9yZWFsbXMvd2F0ZXIiLCJhdWQiOlsiYTJ3IiwiYWNjb3VudCJdLCJzdWIiOiIzMmUxYjgzMi1hOGVhLTRiOWMtYWIwNC1hNzI0NmNlNzMyMWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjdW11bHVzIiwic2Vzc2lvbl9zdGF0ZSI6IjVhNTgyZjNlLWIyYWItNDA2OS05N2I1LTIwZWM0NmQ1MmFmZiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy13YXRlciIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJjdW11bHVzIjp7InJvbGVzIjpbImFwcGxpY2F0aW9uLmFkbWluIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9rZW4ubW9jay5hZG1pbiIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.fpaIFpqHBnnpBtIe8sOwzSkCEzDbPiHy7FHcI5w1jgI',
  USER: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJZYVZSTS0xVmp1LWR2N2NEZ0k5ZnJkNVRtZFl1RU5QbWRoV0NaZU1TWmMifQ.eyJleHAiOjE4Mzg1NTU5ODgsImlhdCI6MTYzODU1NTY4OCwianRpIjoiY2YxMWIzMGEtZDg3Zi00OTU2LWEwNjctMTE0OTJjMTZkYjk2IiwiaXNzIjoiaHR0cHM6Ly9kZXZlbG9wLWF1dGguY29ycHMuY2xvdWQvYXV0aC9yZWFsbXMvd2F0ZXIiLCJhdWQiOlsiYTJ3IiwiYWNjb3VudCJdLCJzdWIiOiIzMmUxYjgzMi1hOGVhLTRiOWMtYWIwNC1hNzI0NmNlNzMyMWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjdW11bHVzIiwic2Vzc2lvbl9zdGF0ZSI6IjVhNTgyZjNlLWIyYWItNDA2OS05N2I1LTIwZWM0NmQ1MmFmZiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy13YXRlciIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJjdW11bHVzIjp7InJvbGVzIjpbXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0b2tlbi5tb2NrLnVzZXIiLCJnaXZlbl9uYW1lIjoiIiwiZmFtaWx5X25hbWUiOiIifQ.E5v4rF4xnGVNOkRJPt5HUsIFzYbo7KUJtoiqgR_5XaE',
};
const mockUser = process.env.REACT_APP_AUTH_MOCK_USER
  ? process.env.REACT_APP_AUTH_MOCK_USER.toUpperCase()
  : null;

export default composeBundles(
  createCacheBundle({ cacheFn: cache.set }),
  createUrlBundle,
  modalBundle,
  routeBundle,
  officeBundle,
  productBundle,
  productFilterBundle,
  productSelectBundle,
  suiteBundle,
  tagBundle,
  unitBundle,
  parameterBundle,
  watershedBundle,
  selectBundle,
  selectProductAvailabilityBundle,
  downloadBundle,
  downloadModalBundle,
  downloadMetricsBundle,
  adminDownloadBundle,
  productIngestStatusBundle,
  dssDatatypeBundle,
  createAuthBundle({
    name: 'auth',
    host: process.env.REACT_APP_AUTH_HOST,
    realm: 'water',
    client: 'cumulus',
    redirectUrl: process.env.REACT_APP_AUTH_REDIRECT_URL,
    refreshInterval: 120,
    sessionEndWarning: 600,
    mock:
      process.env.NODE_ENV === 'development' && mockUser && mockTokens[mockUser]
        ? true
        : false,
    mockToken: mockUser ? mockTokens[mockUser] : null,
  }),
  createJwtApiBundle({
    root: process.env.REACT_APP_CUMULUS_API_URL,
    skipTokenConfig: {
      // GET requests do not include token unless path starts with /my_
      // Need token to figure out who "me" is
      custom: ({ method, url }) => {
        // Skip including JWT Bearer Token on all GET requests UNLESS URL pathaname starts with /my_
        // or it's defined in token_routes array
        if (method === 'GET') {
          const urlObj = new URL(url);
          const token_routes = {
            '/my_downloads': true,
            '/downloads': true,
          };
          if (urlObj.pathname && token_routes[urlObj.pathname]) {
            return false;
          }
          return true;
        }
        // Include JWT Bearer Token on all other requests
        return false;
      },
    },
  })
);
