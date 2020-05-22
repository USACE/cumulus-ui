import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from "redux-bundler";

import {
  createOlBasemapBundle,
  createOlMapBundle,
  createNestedUrlBundle,
} from "@corpsmap/corpsmap-bundles";
import pkg from "../../package.json";

import routeBundle from "./routes-bundle.js";

import cache from "./../cache.js";

export default composeBundles(
  createCacheBundle({
    cacheFn: cache.set,
  }),
  createNestedUrlBundle({
    pkg: pkg,
  }),
  createUrlBundle(),
  createOlBasemapBundle(),
  createOlMapBundle(),
  routeBundle
);
