import { useCallback, useState } from 'react';
import { connect } from 'redux-bundler-react';
import DateRangeSlider from './date-range-slider';
import ProductsTable from './products-table/products-table';
import ProductsMap from './products-map/map';
import ButtonGroup from '../../app-components/button-group/button-group';
import ButtonGroupButton from '../../app-components/button-group/button-group-button';
import FilterPanel from './filter-panel';
import TagFilter from './tag-filter';
import ParameterFilter from './parameter-filter';
import DownloadModal from './download-modal';

export default connect(
  'selectAuthIsLoggedIn',
  'selectProductFilterResults',
  'selectProductFilterFilterString',
  'selectProductFilterApplyDateFilter',
  'selectProductDateRangeFrom',
  'selectProductDateRangeTo',
  'selectProductSelectSelected',
  'doModalOpen',
  'doProductFilterSetFilterString',
  'doProductFilterSetDateFrom',
  'doProductFilterSetDateTo',
  'doProductFilterSetApplyDateFilter',
  ({
    authIsLoggedIn,
    productFilterResults: products,
    productFilterFilterString: filterString,
    productFilterApplyDateFilter: applyDateFilter,
    productDateRangeFrom: rangeFrom,
    productDateRangeTo: rangeTo,
    productSelectSelected: selectedProducts,
    doModalOpen,
    doProductFilterSetFilterString: setFilterString,
    doProductFilterSetDateFrom: setFilterDateFrom,
    doProductFilterSetDateTo: setFilterDateTo,
    doProductFilterSetApplyDateFilter: setApplyDateFilter,
  }) => {
    // show / hide the filter panel
    const [filtersActive, setFiltersActive] = useState(false);

    // could use a boolean here, but just in case we'll use a string key so we could add more options later
    const [activeView, setActiveView] = useState('table');

    const dateUpdateCallback = useCallback(
      (e) => {
        setFilterDateFrom(e.from);
        setFilterDateTo(e.to);
      },
      [setFilterDateFrom, setFilterDateTo]
    );

    // open the download modal
    const handleDownloadClick = useCallback(() => {
      doModalOpen(DownloadModal);
    }, [doModalOpen]);

    return (
      <>
        <div className='m-5 mb-5 inline-flex'>
          <ButtonGroup>
            <ButtonGroupButton
              active={filtersActive}
              onClick={() => {
                setFiltersActive(!filtersActive);
              }}
              title={`${filtersActive ? 'Hide' : 'Expand'} Filter Options`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                />
              </svg>
            </ButtonGroupButton>
          </ButtonGroup>
          <ButtonGroup className='ml-5'>
            <ButtonGroupButton
              active={activeView === 'table'}
              onClick={() => {
                setActiveView('table');
              }}
            >
              Table
            </ButtonGroupButton>
            <ButtonGroupButton
              active={activeView === 'map'}
              onClick={() => {
                setActiveView('map');
              }}
            >
              Map
            </ButtonGroupButton>
          </ButtonGroup>
          <span className='relative z-0 inline-flex shadow-sm rounded-md ml-5 w-full'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <input
              autoComplete='off'
              value={filterString}
              onChange={(e) => {
                setFilterString(e.target.value);
              }}
              type='text'
              name='search'
              className='focus:ring-indigo-500 focus:border-indigo-500 w-full pl-10 sm:text-sm border-gray-300 rounded-l-md inline-flex'
              placeholder='Filter...'
            />
            <button
              disabled={!filterString}
              type='button'
              className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              onClick={() => {
                setFilterString('');
              }}
            >
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-gray-400'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path
                    fill='currentColor'
                    d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
                  />
                </svg>
              </span>
            </button>
          </span>
          <ButtonGroup className='ml-5'>
            <ButtonGroupButton
              title='Download Selection'
              disabled={!authIsLoggedIn || selectedProducts.length === 0}
              onClick={handleDownloadClick}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                />
              </svg>
              {selectedProducts.length > 0 ? (
                <div className='bg-indigo-600 text-white rounded-full px-1 ml-1 text-xs'>
                  {selectedProducts.length}
                </div>
              ) : null}
            </ButtonGroupButton>
          </ButtonGroup>
        </div>

        <div className='flex mx-auto ml-11'>
          <div className='relative flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='filterbydate'
                aria-describedby='filterbydate-description'
                name='filterbydate'
                type='checkbox'
                className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                aria-checked={applyDateFilter}
                checked={applyDateFilter}
                onChange={(e) => {
                  setApplyDateFilter(e.target.checked);
                }}
              />
            </div>
            <div className='ml-3 text-sm'>
              <label
                htmlFor='filterbydate'
                className='font-medium text-gray-700'
              >
                Filter by Date Range
              </label>
            </div>
          </div>
        </div>

        {applyDateFilter ? (
          <div className='w-full mx-auto flex mt-5'>
            <DateRangeSlider
              minDate={rangeFrom}
              maxDate={rangeTo}
              onChange={dateUpdateCallback}
            />
          </div>
        ) : null}

        <div className='flex-grow w-full mt-5 overflow-x-hidden max-h-full'>
          <div className='flex-1 min-w-0 flex'>
            {filtersActive ? (
              <div className='flex-shrink-0 w-80 bg-white border-gray-100 border-2 ml-5 rounded-lg'>
                <div className='h-full ml-5 pl-4 pr-6 py-6'>
                  <FilterPanel activeView={activeView}>
                    <TagFilter />
                    <ParameterFilter />
                  </FilterPanel>
                </div>
              </div>
            ) : null}

            <div className='h-full min-w-0 flex-1'>
              {activeView === 'table' ? (
                <ProductsTable products={products} />
              ) : (
                <ProductsMap products={products} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);
