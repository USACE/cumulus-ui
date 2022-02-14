import React from 'react';
import { connect } from 'redux-bundler-react';

import { Dialog } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';

// Note: onClose is always passed from the parent Modal.js component
//       (not from a connected bundle method). The parent Modal.js component
//       combines the onClose function passed to doModalOpen(content, props, onClose)
//       with other onClose functions necessary for smooth transitions
const DownloadModal = connect(({ onClose }) => {
  return (
    <>
      <div>
        <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
          <CheckIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
        </div>
        <div className='mt-3 text-center sm:mt-5'>
          <Dialog.Title
            as='h3'
            className='text-lg leading-6 font-medium text-gray-900'
          >
            Download successful
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur amet labore.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-6'>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
          onClick={onClose}
        >
          Go back to dashboard
        </button>
      </div>
    </>
  );
});

export { DownloadModal, DownloadModal as default };
