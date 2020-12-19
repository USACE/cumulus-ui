import React, { useState } from "react";
import { connect } from "redux-bundler-react";

import Select from "react-select";

const NewDownloadModal = connect(
  "selectWatershedItemsArray",
  "selectProductItemsArray",
  "doModalClose",
  "doDownloadRequest",
  ({
    watershedItemsArray: watersheds,
    productItemsArray: products,
    doDownloadRequest,
    doModalClose,
    datetimeStart,
    datetimeEnd,
    watershedSelected,
    productsSelected,
  }) => {
    const [payload, setPayload] = useState({
      datetime_start: datetimeStart,
      datetime_end: datetimeEnd,
      watershed_id: watershedSelected || null,
      product_id: productsSelected || [],
    });

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
        console.log("Missing one or more required fields for download");
        return;
      }
      doDownloadRequest(payload);
      doModalClose();
    };
    return (
      <div
        className="inline-block overflow-visible align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <form className="p-6" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="mb-3 text-2xl">DSS Download</legend>
            <div className="mt-4">
              <div className="p-1 mb-2 block xl:bg-gray-100 font-bold text-gray-600 text-sm text-secondary uppercase tracking-wider">
                Time Window
              </div>
              {/* <label forhtml="startDate">Start:</label> */}
              <label className="block mt-5 sm:inline" forhtml="startDate">
                <span className="text-gray-700">Start</span>
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                className="border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                onChange={(e) => {
                  const d = new Date(e.target.value);
                  setPayload({
                    ...payload,
                    datetime_start: d.toISOString(),
                  });
                }}
              />

              <label className="block mt-5 sm:inline sm:ml-5" forhtml="endDate">
                <span className="text-gray-700">End</span>
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                className="border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                onChange={(e) => {
                  const d = new Date(e.target.value);
                  setPayload({
                    ...payload,
                    datetime_end: d.toISOString(),
                  });
                }}
              />
            </div>
            <div className="mt-3">
              <label className="block mt-6 mb-2" forhtml="watershed">
                <span className="text-gray-700">Watershed</span>
              </label>
              <Select
                options={watersheds.map((w, index) => ({
                  value: w.id,
                  label: `${w.office_symbol} - ${w.name}`,
                }))}
                onChange={(selectedOption) => {
                  setPayload({
                    ...payload,
                    watershed_id: selectedOption.value,
                  });
                }}
              />
            </div>
            <div className="mt-3">
              <label className="block mt-6 mb-2" forhtml="products">
                <span className="text-gray-700">Products</span>
              </label>
              <Select
                isMulti
                options={products.map((p, index) => ({
                  value: p.id,
                  label: p.name,
                }))}
                onChange={(selectedOption) => {
                  setPayload({
                    ...payload,
                    product_id:
                      selectedOption && selectedOption.length
                        ? selectedOption.map((s) => s.value)
                        : [],
                  });
                }}
              />
            </div>
            <div className="mt-6">
              <h6>JSON Payload</h6>
              <div>{JSON.stringify(payload)}</div>
            </div>

            <div className="flex">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded mt-3"
              >
                Submit
              </button>
              <button
                onClick={(e) => {
                  doModalClose();
                }}
                className="ml-3 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 mt-10 rounded mt-3"
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

export default NewDownloadModal;
