import createRestBundle from '@usace/create-rest-bundle';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'productavailability',
  uid: 'product_id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: false,
  routeParam: 'product_id',
  getTemplate: `${apiUrl}/products/:product_id/availability`,
  fetchActions: ['URL_UPDATED'],
  urlParamSelectors: ['selectProductIdByRoute'],
  forceFetchActions: [],
  sortBy: 'date',
  sortAsc: true,
  addons: {},
});
