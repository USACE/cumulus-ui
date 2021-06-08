import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
import { HexColorPicker } from 'react-colorful';
// import FormInput from '../forms/forms';

const EditTagModal = connect(
  'selectModalProps',
  'doTagSave',
  'doModalClose',
  ({ modalProps: t, doModalClose, doTagSave }) => {
    const [payload, setPayload] = useState({
      id: t.id,
      name: t.name,
      description: t.description,
      color: t.color,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !payload ||
        !payload.id ||
        !payload.name ||
        !payload.description ||
        !payload.color
      ) {
        console.log('Missing one or more required fields for tag');
        return;
      }
      doTagSave(payload);
      doModalClose();
    };

    // const [color, setColor] = useState(t.color);

    return (
      <div
        className='inline-block overflow-visible align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-3/4 max-w-xl'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-headline'
      >
        <form className='p-6' onSubmit={handleSubmit}>
          <fieldset>
            <div className='flex flex-row justify-between p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
              <legend className='mb-3 text-2xl'>Edit Tag</legend>
              <svg
                className='w-6 h-6 cursor-pointer'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                onClick={(e) => {
                  doModalClose();
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='name'>
                <span className='text-gray-600'>Name</span>
              </label>
              <input
                className='w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-gray-100 p-2'
                defaultValue={t.name}
                maxLength={15}
                onChange={(e) =>
                  setPayload({ ...payload, name: e.target.value })
                }
              />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='description'>
                <span className='text-gray-600'>Description</span>
              </label>
              <input
                className='w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-gray-100 p-2'
                defaultValue={t.description}
                maxLength={60}
                onChange={(e) =>
                  setPayload({ ...payload, description: e.target.value })
                }
              />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='color'>
                <span className='text-gray-600'>Color</span>
              </label>
              <input
                className='w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-gray-100 p-2'
                value={payload.color}
                maxLength={6}
                onChange={(e) => {
                  setPayload({ ...payload, color: e.target.value });
                }}
              />
              <div className='flex mt-3'>
                <HexColorPicker
                  className='border-black border-2 w-1/2'
                  color={payload.color}
                  onChange={(e) =>
                    setPayload({ ...payload, color: e.replace('#', '') })
                  }
                />
                <div className='flex w-1/2 border-black border-0 items-center place-content-center'>
                  <span
                    style={{ backgroundColor: `#${payload.color}` }}
                    className='text-lg font-light px-2 py-1 rounded-xl'
                  >
                    {t.name}
                  </span>
                </div>
              </div>
            </div>

            {/* <div className='mt-3'>
              <textarea
                readOnly
                cols='50'
                rows='5'
                value={JSON.stringify(payload)}
              ></textarea>
            </div> */}

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