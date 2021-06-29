import { createRouteBundle } from 'redux-bundler';

// import Home from '../app-pages/home';
import Dashboard from '../app-pages/home';
import fourOhFour from '../app-pages/fourOhFour';
import AdminDashboard from '../app-pages/admin';
import AdminProducts from '../app-pages/admin/products/index';
import AdminTags from '../app-pages/admin/tags/index';
import AdminWatersheds from '../app-pages/admin/watersheds/index';
import AdminAccounts from '../app-pages/admin/accounts/index';
import AdminUnits from '../app-pages/admin/units/index';
import AdminSuites from '../app-pages/admin/suites/index';
import AdminParameters from '../app-pages/admin/parameters/index';
import Products from '../app-pages/products/products';
import ProductDetails from '../app-pages/products/product-details';
import Downloads from '../app-pages/downloads/index';
import Profile from '../app-pages/profile/index';
import ProfileCreate from '../app-pages/profile/create';
import Help from '../app-pages/help/index';
import Docs from '../app-pages/docs/index';
import Contact from '../app-pages/contact/index';

export default createRouteBundle({
  '/': Dashboard,
  '/admin': AdminDashboard,
  '/admin/products': AdminProducts,
  '/admin/tags': AdminTags,
  '/admin/watersheds': AdminWatersheds,
  '/admin/accounts': AdminAccounts,
  '/admin/units': AdminUnits,
  '/admin/suites': AdminSuites,
  '/admin/parameters': AdminParameters,
  '/products': Products,
  '/products/:product_id': ProductDetails,
  '/downloads': Downloads,
  '/profile': Profile,
  '/profile/create': ProfileCreate,
  '/help': Help,
  '/docs': Docs,
  '/contact': Contact,
  '*': fourOhFour,
});
