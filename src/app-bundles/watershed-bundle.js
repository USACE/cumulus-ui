import createRestBundle from './create-rest-bundle';
const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'watershed',
  uid: 'id',
  prefetch: false,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'watershed_id',
  getTemplate: `${apiURL}/watersheds`,
  putTemplate: `${apiURL}/watersheds/:item.id`,
  postTemplate: `${apiURL}/watersheds`,
  deleteTemplate: `${apiURL}/watersheds/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: '',
  sortAsc: false,
  addons: {},
});
