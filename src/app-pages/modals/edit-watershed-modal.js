import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
// import Select from 'react-select';
import { SaveButton, CancelButton } from '../forms/buttons';

const EditWatershedModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectModalProps',
  'doWatershedSave',
  'doModalClose',
  ({
    appDefaultsFormSelectPlaceholder,
    modalProps: w,
    doWatershedSave,
    doModalClose,
  }) => {
    const [payload, setPayload] = useState({
      id: (w && w.id) || null,
      slug: (w && w.slug) || null,
      name: (w && w.name) || null,
      bbox: (w && w.bbox) || [],
      area_groups: (w && w.area_groups) || [],
      office_symbol: (w && w.office_symbol) || null,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !payload ||
        (!payload.id && w) ||
        !payload.name ||
        !payload.bbox ||
        !payload.office_symbol
      ) {
        console.log('Missing one or more required fields for watershed');
        return;
      }
      doWatershedSave(payload);
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
            <div className='w-full bg-red-500 text-white p-2 mb-5 font-medium rounded-md'>
              NOT FUNCTIONAL
            </div>
            <div className='flex flex-row justify-between p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
              <legend className='mb-3 text-2xl'>
                {payload.id ? 'Edit Watershed' : 'New Watershed'}
              </legend>
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
              <label className='block mt-6 mb-2 w-full' forhtml='office_symbol'>
                <span className='text-gray-600'>Office</span>
              </label>
              <input
                className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={payload.office_symbol}
                maxLength={5}
                onChange={(e) =>
                  setPayload({
                    ...payload,
                    office_symbol: e.target.value.toUpperCase(),
                  })
                }
              />
            </div>

            {/* Main div wrapper for two column grid form */}
            <div className='grid grid-cols-1 gap-6 mt-2 md:grid-cols-4'>
              <div>
                <label className='block mt-6 mb-2 w-full' forhtml='x_min'>
                  <span className='text-gray-600'>
                    X Min
                    <span className=' ml-1 text-xs text-gray-400'>
                      (top left)
                    </span>
                  </span>
                </label>
                <input
                  className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.bbox[0]}
                  maxLength={15}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      bbox: [
                        parseInt(e.target.value),
                        payload.bbox[1],
                        payload.bbox[2],
                        payload.bbox[3],
                      ],
                    })
                  }
                />
              </div>
              <div>
                <label className='block mt-6 mb-2 w-full' forhtml='y_min'>
                  <span className='text-gray-600'>
                    Y Min
                    <span className=' ml-1 text-xs text-gray-400'>
                      (bottom left)
                    </span>
                  </span>
                </label>
                <input
                  className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.bbox[1]}
                  maxLength={15}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      bbox: [
                        payload.bbox[0],
                        parseInt(e.target.value),
                        payload.bbox[2],
                        payload.bbox[3],
                      ],
                    })
                  }
                />
              </div>
              <div>
                <label className='block mt-6 mb-2 w-full' forhtml='y_min'>
                  <span className='text-gray-600'>
                    X Max
                    <span className=' ml-1 text-xs text-gray-400'>
                      (top right)
                    </span>
                  </span>
                </label>
                <input
                  className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.bbox[2]}
                  maxLength={15}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      bbox: [
                        payload.bbox[0],
                        payload.bbox[1],
                        parseInt(e.target.value),
                        payload.bbox[3],
                      ],
                    })
                  }
                />
              </div>
              <div>
                <label className='block mt-6 mb-2 w-full' forhtml='y_min'>
                  <span className='text-gray-600'>
                    Y Max{' '}
                    <span className=' ml-1 text-xs text-gray-400'>
                      (bottom right)
                    </span>
                  </span>
                </label>
                <input
                  className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.bbox[3]}
                  maxLength={15}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      bbox: [
                        payload.bbox[0],
                        payload.bbox[1],
                        payload.bbox[2],
                        parseInt(e.target.value),
                      ],
                    })
                  }
                />
              </div>
            </div>

            <div className='mt-3'>
              <textarea
                className='w-full h-20'
                readOnly
                value={JSON.stringify(payload)}
              ></textarea>
            </div>

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
