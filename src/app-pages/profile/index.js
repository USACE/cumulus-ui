import React, { useState } from 'react';

import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import { connect } from 'redux-bundler-react';

import MyTokens from './my-tokens';

export default connect(
  'selectProfileMyProfile',
  'selectAuthUsername',
  (props) => {
    const profile = props.profileMyProfile;
    const user = props.authUsername;

    function formatAuthUsername(username) {
      const parts = username.split('.');
      if (parts.length === 2) {
        return parts[0] + ', ' + parts[1];
      } else {
        return parts[0] + ', ' + parts[1] + ' ' + parts[2];
      }
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      profile && (
        <div className='flex h-screen overflow-hidden'>
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100'>
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
              <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
                <div className='flex flex-wrap'>
                  {/* <!--first row --> */}
                  <div className='grid grid-cols-1'>
                    <div className='m-3 p-3 bg-white min-h-0 shadow-md rounded'>
                      <div className='font-bold text-gray-600 text-md text-secondary uppercase tracking-wider inline'>
                        My Profile
                      </div>
                      <div className='grid grid-flow-col grid-cols-6 grid-rows-3 gap-4 p-4 border-gray-100 border-t-4'>
                        <div className='font-semibold text-lg'>Name:</div>
                        <div className='col-start-2 col-end-7 text-lg'>
                          {formatAuthUsername(user)}
                        </div>
                        <div className='font-semibold text-lg'>Email:</div>
                        <div className='col-start-2 col-end-7 text-lg'>
                          {profile.email}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--second row --> */}
                  <div className='grid grid-cols-1'>
                    <div className='m-3 p-3 bg-white min-h-0 shadow-md rounded'>
                      <MyTokens />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )
    );
  }
);
