import createRestBundle from './create-rest-bundle';

export default createRestBundle({
  name: 'tag',
  uid: 'id',
  prefetch: false,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'tag_id',
  getTemplate: '/tags',
  putTemplate: '/tags/:item.id',
  postTemplate: '/tags',
  deleteTemplate: '/tags/:item.id',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
