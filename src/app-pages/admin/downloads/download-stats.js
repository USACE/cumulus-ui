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
    const DownloadIcon = () => {
      return (
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
      );
    };
    return downloadMetrics.length ? (
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-5 mx-auto'>
          <div className='flex flex-wrap -m-4 text-center'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <DownloadIcon />
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {downloadMetrics && downloadMetrics[0].count.days_1}
                </h2>
                <p className='leading-relaxed'>Last 24 hours</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <DownloadIcon />
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {downloadMetrics && downloadMetrics[0].count.days_7}
                </h2>
                <p className='leading-relaxed'>Last 7 days</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <DownloadIcon />
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {downloadMetrics && downloadMetrics[0].count.days_30}
                </h2>
                <p className='leading-relaxed'>Last 30 days</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <DownloadIcon />
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  {downloadMetrics && downloadMetrics[0].count.total}
                </h2>
                <p className='leading-relaxed'>Total Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      'no downloads to display'
    );
  }
);

export default HomeStats;
