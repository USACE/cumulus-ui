import createRestBundle from '@usace/create-rest-bundle';

export default createRestBundle({
  name: 'watershed_role',
  uid: 'id',
  prefetch: false,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'watershed_id',
  getTemplate: '/watersheds',
  putTemplate: '/watersheds/:item.id',
  postTemplate: '/watersheds',
  deleteTemplate: '/watersheds/:item.id',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
