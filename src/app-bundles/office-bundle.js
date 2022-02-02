import { createSelector } from 'redux-bundler';
import createRestBundle from '@usace/create-rest-bundle';

const apiUrl = process.env.REACT_APP_SHARED_API_URL;

export default createRestBundle({
  name: 'office',
  uid: 'id',
  prefetch: true,
  staleAfter: 0, //milliseconds; 1Hour
  persist: true,
  routeParam: '',
  getTemplate: `${apiUrl}/offices`,
  putTemplate: '',
  postTemplate: '',
  deleteTemplate: '',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: [],
  sortBy: 'name',
  sortAsc: true,
  addons: {
    selectOfficeBySymbol: createSelector('selectOfficeItems', (offices) => {
      const obj = {};
      offices.forEach((f) => {
        obj[f.symbol] = f;
      });
      return obj;
    }),
  },
});
