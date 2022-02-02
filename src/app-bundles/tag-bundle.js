import createRestBundle from '@usace/create-rest-bundle';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'tag',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'tag_id',
  getTemplate: `${apiUrl}/tags`,
  putTemplate: `${apiUrl}/tags/:item.id`,
  postTemplate: `${apiUrl}/tags`,
  deleteTemplate: `${apiUrl}/tags/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {},
});
