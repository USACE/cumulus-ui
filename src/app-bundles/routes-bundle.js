import { createRouteBundle } from "redux-bundler";

import Home from "../app-pages/home/home";
import fourOhFour from "../app-pages/fourOhFour";
import Logout from "../app-pages/logout";
import Admin from "../app-pages/admin/admin";
import Shapeloader from "../app-pages/shapeloader/shapeloader";
import Catalog from "../app-pages/catalog/catalog";
import ProductDetails from "../app-pages/catalog/product-details";
import Explorer from "../app-pages/explorer/explorer";

export default createRouteBundle(
  {
    "": Home,
    "/": Home,
    "/catalog": Catalog,
    "/catalog/:product_id": ProductDetails,
    "/explorer": Explorer,
    "/admin": Admin,
    "/admin/shapeloader": Shapeloader,
    "/logout": Logout,
    "*": fourOhFour,
  },
  {
    routeInfoSelector: "selectPathnameMinusHomepage",
  }
);
