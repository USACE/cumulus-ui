import createRestBundle from '@usace/create-rest-bundle';

const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'unit',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'unit_id',
  getTemplate: `${apiURL}/units`,
  putTemplate: `${apiURL}/units/:item.id`,
  postTemplate: `${apiURL}/units`,
  deleteTemplate: `${apiURL}/units/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
