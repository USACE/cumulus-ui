import { createSelector } from 'redux-bundler';
import { DownloadModal } from '../app-components/modals/download-modal';

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
      store.doModalOpen(DownloadModal, {}, () => {
        store.doUpdateHash(newHashObj);
      });
    },
  reactDownloadModalOpen: createSelector(
    'selectHashObject',
    'selectModalContent',
    (hashObject, content) => {
      if (
        hashObject['modal'] !== 'download' ||
        (content && content === DownloadModal)
      ) {
        return null;
      }
      return { actionCreator: 'doDownloadModalOpen' };
    }
  ),
};

export default downloadModalBundle;
