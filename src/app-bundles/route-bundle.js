import { createRouteBundle } from 'redux-bundler';

// import Home from '../app-pages/home';
import Dashboard from '../app-pages/home';
import AdminDashboard from '../app-pages/admin';
import AdminProducts from '../app-pages/admin/products';
import AdminProductTags from '../app-pages/admin/product-tags';
import AdminWatersheds from '../app-pages/admin/watersheds';
import AdminAccounts from '../app-pages/admin/accounts';
import Products from '../app-pages/products/products';

export default createRouteBundle({
  '/': Dashboard,
  '/admin': AdminDashboard,
  '/admin/products': AdminProducts,
  '/admin/product-tags': AdminProductTags,
  '/admin/watersheds': AdminWatersheds,
  '/admin/accounts': AdminAccounts,
  '/products': Products,
});
