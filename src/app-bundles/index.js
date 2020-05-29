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
import mapsBundle from "./maps-bundle";

import cache from "./../cache.js";

export default composeBundles(
  createAuthBundle({
    appId: "20a4794c-91c3-4080-a42c-d9c0bda332a4",
    redirectOnLogout: "/",
    token:
      "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMzg4NDY0MTE1Iiwicm9sZXMiOlsiUFVCTElDLlBVQkxJQyJdLCJhdWQiOlsiMjBhNDc5NGMtOTFjMy00MDgwLWE0MmMtZDljMGJkYTMzMmE0Il0sImlhdCI6MTU5MDc3Nzk1MiwiZXhwIjoxNTkwODY0MzUyLCJuYW1lIjoiUEFMTUJFUkcuQlJFVFQuIn0.nu7dusciAcdFKvpWmj6-WLBN1gVKF4t2EBwDQ3hSDl_LTbH0cR_m3dGytp0HWi6JJZ6OzVPc9xp9wgULuiwHlWDZ0xXKbCAiGKqXISzacvw5wHWIoizJO1D5e4ujvlYk_lzUBDnb96Xc2ThKJZjVscrJHiSlWp1Z6eO3IA_dkln4mOcovJhTMFQKxtH9ppD1ZLrctYerk0u_JEqpr3iPfwvycjo0W20SxzXp9zMTGbSIqmEfPf8h347_Myar-mb2GvwlEYpuIP0NBhF6DS5NLwYcu4oBRFM0bY2MJ20d0bSsIjF02_ge7-zsx_FDJ1Rz9s7lB4KTB06fFPaYkQWpcJ0qbEMHYR7pokrgqmdhU2-avr0ZO1fOWqEQ8PLsl9U1y-murwjwtqfzEOd3GPgKBHFU-CTkMYZPNphwqMONU0skYnYvLNOLxrpTMj6h9xLyl8XBR69cFyt3Kyqgn2NNwO67AcrMa0XSkqNUibItWmuuk3Sf8DXwl39hvuNlVI69YFI0KRDtbkkXpqYlSiYZeE8yLhB4BEufeL5zn4IKUetkaNnPsCuzYRyl-Z3qoEuQQBVnV4nDAr8GpZIBkg91YZn56kSwtE8LgurJ5m5i0uFsPVLczaOUiadC_RXkpUS1lFKv90NRoTkR83tt7tH5e4yLYPx1NXhicxIzBFQcdCc",
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
    zoom: 5,
  }),
  routeBundle,
  shapefileBundle,
  mapsBundle
);
