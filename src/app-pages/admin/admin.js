import React from 'react';

import DownloadTable from './downloads/download-table';

import AdminWrapper from '../../app-components/admin/AdminWrapper';

export default function AdminProducts() {
  const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ];
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <div>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Last 30 days
          </h3>
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
        </div>

        <h3 className='text-lg leading-6 font-medium text-gray-900 mt-10'>
          Recent downloads
        </h3>
        <DownloadTable />
      </div>
    </AdminWrapper>
  );
}
