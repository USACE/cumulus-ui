import { createSelector } from 'redux-bundler';
import { PurchaseModal } from '../app-components/modals/purchase-modal';

const downloadModalBundle = {
  name: 'downloadModal',
  reducer: (state = {}, { type, payload }) => {
    switch (type) {
      default:
        return state;
    }
  },
  doDownloadModalOpen:
    () =>
    ({ dispatch, store }) => {
      // New hash object with modal=download removed
      const newHashObj = store.selectHashObject();
      delete newHashObj.modal;
      store.doModalOpen(PurchaseModal, {}, () => {
        store.doUpdateHash(newHashObj);
      });
    },
  reactDownloadModalOpen: createSelector(
    'selectHashObject',
    'selectModalContent',
    (hashObject, content) => {
      if (
        hashObject['modal'] !== 'download' ||
        (content && content === PurchaseModal)
      ) {
        return null;
      }
      return { actionCreator: 'doDownloadModalOpen' };
    }
  ),
};

export default downloadModalBundle;
