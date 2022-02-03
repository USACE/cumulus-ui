import createRestBundle from '@usace/create-rest-bundle';
import { createSelector } from 'redux-bundler';
import moment from 'moment';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'product',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: true,
  routeParam: 'product_id',
  getTemplate: `${apiUrl}/products`,
  putTemplate: `${apiUrl}/products/:item.id`,
  postTemplate: `${apiUrl}/products`,
  deleteTemplate: `${apiUrl}/products/:item.id`,
  fetchActions: ['AUTH_LOGGED_IN'],
  urlParamSelectors: ['selectProductIdByRoute'],
  forceFetchActions: ['PRODUCT_SAVE_FINISHED'],
  sortBy: '',
  sortAsc: false,
  reduceFurther: (state, { type, payload }) => {
    switch (type) {
      case 'PRODUCT_TAG_REMOVE_START':
      case 'PRODUCT_TAG_REMOVE_FINISH':
      case 'PRODUCT_TAG_REMOVE_ERROR':
      case 'PRODUCT_TAG_ADD_START':
      case 'PRODUCT_TAG_ADD_FINISH':
      case 'PRODUCT_TAG_ADD_ERROR':
        return {
          ...state,
          ...payload,
        };
      default:
        return state;
    }
  },
  addons: {
    selectProductIdByRoute: createSelector(
      'selectProductByRoute',
      (product) => {
        if (product && product.id) return { product_id: product.id };
        return null;
      }
    ),
    selectProductYearsByRoute: createSelector(
      'selectProductByRoute',
      (product) => {
        if (product && product.after && product.before) {
          // Water year runs October --> September
          // (not Jan - Dec). If in October, add a year
          const momentAfter = moment(product.after);
          const yearAfter =
            momentAfter.month() > 8
              ? momentAfter.year() + 1
              : momentAfter.year();
          const momentBefore = moment(product.before);
          const yearBefore =
            momentBefore.month() > 8
              ? momentBefore.year() + 1
              : momentBefore.year();

          let years = [];
          for (var y = yearAfter; y <= yearBefore; y++) {
            years.push(y);
          }
          return years;
        }
        return [];
      }
    ),

    selectProductByParameter: createSelector(
      'selectProductItemsArray',
      (items) => {
        const obj = {};
        items.forEach((item) => {
          if (obj.hasOwnProperty(item.group)) {
            obj[item.group].push(item);
            return;
          }
          obj[item.group] = [item];
        });
        return obj;
      }
    ),
    selectProductParameters: createSelector(
      'selectProductByParameter',
      (obj) => {
        if (!obj || !Object.keys(obj).length) {
          return [];
        }
        return Object.keys(obj);
      }
    ),
    doProductTagRemove:
      (productId, tagId) =>
      ({ dispatch, store, apiDelete }) => {
        dispatch({ type: 'PRODUCT_TAG_REMOVE_START', payload: {} });
        apiDelete(
          `${apiUrl}/products/${productId}/tags/${tagId}`,
          (err, respObj) => {
            if (!err) {
              dispatch({
                type: 'PRODUCT_TAG_REMOVE_FINISH',
                payload: { [respObj.id]: respObj },
              });
            } else {
              dispatch({ type: 'PRODUCT_TAG_REMOVE_ERROR', payload: {} });
            }
          }
        );
      },
    doProductTagAdd:
      (productId, tagId) =>
      ({ dispatch, store, apiPost }) => {
        dispatch({ type: 'PRODUCT_TAG_ADD_START' });
        apiPost(
          `${apiUrl}/products/${productId}/tags/${tagId}`,
          {},
          (err, respObj) => {
            if (!err) {
              dispatch({
                type: 'PRODUCT_TAG_ADD_FINISH',
                payload: {
                  [respObj.id]: respObj,
                },
              });
            } else {
              dispatch({ type: 'PRODUCT_TAG_ADD_ERROR', payload: {} });
            }
          }
        );
      },
  },
});
