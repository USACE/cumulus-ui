import { useState } from 'react';
import { connect } from 'redux-bundler-react';
import DatePicker from 'react-datepicker';
import {
  setHours,
  setMinutes,
  // addHours,
  // differenceInDays,
  differenceInHours,
  formatDistance,
} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { classNames } from '../../utils';

export default connect(
  'selectProductSelectProducts',
  'selectProductSelectSelected',
  'selectProductFilterDateFrom',
  'selectProductFilterDateTo',
  'selectWatershedItems',
  'selectWatershedDistricts',
  'doProductSelectSetSelected',
  'doProductFilterSetDateFrom',
  'doProductFilterSetDateTo',
  'doModalClose',
  'doDownloadRequest',
  'doUpdateUrl',
  ({
    productSelectProducts: products,
    productSelectSelected: selectedProducts,
    productFilterDateFrom: dateFrom,
    productFilterDateTo: dateTo,
    watershedItems: watersheds,
    watershedDistricts: districts,
    doProductSelectSetSelected,
    doModalClose,
    doDownloadRequest,
    doUpdateUrl,
  }) => {
    const toggleSelected = (checked, id) => {
      if (checked) {
        doProductSelectSetSelected([...selectedProducts, id]);
      } else {
        selectedProducts.splice(selectedProducts.indexOf(id), 1);
        doProductSelectSetSelected([...selectedProducts]);
      }
    };

    const [start, setStart] = useState(
      setHours(setMinutes(new Date(dateFrom), 0), 0)
    );
    const currentDate = new Date();

    // End date for download modal should not go beyond current date/time
    const endDate = dateTo > currentDate ? currentDate : dateTo;
    const [end, setEnd] = useState(endDate);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWatershed, setSelectedWatershed] = useState('');
    const [selectedFormat, setSelectedFormat] = useState('dss7');

    let formReady = true;
    let errMsg = null;
    if (formReady && selectedProducts.length < 1) formReady = false;
    if (formReady && !selectedWatershed) formReady = false;
    if (formReady && differenceInHours(end, start) > 4380) {
      formReady = false;
      errMsg = 'Time window too large. Limit is 6 months max (4380 hours).';
    }
    if (formReady && end < start) formReady = false;

    const handleFormSubmit = () => {
      if (formReady) {
        doDownloadRequest(
          {
            datetime_start: start,
            datetime_end: end,
            watershed_id: selectedWatershed,
            product_id: selectedProducts,
            format: selectedFormat,
          },
          (err) => {
            if (err) {
              console.log('need to put this in the UI to tell the user', err);
            } else {
              doModalClose();
              doUpdateUrl('/downloads');
            }
          }
        );
      }
    };

    // TODO: Move to domain value in the database w/ corresponding api endpoint
    const downloadFormats = [
      { abbreviation: 'dss7', name: 'HEC-DSS v7' },
      { abbreviation: 'tgz-cog', name: 'Cloud Optimized GeoTiff .tar.gz' },
    ];

    return (
      <div className='shadow rounded-md overflow-hidden'>
        <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
          <div>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Create DSS Download
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Submit a new download request, download status will be available
              in "My Downloads"
            </p>
          </div>

          <hr />

          <fieldset>
            <legend className='text-base font-medium text-gray-900'>
              Watershed
            </legend>
            <div className='mt-4 space-y-4'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='col'>
                  <label
                    htmlFor='district'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Office (optional)
                  </label>
                  <select
                    id='district'
                    name='district'
                    value={selectedDistrict}
                    onChange={(e) => {
                      setSelectedDistrict(e.target.value);
                      setSelectedWatershed('');
                    }}
                    autoComplete='district-name'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    {' '}
                    <option value=''>Select Office...</option>
                    {districts.map((district) => {
                      return (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='col'>
                  <label
                    htmlFor='watershed'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Watershed
                  </label>
                  <select
                    id='watershed'
                    name='watershed'
                    value={selectedWatershed}
                    onChange={(e) => {
                      setSelectedWatershed(e.target.value);
                    }}
                    placeholder='Select Watershed...'
                    autoComplete='watershed-name'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    {' '}
                    <option value=''>Select Watershed...</option>
                    {watersheds
                      .filter((watershed) => {
                        if (selectedDistrict) {
                          if (watershed.office_symbol === selectedDistrict)
                            return true;
                          return false;
                        } else {
                          return true;
                        }
                      })
                      .map((watershed) => {
                        return (
                          <option key={watershed.id} value={watershed.id}>
                            {`${watershed.office_symbol} - ${watershed.name}`}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className='mt-6'>
            <legend className='text-base font-medium text-gray-900'>
              Time Window
            </legend>
            <div className='mt-4 space-y-4'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='col'>
                  {/* 
                  For some reason this control is getting focus on model open,
                  I don't have the time to figure out how to keep it closed...
                  */}
                  <label className='block text-sm font-medium text-gray-700'>
                    *Start Date/Time
                  </label>
                  <DatePicker
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    autoComplete='off'
                    selected={start}
                    showTimeSelect
                    todayButton='Today'
                    dateFormat='MMMM d, yyyy h:mm aa'
                    onChange={setStart}
                    maxDate={currentDate}
                    showMonthDropdown
                    showYearDropdown
                  />
                </div>

                <div className='col'>
                  <label className='block text-sm font-medium text-gray-700'>
                    *End Date/Time
                  </label>
                  <DatePicker
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    autoComplete='off'
                    selected={end}
                    showTimeSelect
                    todayButton='Today'
                    dateFormat='MMMM d, yyyy h:mm aa'
                    onChange={setEnd}
                    minDate={start}
                    minTime={start}
                    maxTime={setHours(setMinutes(new Date(), 30), 23)}
                    maxDate={currentDate}
                    showMonthDropdown
                    showYearDropdown
                  />
                  {/* {console.log(end)} */}
                </div>
              </div>
              <div className='text-sm text-gray-400'>*Times are local</div>
              {errMsg && (
                <div className='text-sm bg-red-100 p-3 text-red-600 font-bold'>
                  {errMsg}
                </div>
              )}

              {start && end && (
                <div className='text-sm bg-gray-100 p-3 text-gray-600 font-bold'>
                  Your time window is {formatDistance(end, start)} (
                  {differenceInHours(end, start) + ' hours'})
                </div>
              )}
            </div>
          </fieldset>
          <fieldset>
            <legend className='text-base font-medium text-gray-900'>
              Download Options
            </legend>
            <div className='mt-4 space-y-4'>
              <div className='grid grid-cols-1 gap-6'>
                <div className='col'>
                  <label
                    htmlFor='format'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Format
                  </label>
                  <select
                    id='download-format'
                    name='download-format'
                    value={selectedFormat}
                    onChange={(e) => {
                      setSelectedFormat(e.target.value);
                    }}
                    autoComplete='format-name'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    {' '}
                    {downloadFormats.map((f) => {
                      return (
                        <option key={f.abbreviation} value={f.abbreviation}>
                          {f.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className='text-base font-medium text-gray-900'>
              Requested Products
            </legend>
            <p className='mt-1 text-sm text-gray-500'>
              Uncheck a product to remove it from the list.
            </p>
            <div className='mt-4 space-y-4 max-h-[50%]'>
              {products.map((product) => {
                const selected = selectedProducts.indexOf(product.id) !== -1;
                return (
                  <div key={product.id} className='flex items-start'>
                    <div className='h-5 flex items-center'>
                      <input
                        id='comments'
                        name='comments'
                        type='checkbox'
                        checked={selected}
                        onChange={(e) => {
                          // disabling for now, this is a little bit confusing as the product
                          // just dissapears when you click it... not going to spend the time
                          // to get a better workflow right now.
                          //return null;
                          toggleSelected(e.target.checked, product.id);
                        }}
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='comments'
                        className='font-medium text-gray-700'
                      >
                        {product.name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            onClick={doModalClose}
            className='bg-slate-600 border border-transparent rounded-md shadow-sm py-2 px-4 mr-3 inline-flex justify-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600'
          >
            Cancel
          </button>

          <button
            disabled={!formReady}
            onClick={handleFormSubmit}
            className={classNames(
              ' border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600',
              formReady
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-indigo-300 text-gray-200'
            )}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
);
