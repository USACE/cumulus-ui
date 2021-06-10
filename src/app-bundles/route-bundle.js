import { createRouteBundle } from 'redux-bundler';

// import Home from '../app-pages/home';
import Dashboard from '../app-pages/home';
import AdminDashboard from '../app-pages/admin';
import AdminProducts from '../app-pages/admin/products/index';
import AdminTags from '../app-pages/admin/tags/index';
import AdminWatersheds from '../app-pages/admin/watersheds/index';
import AdminAccounts from '../app-pages/admin/accounts/index';
import AdminUnits from '../app-pages/admin/units/index';
import Products from '../app-pages/products/products';

export default createRouteBundle({
  '/': Dashboard,
  '/admin': AdminDashboard,
  '/admin/products': AdminProducts,
  '/admin/tags': AdminTags,
  '/admin/watersheds': AdminWatersheds,
  '/admin/accounts': AdminAccounts,
  '/admin/units': AdminUnits,
  '/products': Products,
});
