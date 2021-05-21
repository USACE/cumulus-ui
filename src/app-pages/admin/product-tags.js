import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from '../../app-components/Header';
import HomeStats from './home-stats';
import Footer from '../../app-components/footer/footer';

function ProductTags() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className='container mx-auto h-screen'>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Main content */}

            <table className='table-auto w-full text-left whitespace-no-wrap'>
              <thead>
                <tr>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
                    Plan
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Speed
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Storage
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Price
                  </th>
                  <th className='w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-3'>Start</td>
                  <td className='px-4 py-3'>5 Mb/s</td>
                  <td className='px-4 py-3'>15 GB</td>
                  <td className='px-4 py-3 text-lg text-gray-900'>Free</td>
                  <td className='w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
                <tr>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>Pro</td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    25 Mb/s
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    25 GB
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900'>
                    $24
                  </td>
                  <td className='border-t-2 border-gray-200 w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
                <tr>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    Business
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    36 Mb/s
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    40 GB
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900'>
                    $50
                  </td>
                  <td className='border-t-2 border-gray-200 w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
                <tr>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3'>
                    Exclusive
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3'>
                    48 Mb/s
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3'>
                    120 GB
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900'>
                    $72
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ProductTags;
