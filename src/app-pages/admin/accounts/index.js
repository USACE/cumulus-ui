import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Header from '../../../app-components/Header';
// import HomeStats from './home-stats';
import Footer from '../../../app-components/footer/footer';
import AccountsTable from './accounts-table';

function AdminAccounts() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className='container mx-auto'>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Main content */}
            <AccountsTable />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AdminAccounts;
