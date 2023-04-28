import createRestBundle from '@usace/create-rest-bundle';

const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'productIngestStatus',
  uid: 'slug',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: '',
  getTemplate: `${apiURL}/product_ingest_status`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'slug',
  sortAsc: true,
  addons: {},
});
