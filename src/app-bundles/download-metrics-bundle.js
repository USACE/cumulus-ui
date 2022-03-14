import createRestBundle from '@usace/create-rest-bundle';

const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'downloadMetrics',
  uid: '',
  prefetch: true,
  staleAfter: 300000, // 300000 milliseconds = 5min
  persist: true,
  routeParam: '',
  getTemplate: `${apiURL}/metrics/downloads`,
  putTemplate: '',
  postTemplate: '',
  deleteTemplate: '',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: ['DOWNLOAD_REQUEST_FINISH', 'AUTH_UPDATED'],
  sortBy: '',
  sortAsc: true,
  addons: {},
});
