import createRestBundle from '@usace/create-rest-bundle';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'dssDatatype',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'datatype_id',
  getTemplate: `${apiUrl}/dss/datatypes`,
  // putTemplate: `${apiUrl}/suites/:item.id`,
  // postTemplate: `${apiUrl}/suites`,
  // deleteTemplate: `${apiUrl}/suites/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: ['AUTH_UPDATED', 'PRODUCT_SAVE_FINISHED'],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
