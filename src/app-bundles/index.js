import {
  composeBundles,
  createCacheBundle,
  createUrlBundle
} from "redux-bundler";

import {
  createOlBasemapBundle,
  createOlMapBundle
} from "@corpsmap/corpsmap-bundles";

import routeBundle from "./route.js";

import cache from "./../cache.js";

export default composeBundles(
  createCacheBundle({
    cacheFn: cache.set
  }),
  createUrlBundle(),
  createOlBasemapBundle(),
  createOlMapBundle(),
  routeBundle
);
