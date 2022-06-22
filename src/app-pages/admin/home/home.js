import React from 'react';

import DownloadTable from '../downloads/download-table';
import AdminWrapper from '../../../app-components/admin/AdminWrapper';
import AdminHomeStats from './home-stats';

export default function AdminProducts() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <div>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Admin Home
          </h3>
          <AdminHomeStats />
        </div>

        <h3 className='text-lg leading-6 font-medium text-gray-900 mt-10'>
          Recent downloads
        </h3>
        <div className='h-[40rem] overflow-y-auto'>
          <DownloadTable limitRows={20} />
        </div>
      </div>
    </AdminWrapper>
  );
}
