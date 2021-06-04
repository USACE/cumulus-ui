import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
import { HexColorPicker } from 'react-colorful';
import FormInput from '../forms/forms';

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

const EditTagModal = connect(
  'selectModalProps',
  'doModalClose',
  ({
    modalProps: t,
    doModalClose,
    // datetimeStart,
    // datetimeEnd,
    // watershedSelected,
    // productsSelected,
  }) => {
    // const [payload, setPayload] = useState({
    //   datetime_start: datetimeStart,
    //   datetime_end: datetimeEnd,
    //   watershed_id: watershedSelected || null,
    //   product_id: productsSelected || [],
    // });

    const [color, setColor] = useState(t.color);

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
              <FormInput label='Name' id='name' maxLength={15} value={t.name} />
            </div>

            <div className='mt-3'>
              <FormInput
                label='Description'
                id='description'
                value={t.description}
              />
            </div>

            <div className='mt-3'>
              <FormInput
                label='Color'
                id='color'
                maxLength={6}
                value={color}
                defaultValue={color}
              />
              <div className='flex mt-3'>
                <HexColorPicker
                  className='border-black border-2 w-1/2'
                  color={color}
                  onChange={(e) => setColor(e.replace('#', ''))}
                />
                <div className='flex w-1/2 border-black border-0 items-center place-content-center'>
                  <span
                    style={{ backgroundColor: `#${color}` }}
                    className='text-lg font-light px-2 py-1 rounded-xl'
                  >
                    {t.name}
                  </span>
                </div>
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
                  doModalClose();
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
  }
);

export default EditTagModal;
