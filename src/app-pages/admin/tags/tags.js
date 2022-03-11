import React from 'react';

import TagsTable from './tags-table';

import AdminWrapper from '../../../app-components/admin/AdminWrapper';

export default function AdminTags() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}
        <h2 className='text-lg leading-6 font-medium text-gray-900'>Tags</h2>
        <TagsTable />
      </div>
    </AdminWrapper>
  );
}
