import React from 'react';
import { connect } from 'redux-bundler-react';

const HomeStats = connect(
  'selectProductItems',
  'selectWatershedItems',
  'selectDownloadMetricsItems',
  ({
    productItems: products,
    watershedItems: watersheds,
    downloadMetricsItems: downloadMetrics,
  }) => {
    return (
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-5 mx-auto'>
          <div className='flex flex-wrap -m-4 text-center'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {downloadMetrics && downloadMetrics[0].count.total}
                </h2>
                <p className='leading-relaxed'>Total Downloads</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  -
                </h2>
                <p className='leading-relaxed'>Users</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {products && products.length}
                </h2>
                <p className='leading-relaxed'>Products</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                  />
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {watersheds && watersheds.length}
                </h2>
                <p className='leading-relaxed'>Watersheds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default HomeStats;
