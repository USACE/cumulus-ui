import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import FormInput from '../forms/forms';

// const ColorPicker = (currentColor) => {
//   const [color, setColor] = useState(currentColor);
//   return <HexColorPicker color={color} onChange={setColor} />;
// };

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

export default (props) => {
  const [color, setColor] = useState(props.color);
  return (
    <div
      className='inline-block overflow-visible align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-3/4 max-w-xl'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-headline'
    >
      <form className='p-6' onSubmit={handleSubmit}>
        <fieldset>
          <legend className='mb-3 text-2xl'>Edit Tag</legend>

          <div className='mt-3'>
            <FormInput
              label='Name'
              id='name'
              maxLength={15}
              value={props.name}
            />
          </div>

          <div className='mt-3'>
            <FormInput
              label='Description'
              id='description'
              value={props.description}
            />
          </div>

          <div className='mt-3'>
            <FormInput label='Color' id='color' maxLength={6} value={color} />
            <div className='mt-3'>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
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
};
