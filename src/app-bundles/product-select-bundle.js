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

  selectProductSelectSelected: (state) => {
    return state.productSelect.selected;
  },

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
