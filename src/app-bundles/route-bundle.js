import { createRouteBundle } from 'redux-bundler';

import Home from '../app-pages/home';

export default createRouteBundle({
  '/': Home,
});
