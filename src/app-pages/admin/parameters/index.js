import React from 'react';

import ParametersTable from './parameters-table';

import AdminWrapper from '../../../app-components/admin/AdminWrapper';

export default function AdminParameters() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <ParametersTable />
      </div>
    </AdminWrapper>
  );
}
