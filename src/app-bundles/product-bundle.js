import createRestBundle from './create-rest-bundle';
import { createSelector } from 'redux-bundler';
import moment from 'moment';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

export default createRestBundle({
  name: 'product',
  uid: 'id',
  prefetch: false,
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
  sortBy: 'name',
  sortAsc: true,
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
  },
});
