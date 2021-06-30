import React, { useState } from 'react';

import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import PageHeading from '../../app-components/page-heading';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}
            <PageHeading heading='Cumulus Documentation' />

            <section className='text-gray-600 body-font'>
              <div className='text-center mb-10'>
                {/* <h1 className='text-5xl'>
                  <span className='font-light'>Cumulus Help</span>
                </h1> */}
                {/* <p className='text-gray-800 mt-2 font-thin text-2xl'>
                  Help, Documentation and Contact options.
                </p> */}
              </div>
            </section>

            <div className='flex flex-wrap -m-4 text-center'>
              <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
                <a href='/docs/api'>
                  <div class='border-2 border-gray-200 px-4 py-6 rounded-lg bg-white shadow-md hover:shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                      />
                    </svg>
                    <h2 className='title-font font-medium text-2xl'>
                      API Documentation
                    </h2>
                    <p className='leading-relaxed text-sm'>
                      Interacting with Cumulus using external
                      applications/scripts.
                    </p>
                  </div>
                </a>
              </div>
              <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
                <a href='/docs/rts-script'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg bg-white shadow-md hover:shadow-xl'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    <h2 className='title-font font-medium text-2xl'>
                      CWMS CAVI/HEC RTS Script Setup
                    </h2>
                    <p className='leading-relaxed'>
                      Download grids within CWMS CAVI or HEC RTS
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
