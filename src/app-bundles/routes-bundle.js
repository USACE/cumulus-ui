import { createRouteBundle } from "redux-bundler";

import Home from "../app-pages/home/home";
import fourOhFour from "../app-pages/fourOhFour";
import Logout from "../app-pages/logout";
import Admin from "../app-pages/admin/admin";
import Shapeloader from "../app-pages/shapeloader/shapeloader";
import Catalog from "../app-pages/catalog/catalog";
import ProductDetails from "../app-pages/catalog/product-details";
import Explorer from "../app-pages/explorer/explorer";
import Contact from "../app-pages/help/contact";
import Profile from "../app-pages/profile/profile";
import ProfileCreate from "../app-pages/profile/create";
import Basin from "../app-pages/basin/basin-details";
import WatershedDetail from "../app-pages/basin/basin-details";
import Basins from "../app-pages/basins/basins";
import Dashboard from "../app-pages/dashboard/dashboard";
import Download from "../app-pages/download/download";

export default createRouteBundle(
  {
    "": Home,
    "/": Home,
    "/ws/:ws_slug": WatershedDetail,
    "/basin/:basin_slug": Basin,
    "/basins": Basins,
    "/dashboard": Dashboard,
    "/download": Download,
    "/catalog": Catalog,
    "/profile": Profile,
    "/profile/create": ProfileCreate,
    "/catalog/:product_id": ProductDetails,
    "/explorer": Explorer,
    "/admin": Admin,
    "/admin/shapeloader": Shapeloader,
    "/logout": Logout,
    "/contact": Contact,
    "*": fourOhFour,
  },
  {
    routeInfoSelector: "selectPathnameMinusHomepage",
  }
);
