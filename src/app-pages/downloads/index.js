import React, { useState } from 'react';

import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';

// import Banner from '../../app-components/Banner';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden lg:bg-red-200 sm:bg-yellow-300 xl:bg-green-400 2xl:bg-white'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            <div className='flex flex-wrap'>
              <div className='p-5 w-full xl:w-1/2'>
                <button className='w-full xl:w-2/3 text-left p-5 mb-5 bg-blue-800 text-white text-2xl rounded-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 inline mr-2 mb-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
                    />
                  </svg>
                  Explore Products
                </button>
                <button className='w-full xl:w-2/3 text-left p-5 mb-5 bg-green-800 text-white text-2xl rounded-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 inline mr-2 mb-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                    />
                  </svg>
                  Download Data
                </button>
                <button className='w-full xl:w-2/3 text-left p-5 bg-gray-500 text-white text-2xl rounded-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 inline mr-2 mb-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                    />
                  </svg>
                  View Documentation
                </button>
              </div>
              <div className='w-full xl:w-1/2'>hello</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
