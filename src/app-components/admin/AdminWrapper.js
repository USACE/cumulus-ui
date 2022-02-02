import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';

import { connect } from 'redux-bundler-react';

const AdminWrapper = connect(
  'selectAuthIsLoggedIn',
  'selectAuthRoles',
  'doUpdateUrl',
  ({ authIsLoggedIn: isLoggedIn, authRoles: roles, doUpdateUrl, children }) => {
    // User Is Admin
    const isAdmin =
      isLoggedIn && roles && roles.indexOf('application.admin') !== -1;

    if (!isAdmin) {
      doUpdateUrl('/');
      return 'not authorized';
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className='flex h-screen overflow-hidden'>
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className='container mx-auto h-full'>{children}</main>

          {/* <Footer /> */}
        </div>
      </div>
    );
  }
);

export default AdminWrapper;
