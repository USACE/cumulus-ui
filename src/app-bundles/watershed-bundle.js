import { createSelector } from 'redux-bundler';
import createRestBundle from '@usace/create-rest-bundle';
const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'watershed',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'watershed_id',
  getTemplate: `${apiURL}/watersheds`,
  putTemplate: `${apiURL}/watersheds/:item.id`,
  postTemplate: `${apiURL}/watersheds`,
  deleteTemplate: `${apiURL}/watersheds/:item.id`,
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: ['AUTH_UPDATED'],
  sortBy: '',
  sortAsc: false,
  addons: {
    selectWatershedDistricts: createSelector(
      'selectWatershedItems',
      (watersheds) => {
        const districts = [];
        watersheds.forEach((watershed) => {
          if (districts.indexOf(watershed.office_symbol) === -1)
            districts.push(watershed.office_symbol);
        });
        return districts.sort();
      }
    ),
  },
});
