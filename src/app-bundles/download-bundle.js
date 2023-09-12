import createRestBundle from '@usace/create-rest-bundle';
import { createSelector } from 'redux-bundler';
import { subDays, differenceInHours } from 'date-fns';

const apiURL = process.env.REACT_APP_CUMULUS_API_URL;

const pollIntervalMs = 3000;

const downloadBundle = createRestBundle({
  name: 'download',
  uid: 'id',
  prefetch: true,
  staleAfter: 0,
  persist: false,
  routeParam: '',
  getTemplate: `${apiURL}/my_downloads`,
  putTemplate: `${apiURL}:/`,
  postTemplate: `${apiURL}:/`,
  deleteTemplate: `${apiURL}:/`,
  fetchActions: [],
  forceFetchActions: ['DOWNLOAD_REQUEST_FINISH', 'AUTH_UPDATED'],
  urlParamSelectors: [],
  sortBy: 'processing_start',
  sortAsc: false,
  addons: {
    doDownloadRequest:
      (payload, callback) =>
      ({ store, dispatch }) => {
        dispatch({ type: 'DOWNLOAD_REQUEST_START' });

        // const apiRoot = store.selectApiRoot();
        const authToken = store.selectAuthToken();

        fetch(`${apiURL}/my_downloads`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authToken,
          },
        }).then((response) => {
          if (!response.ok) {
            console.log('ERROR in Download Request');
            callback(`Request returned a ${response.status}`);
          }
          dispatch({
            type: 'DOWNLOAD_REQUEST_FINISH',
          });
          callback();
        });
      },
    doDownloadPoll:
      () =>
      ({ store }) => {
        setTimeout(() => {
          store.doDownloadFetch();
        }, pollIntervalMs);
      },
    reactDownloadInProgress: createSelector(
      'selectDownloadItemsArray',
      'selectDownloadIsLoading',
      (downloads, isLoading) => {
        if (isLoading) {
          return null;
        }
        return downloads.filter(
          (d) =>
            d.status === 'INITIATED' &&
            d.progress < 100 &&
            // it is possible a stuck download ('INITIATED' and < 100 progress) could remain in the database.
            // When that happens this function will call the actionCreator doDownloadPoll
            // in an infinite loop forever.  Only evaluate downloads from the past 8 hours.
            differenceInHours(new Date(), new Date(d.processing_start)) < 8
        ).length
          ? { actionCreator: 'doDownloadPoll' }
          : null;
      }
    ),
    selectDownloadItemsPast15d: createSelector(
      'selectDownloadItems',
      (downloadItems) => {
        const threshold_date = subDays(new Date(), 15);
        return downloadItems.filter(
          (item) => Date.parse(item.processing_start) >= threshold_date
        );
      }
    ),
  },

  reduceFurther: (state, { type, payload }) => {
    switch (type) {
      case 'DOWNLOAD_REQUEST_START':
      case 'DOWNLOAD_REQUEST_FINISH':
        return Object.assign({}, state, payload);
      default:
        return state;
    }
  },
});

export default downloadBundle;
