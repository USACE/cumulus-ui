import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
// import Select from 'react-select';
// import FormInput from '../forms/forms';
import { SaveButton, CancelButton } from '../forms/buttons';

const EditWatershedModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectModalProps',
  'doUnitSave',
  'doModalClose',
  ({
    appDefaultsFormSelectPlaceholder,
    modalProps: u,
    doUnitSave,
    doModalClose,
  }) => {
    const [payload, setPayload] = useState({
      id: (u && u.id) || null,
      name: (u && u.name) || null,
      abbreviation: (u && u.abbreviation) || null,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !payload ||
        (!payload.id && u) ||
        !payload.name ||
        !payload.abbreviation
      ) {
        console.log('Missing one or more required fields for watershed');
        return;
      }
      doUnitSave(payload);
      doModalClose();
    };

    return (
      <div
        className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-3/4 max-w-2xl'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-headline'
      >
        <form className='p-6' onSubmit={handleSubmit}>
          <fieldset>
            <div className='flex flex-row justify-between p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
              <legend className='mb-3 text-2xl'>Edit Unit</legend>
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
                className='w-full border-2 rounded border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={payload.name}
                maxLength={50}
                onChange={(e) =>
                  setPayload({ ...payload, name: e.target.value })
                }
              />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='abbreviation'>
                <span className='text-gray-600'>Abbreviation</span>
              </label>
              <input
                className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={payload.abbreviation}
                maxLength={10}
                onChange={(e) =>
                  setPayload({
                    ...payload,
                    abbreviation: e.target.value.toUpperCase(),
                  })
                }
              />
            </div>

            {/* <div className='mt-3'>
              <textarea
                className='w-full h-20'
                readOnly
                value={JSON.stringify(payload)}
              ></textarea>
            </div> */}

            <div className='mt-6'>
              <SaveButton label='Save' onClick={handleSubmit} />

              <CancelButton
                className='ml-2'
                label='Cancel'
                onClick={(e) => {
                  doModalClose();
                }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
);

export default EditWatershedModal;
