import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';

// import Pill from '../../../app-components/pill';

// import Select from "react-select";

const DownloadDetailsModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectWatershedItemsArray',
  'selectProductItemsArray',
  'selectModalProps',
  'doModalClose',
  'doDownloadRequest',
  ({
    appDefaultsFormSelectPlaceholder,
    watershedItemsArray: watersheds,
    productItemsArray: products,
    doDownloadRequest,
    modalProps,
    doModalClose,
    datetimeStart,
    datetimeEnd,
    watershedSelected,
    productsSelected,
  }) => {
    const [payload] = useState({
      datetime_start: datetimeStart,
      datetime_end: datetimeEnd,
      watershed_id: watershedSelected || null,
      product_id: productsSelected || [],
    });

    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(modalProps);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !payload ||
        !payload.datetime_start ||
        !payload.datetime_end ||
        !payload.watershed_id ||
        !payload.product_id ||
        !payload.product_id.length
      ) {
        console.log('Missing one or more required fields for download');
        return;
      }
      doDownloadRequest(payload);
      doModalClose();
    };

    // const ProductTypePill = ({ product }) => (
    //   <Pill
    //     bgClass="bg-gradient-to-b from-gray-400 to-gray-500"
    //     iconClass={
    //       product.is_forecast
    //         ? 'mdi mdi-chart-line'
    //         : 'mdi mdi-clock-check-outline'
    //     }
    //     label={product.is_forecast ? 'forecast' : 'observed'}
    //   />
    // );

    // const ProductGroupPill = ({ product }) => {
    //   const productIconGroupClasses = {
    //     PRECIPITATION: {
    //       icon: 'mdi-weather-pouring text-blue-800',
    //       background: 'bg-blue-600',
    //       text: 'text-white',
    //     },
    //     SNOW: {
    //       icon: 'mdi-snowflake text-blue-500',
    //       background: 'bg-blue-400',
    //       text: 'text-white',
    //     },
    //     TEMPERATURE: {
    //       icon: 'mdi-thermometer text-red-600',
    //       background: 'bg-red-500',
    //       text: 'text-white',
    //     },
    //   };

    //   return (
    //     <Pill
    //       bgClass={productIconGroupClasses[product.group]['background']}
    //       iconClass={productIconGroupClasses[product.group]['icon']}
    //       label={product.group}
    //     />
    //   );
    // };

    // const ProductLabel = ({ product }) => {
    //   return (
    //     <div className="flex justify-between">
    //       <div className="">{product.name}</div>
    //       <div className="flex justify-between">
    //         <ProductGroupPill product={product} />
    //         <ProductTypePill product={product} />
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <div
        className="inline-block overflow-visible align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <form className="p-6" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="mb-3 text-2xl">Download Details</legend>
            <div className="mt-4">
              <div className="p-1 mb-2 block xl:bg-gray-100 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider">
                Time Window
              </div>
              {/* <label forhtml="startDate">Start:</label> */}
              <span className="block mt-5 sm:inline text-gray-700 mr-2">
                Start
              </span>
              <span className="border-0 border-b-2 border-gray-200">
                {modalProps.datetime_start}
              </span>

              <span className="block mt-5 sm:inline sm:ml-5 text-gray-700 mr-2">
                End
              </span>
              <span className="border-0 border-b-2 border-gray-200">
                {modalProps.datetime_end}
              </span>
            </div>
            <div className="mt-3">
              <span className="block mt-6 mb-2 text-gray-700">Watershed</span>

              {modalProps.watershed_name}
            </div>
            <div className="mt-3">
              <label className="block mt-6 mb-2" forhtml="products">
                <span className="text-gray-700">Products</span>
              </label>
              {/* <Select
                placeholder={appDefaultsFormSelectPlaceholder}
                isMulti
                formatOptionLabel={({ value, label, customAbbreviation }) => (
                  <ProductLabel product={value} />
                )}
                options={products.map((p, index) => ({
                  value: p,
                  label: p.name,
                }))}
                onChange={(selectedOption) => {
                  setPayload({
                    ...payload,
                    product_id:
                      selectedOption && selectedOption.length
                        ? selectedOption.map((s) => s.value.id)
                        : [],
                  });
                }}
              /> */}
              {JSON.stringify(modalProps.product_id)}
            </div>

            <div className="mt-3">
              <span className="block mt-6 mb-2 text-gray-700">Status</span>
              {modalProps.status}
            </div>

            <div className="mt-3">
              <span className="block mt-6 mb-2 text-gray-700">Progress</span>
              {modalProps.progress}
            </div>

            <div className="mt-3">
              <span className="block mt-6 mb-2 text-gray-700">File</span>
              {modalProps.file || 'Not Available'}
            </div>

            <div className="mt-6">
              <label className="block mt-6 mb-2">
                <span className="text-gray-700">JSON Payload</span>
              </label>
              <div className="">
                <textarea
                  className="w-full  border-gray-200 focus:ring-0 text-gray-500"
                  value={JSON.stringify(modalProps)}
                />
              </div>
            </div>

            <div className="flex">
              {/* <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded mt-3"
              >
                Submit
              </button> */}
              <button
                onClick={(e) => {
                  doModalClose();
                }}
                className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 mt-10 rounded"
              >
                Close
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
);

export default DownloadDetailsModal;
