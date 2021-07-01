import React, { useState, useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import PageHeading from '../../app-components/page-heading';

import { NewButton } from '../forms/buttons';
import NewDownloadModal from '../modals/new-download-modal';
import {
  formatDistanceStrict,
  formatDistanceToNow,
  parseISO,
  format,
} from 'date-fns';

// import Banner from '../../app-components/Banner';

const HEADERS = [
  'Watershed',
  'Products',
  'Time Window',
  'Requested',
  'Processing Time',
  'Download',
];

const Products = connect(
  'selectProductItemsObject',
  'doProductFetch',
  ({ productItemsObject: productsObj, downloadProducts, doProductFetch }) => {
    useEffect(() => {
      doProductFetch();
    }, [doProductFetch]);
    return (
      <div className='max-w-md'>
        {/* {JSON.stringify(productsObj)} */}
        {downloadProducts &&
          productsObj &&
          downloadProducts.map((dp, idx) => (
            <a href={'/products/' + productsObj[dp].id}>
              <span
                className='inline-block bg-gray-300 hover:bg-blue-300 cursor-pointer mr-1 mb-1 p-1 text-xs rounded'
                key={idx}
              >
                {productsObj[dp].name}
              </span>
            </a>
          ))}
      </div>
    );
  }
);

const ProgressBar = ({ percent }) => {
  return (
    <div className='flex flex-col px-2'>
      {/* Percent Complete */}
      <div className='w-100 text-right'>
        <span className='text-xs font-mono'>{percent}%</span>
      </div>
      {/* Progress Bar */}
      <div
        className={`flex overflow-hidden h-2 mb-4 text-xs rounded bg-blue-200 ${
          percent < 100 && 'animate-pulse'
        }`}
      >
        <div
          style={{ width: `${percent}%` }}
          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
        ></div>
      </div>
    </div>
  );
};

const TableRow = ({ item, doModalOpen }) => {
  // const procStart = DateTime.fromISO(item.processing_start);
  // const procEnd = DateTime.fromISO(item.processing_end);
  // const dur = procEnd.diff(procStart, 'seconds');
  const dur =
    item && item.processing_start && item.processing_end
      ? formatDistanceStrict(
          parseISO(item.processing_start),
          parseISO(item.processing_end),
          { roundingMethod: 'ceil' }
        )
      : '';

  // const NewDownloadCopy = () => (
  //   <svg
  //     xmlns='http://www.w3.org/2000/svg'
  //     className='h-6 w-6 inline text-gray-400 hover:text-gray-700'
  //     fill='none'
  //     viewBox='0 0 24 24'
  //     stroke='currentColor'
  //   >
  //     <title>New Download using parameters</title>
  //     <path
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       strokeWidth={2}
  //       d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
  //     />
  //   </svg>
  // );

  const DownloadNow = ({ href }) => (
    <a href={href}>
      <svg
        className='w-6 text-gray-500 hover:text-gray-800 inline'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        width='24'
      >
        <title>Click to Download</title>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
        />
      </svg>
    </a>
  );

  const DownloadFailed = () => (
    <>
      <svg
        className='w-6 text-red-600 inline'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 20'
        fill='currentColor'
        width='24'
      >
        <title>Failed Download</title>
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </>
  );

  return (
    <tr>
      {/* Basin */}
      <td className='p-2 text-left'>{item.watershed_name}</td>
      {/* Products */}
      <td className='p-2 text-left'>
        {/* {item.product_id} */}
        <Products downloadProducts={item.product_id} />
      </td>
      <td className='p-2 text-left text-sm text-gray-500'>
        <span className='block mb-1'>
          Start: {format(parseISO(item.datetime_start), 'ddLLLyyyy @ p')}
        </span>
        <span className='block'>
          End: {format(parseISO(item.datetime_end), 'ddLLLyyyy @ p')}
        </span>
      </td>
      {/* Requested */}
      <td className='p-2 text-left'>
        {formatDistanceToNow(parseISO(item.processing_start), {
          addSuffix: true,
        })}
      </td>
      <td className='p-2 text-left'>{dur}</td>
      <td className=''>
        {item.status === 'SUCCESS' && item.progress === 100 ? (
          <DownloadNow href={item.file} />
        ) : item.status === 'INITIATED' ? (
          <ProgressBar percent={item.progress} />
        ) : item.status === 'FAILED' ? (
          <DownloadFailed />
        ) : null}
        {/* <NewDownloadCopy/> */}
      </td>
    </tr>
  );
};

const TableHeader = ({ title }) => (
  <th
    scope='col'
    className='px-2 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
  >
    {title}
  </th>
);

export default connect(
  'selectDownloadItemsArray',
  'selectProfileMyProfile',
  'doModalOpen',
  ({ downloadItemsArray: items, profileMyProfile: profile, doModalOpen }) => {
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

              <div className='flex justify-between'>
                <PageHeading heading='My Downloads' />

                {/* <NewDownloadButton /> */}
                {profile && (
                  <NewButton
                    label={'New Download'}
                    onClick={() => doModalOpen(NewDownloadModal, {})}
                  />
                )}
              </div>

              <div className='w-full'>
                <table className='min-w-full divide-y divide-gray-200 mt-5'>
                  <thead>
                    <tr>
                      {profile &&
                        HEADERS.map((h, idx) => <TableHeader title={h} />)}
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {profile ? (
                      items.map((item, index) => (
                        <TableRow
                          key={index}
                          item={item}
                          doModalOpen={doModalOpen}
                        />
                      ))
                    ) : (
                      <tr>
                        <td>
                          Login or create an account to view/create downloads
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
);
