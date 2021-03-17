import React, { useState } from "react";
import { connect } from "redux-bundler-react";

import Select from "react-select";

const AddMyWatershedModal = connect(
  "selectAppDefaultsFormSelectPlaceholder",
  "selectWatershedItemsArray",
  "doModalClose",
  "doMyWatershedsAdd",
  ({
    appDefaultsFormSelectPlaceholder,
    watershedItemsArray: watersheds,
    doModalClose,
    doMyWatershedsAdd,
    watershedSelected,
  }) => {
    const [payload, setPayload] = useState({
      id: watershedSelected || [],
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!payload || !payload.id || !payload.id.length) {
        console.log("Missing one or more required fields");
        return;
      }

      if (payload.id.length > 1) {
        payload.id.forEach((w_id, index) => {
          doMyWatershedsAdd({ id: w_id });
        });
      } else {
        doMyWatershedsAdd(payload);
      }

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
            <legend className="mb-3 text-2xl">Select Watersheds</legend>

            <div className="mt-3">
              <label className="block mt-6 mb-2" forhtml="watershed">
                <span className="text-gray-700">Watershed</span>
              </label>
              <Select
                placeholder={appDefaultsFormSelectPlaceholder}
                isMulti
                options={watersheds.map((w, index) => ({
                  value: w.id,
                  label: `${w.office_symbol} - ${w.name}`,
                }))}
                onChange={(selectedOption) => {
                  setPayload({
                    ...payload,
                    id:
                      selectedOption && selectedOption.length
                        ? selectedOption.map((s) => s.value)
                        : [],
                  });
                }}
              />
            </div>

            {/* <div className="mt-6">
              <label className="block mt-6 mb-2">
                <span className="text-gray-700">JSON Payload</span>
              </label>
              <div className="">
                <textarea
                  className="w-full  border-gray-200 focus:ring-0 text-gray-500"
                  value={JSON.stringify(payload)}
                />
              </div>
            </div> */}

            <div className="flex">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded mt-3"
              >
                Add
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

export default AddMyWatershedModal;
