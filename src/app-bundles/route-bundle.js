import { createRouteBundle } from 'redux-bundler';

import Home from '../app-pages/home';
import fourOhFour from '../app-pages/404';
import AdminHome from '../app-pages/admin/home/home';
// import AdminDashboard from '../app-pages/admin';
import AdminProducts from '../app-pages/admin/products/products';
import AdminDownloads from '../app-pages/admin/downloads/downloads';
import AdminTags from '../app-pages/admin/tags/tags';
// import AdminWatersheds from '../app-pages/admin/watersheds/index';
// import AdminAccounts from '../app-pages/admin/accounts/index';
// import AdminUnits from '../app-pages/admin/units/index';
// import AdminSuites from '../app-pages/admin/suites/index';
// import AdminParameters from '../app-pages/admin/parameters/index';
import Products from '../app-pages/products/products';
import ProductDetails from '../app-pages/products/product-details';
import Profile from '../app-pages/profile/profile';
import Support from '../app-pages/support/support';
import DocsApi from '../app-pages/support/docs/api';
import DocsRtsScript from '../app-pages/support/docs/rts-script';
import Downloads from '../app-pages/downloads/downloads';
// import Help from '../app-pages/help/index';
// import Docs from '../app-pages/docs/index';
// import Contact from '../app-pages/contact/index';

export default createRouteBundle({
  '/': Home,
  '/download': Home,
  '/profile': Profile,
  '/admin': AdminHome,
  '/admin/products': AdminProducts,
  '/admin/downloads': AdminDownloads,
  '/admin/tags': AdminTags,
  // '/admin/watersheds': AdminWatersheds,
  // '/admin/accounts': AdminAccounts,
  // '/admin/units': AdminUnits,
  // '/admin/suites': AdminSuites,
  // '/admin/parameters': AdminParameters,

  '/products': Products,
  '/products/:product_id': ProductDetails,
  '/support': Support,
  '/support/docs/api': DocsApi,
  '/support/docs/rts-script': DocsRtsScript,
  '/downloads': Downloads,
  // '/help': Help,
  // '/docs': Docs,
  // '/contact': Contact,
  '*': fourOhFour,
});
