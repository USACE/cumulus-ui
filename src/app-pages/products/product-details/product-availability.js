import { useState } from 'react';
import { connect } from 'redux-bundler-react';
import HeatMap from './water-year-heatmap';
import ButtonGroup from '../../../app-components/button-group/button-group';
import ButtonGroupButton from '../../../app-components/button-group/button-group-button';

export default connect(
  'selectProductavailabilityByWaterYearByRoute',
  ({ productavailabilityByWaterYearByRoute: productAvailability }) => {
    const [sortDesc, setSortDesc] = useState(true);
    return (
      <div>
        <div className='flex justify-between'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Availability
          </h3>
          <ButtonGroup>
            <ButtonGroupButton
              onClick={() => {
                setSortDesc(!sortDesc);
              }}
              title={`${sortDesc ? 'Sort Ascending' : 'Sort Descending'}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='text-gray-400'
              >
                {sortDesc ? (
                  <path
                    fill='currentColor'
                    d='M21 17H24L20 21L16 17H19V3H21V17M8 16H11V13H8V16M13 5H12V3H10V5H6V3H4V5H3C1.89 5 1 5.89 1 7V18C1 19.11 1.89 20 3 20H13C14.11 20 15 19.11 15 18V7C15 5.89 14.11 5 13 5M3 18L3 11H13L13 18L3 18Z'
                  />
                ) : (
                  <path
                    fill='currentColor'
                    d='M19 7H16L20 3L24 7H21V21H19V7M8 16H11V13H8V16M13 5H12V3H10V5H6V3H4V5H3C1.89 5 1 5.89 1 7V18C1 19.11 1.89 20 3 20H13C14.11 20 15 19.11 15 18V7C15 5.89 14.11 5 13 5M3 18L3 11H13L13 18L3 18Z'
                  />
                )}
              </svg>
            </ButtonGroupButton>
          </ButtonGroup>
        </div>
        <div className='w-full'>
          {productAvailability &&
            Object.keys(productAvailability)
              .sort((a, b) => {
                if (a < b) return sortDesc ? 1 : -1;
                if (b < a) return sortDesc ? -1 : 1;
                return 0;
              })
              .map((year) => {
                return (
                  <HeatMap
                    key={year}
                    width={'100%'}
                    year={year}
                    data={productAvailability}
                  />
                );
              })}
        </div>
      </div>
    );
  }
);
