import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorPicker = () => {
  const [color, setColor] = useState('#aabbcc');
  return <HexColorPicker color={color} onChange={setColor} />;
};

const handleSubmit = (e) => {
  e.preventDefault();
  // if (
  //   !payload ||
  //   !payload.datetime_start ||
  //   !payload.datetime_end ||
  //   !payload.watershed_id ||
  //   !payload.product_id ||
  //   !payload.product_id.length
  // ) {
  //   console.log('Missing one or more required fields for download');
  //   return;
  // }
  // doDownloadRequest(payload);
  // doModalClose();
};

const payload = '';
const setPayload = '';

export default (props) => (
  <div
    className='inline-block overflow-visible align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'
    role='dialog'
    aria-modal='true'
    aria-labelledby='modal-headline'
  >
    <form className='p-6' onSubmit={handleSubmit}>
      <fieldset>
        <legend className='mb-3 text-2xl'>Edit Tag</legend>

        <div className='mt-3'>
          <label className='block mt-6 mb-2' forhtml='name'>
            <span className='text-gray-700'>Name</span>
          </label>
          <input
            className='border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
            value='MyTagName'
          />
        </div>

        <div className='mt-3'>
          <label className='block mt-6 mb-2' forhtml='description'>
            <span className='text-gray-700'>Description</span>
          </label>
          <input
            className='border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
            value='My Super Special Tag'
          />
        </div>

        <div className='mt-3'>
          <label className='block mt-6 mb-2' forhtml='color'>
            <span className='text-gray-700'>Color</span>
          </label>
          <input
            className='border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
            value='A7F3F0'
          />
          <ColorPicker />
        </div>

        <div className='flex'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded mt-3'
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              // doModalClose();
              return;
            }}
            className='ml-3 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 mt-10 rounded mt-3'
          >
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  </div>
);
