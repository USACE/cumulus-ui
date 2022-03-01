import React from 'react';

import ProductsTable from './products-table';

import AdminWrapper from '../../../app-components/admin/AdminWrapper';

export default function AdminProducts() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <ProductsTable />
      </div>
    </AdminWrapper>
  );
}
