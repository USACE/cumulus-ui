import { createRouteBundle } from 'redux-bundler';

// import Home from '../app-pages/home';
import Dashboard from '../pages/Dashboard';

export default createRouteBundle({
  '/': Dashboard,
});
