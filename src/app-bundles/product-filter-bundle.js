import { createSelector } from 'redux-bundler';
import { throttle } from '../utils';
import { areIntervalsOverlapping } from 'date-fns';

const productFilterBundle = {
  name: 'productFilter',

  getReducer: () => {
    const initialData = {
      filterString: '',
      applyDateFilter: false,
      dateFrom: new Date(),
      dateTo: new Date(),
      tags: [],
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case 'PRODUCT_FILTER_SET_VALUE':
          return { ...state, ...payload };
        default:
          return state;
      }
    };
  },

  selectProductFilterFilterString: (state) => {
    return state.productFilter.filterString;
  },

  selectProductFilterApplyDateFilter: (state) => {
    return state.productFilter.applyDateFilter;
  },

  selectProductFilterDateFrom: (state) => {
    return state.productFilter.dateFrom;
  },

  selectProductFilterDateTo: (state) => {
    return state.productFilter.dateTo;
  },

  selectProductFilterTags: (state) => {
    return state.productFilter.tags;
  },

  selectProductFilterResults: createSelector(
    'selectProductItems',
    'selectProductFilterFilterString',
    'selectProductFilterApplyDateFilter',
    'selectProductFilterDateFrom',
    'selectProductFilterDateTo',
    'selectProductFilterTags',
    (items, filterString, applyDateFilter, dateFrom, dateTo, tags) => {
      return items.filter((product) => {
        let pass = true;

        // filter using a simple string search
        if (filterString) {
          if (
            Object.values(product)
              .join(' ')
              .toUpperCase()
              .indexOf(filterString.toUpperCase()) === -1
          )
            pass = false;
        }

        // check for date range match, for now if you don't have dates we let you through i guess
        if (applyDateFilter) {
          try {
            const overlapping = areIntervalsOverlapping(
              { start: new Date(product.after), end: new Date(product.before) },
              { start: dateFrom, end: dateTo }
            );
            if (!overlapping) {
              pass = false;
            }
          } catch (e) {
            console.log(e.stack);
            pass = false;
          }
        }

        // apply tag filters
        if (tags.length > 0) {
          let matchTag = false;
          for (var t = 0; t < product.tags.length; t++) {
            if (tags.indexOf(product.tags[t]) !== -1) {
              matchTag = true;
              break;
            }
          }
          pass = matchTag;
        }

        return pass;
      });
    }
  ),

  doProductFilterSetFilterString:
    (filterString) =>
    ({ dispatch }) => {
      dispatch({
        type: 'PRODUCT_FILTER_SET_VALUE',
        payload: {
          filterString,
        },
      });
    },

  doProductFilterSetApplyDateFilter:
    (applyDateFilter) =>
    ({ dispatch }) => {
      dispatch({
        type: 'PRODUCT_FILTER_SET_VALUE',
        payload: {
          applyDateFilter,
        },
      });
    },

  doProductFilterSetDateFrom: (dateFrom) => {
    return throttle(({ dispatch }) => {
      dispatch({
        type: 'PRODUCT_FILTER_SET_VALUE',
        payload: {
          dateFrom,
        },
      });
    }, 250);
  },

  doProductFilterSetDateTo: (dateTo) => {
    return throttle(({ dispatch }) => {
      dispatch({
        type: 'PRODUCT_FILTER_SET_VALUE',
        payload: {
          dateTo,
        },
      });
    }, 250);
  },

  doProductFilterSetTags:
    (tags) =>
    ({ dispatch }) => {
      dispatch({
        type: 'PRODUCT_FILTER_SET_VALUE',
        payload: {
          tags,
        },
      });
    },
};

export default productFilterBundle;
