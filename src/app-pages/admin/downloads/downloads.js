import React from 'react';
import DownloadTable from './download-table';
import TopWatershedsTable from './top-watersheds-table';
import AdminWrapper from '../../../app-components/admin/AdminWrapper';
import DownloadStats from './download-stats';

export default function AdminProducts() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <div>
          <DownloadStats />
        </div>

        <h3 className='text-lg leading-6 font-medium text-gray-900 mt-10'>
          Recent downloads
        </h3>

        <DownloadTable />
        <h3 className='text-lg leading-6 font-medium text-gray-900 mt-10'>
          Top Watersheds by Download
        </h3>
        <TopWatershedsTable />
      </div>
    </AdminWrapper>
  );
}
