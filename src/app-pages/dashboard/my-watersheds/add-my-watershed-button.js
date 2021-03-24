import React from 'react';
import { connect } from 'redux-bundler-react';

import AddMyWatershedModal from './add-my-watershed-modal';

const AddMyWatershedButton = connect('doModalOpen', ({ doModalOpen }) => {
  return (
    <button
      onClick={(e) => {
        doModalOpen(AddMyWatershedModal, {});
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >
      + Add Watershed
    </button>
  );
});

export default AddMyWatershedButton;
