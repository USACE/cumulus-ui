import createRestBundle from '@usace/create-rest-bundle';

const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'parameter',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'parameter_id',
  getTemplate: `${apiURL}/parameters`,
  putTemplate: `${apiURL}/parameters/:item.id`,
  postTemplate: `${apiURL}/parameters`,
  deleteTemplate: `${apiURL}/parameters/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
