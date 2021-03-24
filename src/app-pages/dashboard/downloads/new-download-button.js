import React from 'react';
import { connect } from 'redux-bundler-react';

import NewDownloadModal from './new-download-modal';

const NewDownloadButton = connect('doModalOpen', ({ doModalOpen }) => {
  return (
    <button
      onClick={(e) => {
        doModalOpen(NewDownloadModal, {});
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >
      + New Download
    </button>
  );
});

export default NewDownloadButton;
