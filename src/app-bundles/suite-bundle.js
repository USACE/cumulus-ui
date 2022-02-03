import createRestBundle from '@usace/create-rest-bundle';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'suite',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'suite_id',
  getTemplate: `${apiUrl}/suites`,
  putTemplate: `${apiUrl}/suites/:item.id`,
  postTemplate: `${apiUrl}/suites`,
  deleteTemplate: `${apiUrl}/suites/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: ['AUTH_UPDATED'],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
