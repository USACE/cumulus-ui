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
            <PageHeading heading='Contact Support' />

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
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/USACE/cumulus/issues/new/choose'
                >
                  <div class='border-2 border-gray-200 px-4 py-6 rounded-lg bg-white shadow-md hover:shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
	c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
	c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
	c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368c-56.832-6.496-116.608-28.544-116.608-127.008
	c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68c0,0,21.504-6.912,70.4,26.336
	c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672c48.864-33.248,70.336-26.336,70.336-26.336
	c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992c0,98.72-59.84,120.448-116.864,126.816
	c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496c0,6.88,4.608,14.88,17.6,12.352
	C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z'
                      />
                    </svg>
                    <h2 className='title-font font-medium text-2xl'>
                      Submit an issue on GitHub
                    </h2>
                    <p className='leading-relaxed text-sm'>
                      (requires GitHub account)
                    </p>
                  </div>
                </a>
              </div>
              <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
                <a href='mailto:CWMS-GriddedData-Support@usace.army.mil'>
                  <div class='border-2 border-gray-200 px-4 py-6 rounded-lg bg-white shadow-md hover:shadow-lg'>
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
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                    <h2 className='title-font font-medium text-2xl'>
                      Email the Support Team
                    </h2>
                    <p className='leading-relaxed text-sm'>
                      CWMS-GriddedData-Support@usace.army.mil
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
