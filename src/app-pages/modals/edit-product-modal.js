import React, { useState, useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import Select from 'react-select';
// import FormInput from '../forms/forms';
import { SaveButton, CancelButton } from '../forms/buttons';

const EditProductModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectModalProps',
  'doProductSave',
  'selectTagItemsArray',
  'selectUnitItemsArray',
  'selectParameterItemsArray',
  'selectSuiteItems',
  'selectSuiteItemsObject',
  'doTagFetch',
  'doSuiteFetch',
  'doParameterFetch',
  'doUnitFetch',
  'doModalClose',
  ({
    appDefaultsFormSelectPlaceholder,
    modalProps: p,
    doTagFetch,
    doProductSave,
    tagItemsArray: tags,
    suiteItems: suites,
    selectSuiteItemsObject: suiteObj,
    unitItemsArray: units,
    parameterItemsArray: parameters,
    doParameterFetch,
    doUnitFetch,
    doSuiteFetch,
    doModalClose,
  }) => {
    const [payload, setPayload] = useState({
      id: (p && p.id) || null,
      // slug: (p && p.slug) || null,
      // tags: [],
      // slug: (p && p.label) || null,
      name: p && p.name,
      label: (p && p.label) || null,
      description: (p && p.description) || null,
      temporal_resolution: (p && parseInt(p.temporal_resolution)) || 0,
      temporal_duration: (p && parseInt(p.temporal_duration)) || 0,
      dss_fpart: (p && p.dss_fpart) || null,
      parameter_id: (p && p.parameter_id) || null,
      // parameter: (p && p.parameter) || null,
      unit_id: (p && p.unit_id) || null,
      unit: p && p.unit,
      suite_id: (p && p.suite_id) || null,
      // suite: p && p.suite,
    });

    useEffect(() => {
      doSuiteFetch();
    }, [doSuiteFetch]);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(typeof payload.temporal_duration);
      if (
        !payload ||
        (!payload.id && p) ||
        // !payload.name ||

        !payload.description ||
        !payload.parameter_id ||
        !payload.unit_id ||
        !payload.suite_id ||
        !payload.dss_fpart
      ) {
        console.log('Missing one or more required fields for product');
        return;
      }
      doProductSave(payload);
      doParameterFetch();
      doUnitFetch();
      // doTagFetch();
      doSuiteFetch();
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
              <legend className='mb-3 text-2xl'>
                {payload.id ? 'Edit Product' : 'New Product'}
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
              <label className='block mt-6 mb-2 w-full' forhtml='unit'>
                <span className='text-gray-600'>Product Suite</span>
              </label>
              <Select
                placeholder={p && p.suite}
                options={suites.map((s, idx) => ({
                  value: s.id,
                  label: s.name,
                }))}
                onChange={(e) =>
                  setPayload({
                    ...payload,
                    suite_id: e.value,
                    suite: e.label,
                  })
                }
              />
            </div>

            {/* Main div wrapper for two column grid form */}
            <div className='grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2'>
              <div>
                <label className='block mt-4 w-full' forhtml='label'>
                  <span className='text-gray-600'>Label</span>
                </label>
                <input
                  className='w-full border-2 rounded border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.label}
                  maxLength={40}
                  onChange={(e) =>
                    setPayload({ ...payload, label: e.target.value })
                  }
                />
              </div>
              <div>
                <label className='block mt-4 w-full' forhtml='name'>
                  <span className='text-gray-600'>Name</span>
                </label>
                <input
                  readOnly
                  className='w-full text-gray-400 bg-gray-100 border-2 rounded border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={(p && p.name) || payload.label}
                  maxLength={60}
                  // onChange={(e) =>
                  //   setPayload({ ...payload, name: e.target.value })
                  // }
                />
              </div>

              <div>
                <label className='block mt-4 w-full' forhtml='parameter'>
                  <span className='text-gray-600'>Parameter</span>
                </label>
                <Select
                  placeholder={p && p.parameter}
                  options={parameters.map((param, index) => ({
                    value: param.id,
                    label: param.name,
                  }))}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      parameter_id: e.value,
                    })
                  }
                />
              </div>

              <div>
                <label className='block mt-4 w-full' forhtml='unit'>
                  <span className='text-gray-600'>Unit</span>
                </label>
                <Select
                  placeholder={p && p.unit}
                  options={units.map((u, idx) => ({
                    value: u.id,
                    label: u.name,
                  }))}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      unit_id: e.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  className='block mt-4 w-full'
                  forhtml='temporal_resolution'
                >
                  <span className='text-gray-600'>Temporal Resolution</span>
                </label>
                <input
                  className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.temporal_resolution}
                  maxLength={5}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      temporal_resolution: parseInt(e.target.value),
                    })
                  }
                />
              </div>

              <div>
                <label
                  className='block mt-4 w-full'
                  forhtml='temporal_duration'
                >
                  <span className='text-gray-600'>Temporal Duration</span>
                </label>
                <input
                  className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                  defaultValue={payload.temporal_duration}
                  maxLength={5}
                  onChange={(e) =>
                    setPayload({
                      ...payload,
                      temporal_duration: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className='mt-3'>
              <label className='block mt-4 w-full' forhtml='description'>
                <span className='text-gray-600'>Description</span>
              </label>
              <textarea
                className='w-full h-40 border-2 rounded border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={payload.description}
                onChange={(e) =>
                  setPayload({ ...payload, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className='mt-3'>
              <label className='block mt-4 w-full' forhtml='dss_fpart'>
                <span className='text-gray-600'>DSS F-Part</span>
              </label>
              <input
                className='w-full border-2 border-gray-200 focus:ring-0 focus:border-black p-2'
                defaultValue={payload.dss_fpart}
                maxLength={30}
                onChange={(e) =>
                  setPayload({ ...payload, dss_fpart: e.target.value })
                }
              />
            </div>

            {/* <div className='mt-3'>
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
            </div> */}

            <div className='mt-3'>
              <textarea
                className='w-full h-20 text-gray-400'
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

export default EditProductModal;
