import { createRouteBundle } from 'redux-bundler';

import Home from '../app-pages/home';
import fourOhFour from '../app-pages/404';
// import AdminDashboard from '../app-pages/admin';
// import AdminProducts from '../app-pages/admin/products/index';
// import AdminTags from '../app-pages/admin/tags/index';
// import AdminWatersheds from '../app-pages/admin/watersheds/index';
// import AdminAccounts from '../app-pages/admin/accounts/index';
// import AdminUnits from '../app-pages/admin/units/index';
// import AdminSuites from '../app-pages/admin/suites/index';
// import AdminParameters from '../app-pages/admin/parameters/index';
// import AdminDownloads from '../app-pages/admin/downloads/index';
import Products from '../app-pages/products/products';
import Profile from '../app-pages/profile/profile';
import Support from '../app-pages/support/support';
import DocsApi from '../app-pages/support/docs/api';
import DocsRtsScript from '../app-pages/support/docs/rts-script';
// import ProductDetails from '../app-pages/products/product-details';
// import Downloads from '../app-pages/downloads/index';
// import Help from '../app-pages/help/index';
// import Docs from '../app-pages/docs/index';
// import Contact from '../app-pages/contact/index';

export default createRouteBundle({
  '/': Home,
  '/download': Home,
  '/profile': Profile,
  // '/admin': AdminDashboard,
  // '/admin/products': AdminProducts,
  // '/admin/tags': AdminTags,
  // '/admin/watersheds': AdminWatersheds,
  // '/admin/accounts': AdminAccounts,
  // '/admin/units': AdminUnits,
  // '/admin/suites': AdminSuites,
  // '/admin/parameters': AdminParameters,
  // '/admin/downloads': AdminDownloads,
  '/products': Products,
  '/support': Support,
  '/support/docs/api': DocsApi,
  '/support/docs/rts-script': DocsRtsScript,
  // '/products/:product_id': ProductDetails,
  // '/downloads': Downloads,
  // '/help': Help,
  // '/docs': Docs,
  // '/contact': Contact,
  '*': fourOhFour,
});
