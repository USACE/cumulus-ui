import { useState } from 'react';
import { connect } from 'redux-bundler-react';
import ProductsTable from './products-table';
import ButtonGroup from '../../app-components/button-group/button-group';
import ButtonGroupButton from '../../app-components/button-group/button-group-button';
import FilterPanel from './filter-panel';

export default connect(
  'selectProductItems',
  'doProductFetch',
  ({ productItems: products }) => {
    const [filtersActive, setFiltersActive] = useState(false);
    // could use a boolean here, but just in case we'll use a string key so we could add more options later
    const [activeView, setActiveView] = useState('table');
    const [filterString, setFilterString] = useState('');

    // filter projects based on a stupid string match for the filter component
    const productsFiltered = products.filter((product, i, arr) => {
      // could get fancy with some regex, but why
      if (
        Object.values(product)
          .join(' ')
          .toUpperCase()
          .indexOf(filterString.toUpperCase()) !== -1
      )
        return true;
      return false;
    });

    return (
      <>
        <div className='m-5 mb-0 inline-flex'>
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
              value={filterString}
              onChange={(e) => {
                setFilterString(e.target.value);
              }}
              type='text'
              name='search'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md inline-flex'
              placeholder='Filter...'
            />
          </span>
        </div>
        <div className='flex-grow w-full mx-auto flex mt-5'>
          <div className='flex-1 min-w-0 flex'>
            {filtersActive ? (
              <div className='border-b border-gray-200 border-b-0 flex-shrink-0 w-80 border-r border-t border-gray-200 bg-white rounded-r-lg'>
                <div className='h-full pl-4 pr-6 py-6'>
                  <FilterPanel activeView={activeView} />
                </div>
              </div>
            ) : null}

            <div className='h-full min-w-0 flex-1'>
              <ProductsTable products={productsFiltered} />
            </div>
          </div>
        </div>
      </>
    );
  }
);
