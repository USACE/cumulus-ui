import createRestBundle from '@usace/create-rest-bundle';
import { createSelector } from 'redux-bundler';
import { getMonth, getYear, isAfter, isBefore } from 'date-fns';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'product',
  uid: 'id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: false,
  routeParam: 'product_id',
  getTemplate: `${apiUrl}/products`,
  putTemplate: `${apiUrl}/products/:item.id`,
  postTemplate: `${apiUrl}/products`,
  deleteTemplate: `${apiUrl}/products/:item.id`,
  fetchActions: ['AUTH_LOGGED_IN', 'AUTH_UPDATED'],
  urlParamSelectors: ['selectProductIdByRoute'],
  forceFetchActions: [
    'PRODUCT_SAVE_FINISHED',
    'PRODUCT_TAG_ADD_FINISH',
    'PRODUCT_TAG_REMOVE_FINISH',
    'TAG_DELETE_FINISHED',
  ],
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
          const after = new Date(product.after);
          const yearAfter =
            getMonth(after) > 8 ? getYear(after) + 1 : getYear(after);

          const before = new Date(product.before);
          const yearBefore =
            getMonth(before) > 8 ? getYear(before) + 1 : getYear(before);

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
          if (obj.hasOwnProperty(item.parameter)) {
            obj[item.parameter].push(item);
            return;
          }
          obj[item.parameter] = [item];
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

    selectProductParametersAsObjects: createSelector(
      'selectProductParameters',
      (parameters) => {
        return parameters.map((p, i) => {
          return {
            id: btoa(p),
            name: p,
            description: '',
          };
        });
      }
    ),

    selectProductDateRangeFrom: createSelector(
      'selectProductItemsArray',
      (items) => {
        let out = new Date('01-Jan-3000');
        items.forEach((p) => {
          if (p.productfile_count > 0) {
            const d = new Date(p.after);
            if (isBefore(d, out)) out = d;
          }
        });
        return out;
      }
    ),

    selectProductDateRangeTo: createSelector(
      'selectProductItemsArray',
      (items) => {
        let out = new Date('01-Jan-1980');
        items.forEach((p) => {
          if (p.productfile_count > 0) {
            const d = new Date(p.before);
            if (isAfter(d, out)) out = d;
          }
        });
        return out;
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
