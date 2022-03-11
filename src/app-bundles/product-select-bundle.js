import { createSelector } from 'redux-bundler';

const productSelectBundle = {
  name: 'productSelect',

  getReducer: () => {
    const initialData = {
      selected: [],
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case 'PRODUCT_SELECT_SET_SELECTION':
          return { ...state, ...payload };
        default:
          return state;
      }
    };
  },

  // returns array of IDs
  selectProductSelectSelected: (state) => {
    return state.productSelect.selected;
  },

  // returns filtered list of products, only the selected ones
  selectProductSelectProducts: createSelector(
    'selectProductItems',
    'selectProductSelectSelected',
    (products, selected) => {
      return products.filter((p) => {
        return selected.indexOf(p.id) !== -1;
      });
    }
  ),

  doProductSelectToggleAll:
    () =>
    ({ dispatch, store }) => {
      const products = store.selectProductFilterResults();
      const currentSelection = store.selectProductSelectSelected();
      if (currentSelection.length < products.length) {
        dispatch({
          type: 'PRODUCT_SELECT_SET_SELECTION',
          payload: {
            selected: [...products.map((p) => p.id)],
          },
        });
      } else {
        dispatch({
          type: 'PRODUCT_SELECT_SET_SELECTION',
          payload: {
            selected: [],
          },
        });
      }
    },

  doProductSelectSetSelected:
    (selected) =>
    ({ dispatch }) => {
      dispatch({
        type: 'PRODUCT_SELECT_SET_SELECTION',
        payload: {
          selected,
        },
      });
    },
};

export default productSelectBundle;
