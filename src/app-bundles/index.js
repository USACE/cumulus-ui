import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from 'redux-bundler';

import routeBundle from './route-bundle';

import cache from '../cache';

export default composeBundles(
  createCacheBundle(cache.set),
  createUrlBundle,
  routeBundle
);
