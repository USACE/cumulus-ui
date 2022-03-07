import { createSelector } from 'redux-bundler';
import createRestBundle from '@usace/create-rest-bundle';

const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'adminDownload',
  uid: 'id',
  prefetch: true,
  staleAfter: 300000, // 300000 milliseconds = 5min
  persist: true,
  routeParam: '',
  getTemplate: `${apiURL}/downloads`,
  putTemplate: '',
  postTemplate: '',
  deleteTemplate: '',
  fetchActions: [],
  urlParamSelectors: [],
  forceFetchActions: ['AUTH_UPDATED'],
  sortBy: '',
  sortAsc: true,
  addons: {
    selectAdminDownloadByStatus: createSelector(
      'selectAdminDownloadItems',
      (downloads) => {
        const obj = {};
        downloads.forEach((d) => {
          obj[d.status] = d;
        });
        return obj;
      }
    ),
  },
});
