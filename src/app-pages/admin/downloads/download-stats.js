import React from 'react';
import { connect } from 'redux-bundler-react';

const DownloadStats = connect(
  'selectDownloadMetricsItems',
  ({ downloadMetricsItems: downloadMetrics }) => {
    const metrics = downloadMetrics[0];
    const stats = [
      { name: 'Total Downloads', stat: metrics.count.total || '-' },
      { name: 'Last 30 days', stat: metrics.count.days_30 || '-' },
      { name: 'Last 24 hours', stat: metrics.count.days_1 || '-' },
    ];

    return (
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {stats.map((item) => (
          <div
            key={item.name}
            className='px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6'
          >
            <dt className='text-sm font-medium text-gray-500 truncate'>
              {item.name}
            </dt>
            <dd className='mt-1 text-3xl font-semibold text-gray-900'>
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    );
  }
);

export default DownloadStats;
