import React from 'react';
import DownloadTable from './download-table';
import TopWatershedsTable from './top-watersheds-table';
import TopProductsTable from './top-products-table';
import AdminWrapper from '../../../app-components/admin/AdminWrapper';
import DownloadStats from './download-stats';

export default function AdminProducts() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <div>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Downloads
          </h3>
          <DownloadStats />
        </div>

        <div className='flex flex-wrap xl:flex-nowrap gap-8 mt-10 overflow-x-hidden'>
          <div className='flex-auto w-full'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Top Watersheds
            </h3>
            <TopWatershedsTable />
          </div>

          <div className='flex-auto w-full'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Top Products
            </h3>
            <TopProductsTable />
          </div>
        </div>

        <h3 className='text-lg leading-6 font-medium text-gray-900 mt-10'>
          Recent downloads
        </h3>

        <DownloadTable limitRows={5} />
      </div>
    </AdminWrapper>
  );
}
