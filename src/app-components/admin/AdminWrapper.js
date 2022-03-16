import React from 'react';
// import Sidebar from './Sidebar';
// import Header from '../Header';
import AdminNavbar from './Navbar';

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

    // const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <>
        <AdminNavbar />
        <div className='flex h-screen overflow-scroll'>
          {/* Sidebar */}
          {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

          {/* Content area */}
          {/* <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'> */}
          {/*  Site header */}
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

          <main className='container mx-auto h-full px-10'>
            {/* <div className='w-full bg-gray-200 px-10 py-5'>
              <AdminBreadcrumbs />
            </div> */}
            {children}
          </main>

          {/* <Footer /> */}
          {/* </div> */}
        </div>
      </>
    );
  }
);

export default AdminWrapper;
