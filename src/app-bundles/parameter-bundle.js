import createRestBundle from './create-rest-bundle';

export default createRestBundle({
  name: 'parameter',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'parameter_id',
  getTemplate: '/parameters',
  putTemplate: '/parameters/:item.id',
  postTemplate: '/parameters',
  deleteTemplate: '/parameters/:item.id',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
