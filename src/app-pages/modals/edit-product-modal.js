import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
import Select from 'react-select';
// import FormInput from '../forms/forms';

const EditProductModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectModalProps',
  'doProductSave',
  'selectTagItemsArray',
  'selectUnitItemsArray',
  'selectParameterItemsArray',
  'doTagFetch',
  'doParameterFetch',
  'doModalClose',
  ({
    appDefaultsFormSelectPlaceholder,
    modalProps: p,
    doTagFetch,
    doProductSave,
    tagItemsArray: tags,
    unitItemsArray: units,
    parameterItemsArray: parameters,
    doParameterFetch,
    doModalClose,
  }) => {
    const [payload, setPayload] = useState({
      id: p.id,
      slug: p.slug,
      tags: p.tags,
      name: p.name,
      description: p.description,
      temporal_resolution: p.temporal_resolution,
      temporal_duration: p.temporal_duration,
      dss_fpart: p.dss_fpart,
      parameter_id: p.parameter_id,
      parameter: p.parameter,
      unit_id: p.unit_id,
      unit: p.unit,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!payload || !payload.id || !payload.name || !payload.description) {
        console.log('Missing one or more required fields for product');
        return;
      }
      doProductSave(payload);
      doParameterFetch();
      doTagFetch();
      doModalClose();
      console.log(parameters);
    };

    // const [color, setColor] = useState(t.color);

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
              <legend className='mb-3 text-2xl'>Edit Product</legend>
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
                defaultValue={p.name}
                maxLength={50}
                onChange={(e) =>
                  setPayload({ ...payload, name: e.target.value })
                }
              />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='description'>
                <span className='text-gray-600'>Description</span>
              </label>
              <textarea
                className='w-full h-48 border-2 rounded border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={p.description}
                onChange={(e) =>
                  setPayload({ ...payload, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='parameter'>
                <span className='text-gray-600'>Parameter</span>
              </label>
              <Select
                placeholder={p.parameter}
                options={parameters.map((param, index) => ({
                  value: param.id,
                  label: param.name,
                }))}
                onChange={(e) =>
                  setPayload({
                    ...payload,
                    parameter_id: e.value,
                    parameter: e.label,
                  })
                }
              />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='unit'>
                <span className='text-gray-600'>Unit</span>
              </label>
              <Select placeholder={p.unit} />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='dss_fpart'>
                <span className='text-gray-600'>DSS F-Part</span>
              </label>
              <input
                className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={p.dss_fpart}
                maxLength={30}
                onChange={(e) =>
                  setPayload({ ...payload, dss_fpart: e.target.value })
                }
              />
            </div>

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='tags'>
                <span className='text-gray-600'>Tags</span>
              </label>
              <Select
                isMulti
                placeholder={appDefaultsFormSelectPlaceholder}
                options={tags.map((t, index) => ({
                  value: t.id,
                  label: t.name,
                }))}
                onChange={(selectedOption) => {
                  setPayload({
                    ...payload,
                    tags:
                      selectedOption && selectedOption.length
                        ? selectedOption.map((s) => s.value)
                        : [],
                  });
                }}
              />
            </div>

            <hr className='mt-10' />

            <div className='mt-3'>
              <textarea
                className='w-full h-20'
                readOnly
                value={JSON.stringify(payload)}
              ></textarea>
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

export default EditProductModal;
