import React, { useState, useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import { formatDistance, formatDistanceToNow, parseISO } from 'date-fns';

function ProductImage(group) {
  switch (group) {
    case 'PRECIPITATION':
      return 'https://cdn.pixabay.com/photo/2016/03/18/15/09/light-rain-1265212_960_720.png';
    case 'TEMPERATURE':
      return 'https://cdn.pixabay.com/photo/2016/03/31/15/27/cold-1293305_960_720.png';
    case 'SNOW':
      return 'https://cdn.pixabay.com/photo/2016/10/20/10/16/snow-flake-1755115_960_720.png';
    default:
      return 'https://cdn.pixabay.com/photo/2016/03/18/15/09/light-rain-1265212_960_720.png';
  }
}

const ProductRow = (p, idx) => (
  <tr className='hover:bg-gray-100' key={idx}>
    <td className='px-6 py-4 whitespace-nowrap'>
      <a href={`/catalog/${p.id}`}>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            {/* <i className="mdi mdi-weather-pouring text-blue-800" /> */}
            <img
              className='h-10 w-10 object-contain'
              src={ProductImage(p.group)}
              alt={p.group}
              title={p.group}
            />
          </div>
          <div className='ml-4'>
            <div className='text-md font-semibold text-gray-900'>{p.name}</div>
            <div className='text-sm text-gray-500'>
              {p.parameter} measured in {p.unit}
            </div>
          </div>
        </div>
      </a>
    </td>

    <td className='px-6 py-4 whitespace-nowrap'>
      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
        {p.is_realtime && 'Realtime'}
      </span>
      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800'>
        {p.is_forecast && 'Forecast'}
      </span>
    </td>
    <td className='px-6 py-4 whitespace-nowrap'>
      <div className='text-sm text-gray-900'>
        {p.after && formatDistanceToNow(parseISO(p.after)) + ' ago'}
      </div>
      <div className='text-sm text-gray-500'>{p.after}</div>
    </td>
    <td className='px-6 py-4 whitespace-nowrap'>
      <div className='text-sm text-gray-900'>
        {p.before && formatDistanceToNow(parseISO(p.before)) + ' ago'}
      </div>
      <div className='text-sm text-gray-500'>{p.before}</div>
    </td>

    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
      <div className='text-sm text-gray-500'>
        Grid Count: {p.productfile_count}
      </div>
      <div className='text-sm text-gray-500'>
        Duration:{' '}
        {p.after &&
          p.before &&
          formatDistance(parseISO(p.after), parseISO(p.before))}
      </div>
    </td>
  </tr>
);

const ProductTableHeader = () => (
  <thead className='bg-gray-100'>
    <tr>
      {['Product Name', 'Tags', 'First Record', 'Last Record', 'Stats'].map(
        (c) => {
          return (
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              key={c}
            >
              {c}
            </th>
          );
        }
      )}
    </tr>
  </thead>
);

function Products({ doProductFetch, productItemsArray: products }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    doProductFetch();
  }, [doProductFetch]);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Cards */}
            {/* <div className='grid grid-cols-12 gap-6'> */}
            {/* {products && products.length
                ? products.map((p, idx) => JSON.stringify(p.name))
                : null} */}
            <div className='shadow overflow-hidden w-full border-b border-gray-200 '>
              <table className='min-w-full divide-y divide-gray-200'>
                <ProductTableHeader />

                <tbody className='bg-white divide-y divide-gray-300 border-2 border-red-500 h-30 overflow-scroll'>
                  {products && products.length
                    ? products.map((p, idx) => ProductRow(p, idx))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          {/* </div> */}
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default connect('selectProductItemsArray', 'doProductFetch', Products);
