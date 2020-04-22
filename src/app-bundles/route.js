import { createRouteBundle } from "redux-bundler";

import Home from "../app-pages/home/home";
import fourOhFour from "../app-pages/fourOhFour";

export default createRouteBundle(
  {
    "/": Home,
    "*": fourOhFour,
  },
  {
    routeInfoSelector: "selectPathnameMinusHomepage",
  }
);
