import React from 'react';
import AccountsTable from './accounts-table';

import AdminWrapper from '../../../app-components/admin/AdminWrapper';

export default function AdminAccounts() {
  return (
    <AdminWrapper>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <AccountsTable />
      </div>
    </AdminWrapper>
  );
}
