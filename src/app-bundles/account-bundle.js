import createRestBundle from '@usace/create-rest-bundle';

export default createRestBundle({
  name: 'account',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'unit_id',
  getTemplate: '/accounts',
  putTemplate: '/accounts/:item.id',
  postTemplate: '/accounts',
  deleteTemplate: '/accounts/:item.id',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
