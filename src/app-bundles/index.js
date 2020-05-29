import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from "redux-bundler";

import {
  createAuthBundle,
  createJwtApiBundle,
  createOlBasemapBundle,
  createOlMapBundle,
  createNestedUrlBundle,
} from "@corpsmap/corpsmap-bundles";
import pkg from "../../package.json";

import routeBundle from "./routes-bundle";
import shapefileBundle from "./shapefile-bundle";

import cache from "./../cache.js";

export default composeBundles(
  createAuthBundle({
    appId: "20a4794c-91c3-4080-a42c-d9c0bda332a4",
    redirectOnLogout: "/",
  }),
  createJwtApiBundle({
    root:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3030/cumulus`
        : `https://api.rsgis.dev/development/cumulus`,
  }),
  createCacheBundle({
    cacheFn: cache.set,
  }),
  createUrlBundle(),
  createNestedUrlBundle({
    pkg: pkg,
  }),
  createOlBasemapBundle(),
  createOlMapBundle({
    name: "map",
    center: [-80.79, 26.94],
    zoom: 10,
  }),
  routeBundle,
  shapefileBundle
);
