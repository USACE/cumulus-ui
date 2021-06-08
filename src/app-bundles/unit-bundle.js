import createRestBundle from './create-rest-bundle';

export default createRestBundle({
  name: 'unit',
  uid: 'id',
  prefetch: false,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'unit_id',
  getTemplate: '/units',
  putTemplate: '/units/:item.id',
  postTemplate: '/units',
  deleteTemplate: '/units/:item.id',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
