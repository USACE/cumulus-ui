import React, { useState, useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import PageHeading from '../../app-components/page-heading';
import {
  formatDistance,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  parseISO,
} from 'date-fns';
import rainCloud from '../../images/rain-cloud.png';
import tempThermometer from '../../images/temperature.png';
import snowFlake from '../../images/snow.png';
import Select from 'react-select';

function ProductImage(param) {
  switch (param) {
    case 'PRECIPITATION':
      return rainCloud;
    case 'AIRTEMP':
      return tempThermometer;
    case 'SNOW DEPTH':
    case 'SNOW MELT':
    case 'SNOWTEMP':
    case 'SWE':
    case 'COLD CONTENT':
      return snowFlake;
    default:
      return rainCloud;
  }
}

const DisplayTags = ({ productTags, tagsObj }) => {
  return tagsObj && Object.keys(tagsObj).length !== 0 ? (
    <div>
      {productTags &&
        productTags.map((productTagId, idx) => (
          <span
            key={idx}
            style={{
              backgroundColor: `#${tagsObj[productTagId].color}`,
            }}
            className='text-xs font-light px-2 py-1 rounded-xl mr-1'
          >
            {tagsObj[productTagId].name}
          </span>
        ))}
    </div>
  ) : null;
};

const ProductRow = (p, idx, tagsObj) => (
  <tr className='hover:bg-gray-100' key={idx}>
    <td className='px-6 py-4 whitespace-nowrap'>
      <a href={`/products/${p.id}`}>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            {/* <i className="mdi mdi-weather-pouring text-blue-800" /> */}
            <img
              className='h-10 w-10 object-contain'
              src={ProductImage(p.parameter)}
              alt={p.parameter}
              title={p.parameter}
            />
          </div>
          <div className='ml-4'>
            <div
              className='text-md font-semibold text-gray-900'
              title={p.description}
            >
              {p.name}
            </div>
            <div className='text-sm text-gray-500'>
              {p.parameter} measured in {p.unit}
            </div>
          </div>
        </div>
      </a>
    </td>

    <td className='px-6 py-4 whitespace-nowrap'>
      <DisplayTags productTags={p.tags} tagsObj={tagsObj} />
    </td>
    <td className='px-6 py-4 whitespace-nowrap'>
      <div className='text-sm text-gray-900'>
        {p.after && formatDistanceToNow(parseISO(p.after), { addSuffix: true })}
      </div>
      <div className='text-sm text-gray-500'>{p.after}</div>
    </td>
    <td className='px-6 py-4 whitespace-nowrap'>
      <div className='text-sm text-gray-900'>
        {p.before &&
          formatDistanceToNowStrict(parseISO(p.before), { addSuffix: true })}
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
  <thead className='bg-gray-300'>
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

function Products({
  doProductFetch,
  productItems: products,
  tagItemsObject: tagsObj,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    doProductFetch();
  }, [doProductFetch]);

  const [payload, setPayload] = useState({ param: '' });

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
            <PageHeading heading='Product Catalog' className='mb-5' />
            {/* {Param Filter} */}
            <label className='inline-block mb-2 mr-2' forhtml='param'>
              <span className='text-gray-600'>Parameter Filter</span>
            </label>
            <Select
              name='param'
              className='inline-block w-60 mb-2'
              placeholder={'Show All'}
              options={[
                { value: '', label: 'Show All' },
                { value: 'PRECIP', label: 'Precip' },
                { value: 'AIRTEMP', label: 'AirTemp' },
              ]}
              onChange={(e) =>
                setPayload({
                  ...payload,
                  param: e.value,
                })
              }
            ></Select>
            <div className='shadow overflow-hidden w-full border-b border-gray-200 '>
              {/* {Product Table} */}
              <table className='min-w-full divide-y divide-gray-200'>
                <ProductTableHeader />

                <tbody className='bg-white divide-y divide-gray-30 h-30 overflow-scroll'>
                  {products && products.length
                    ? products.map(
                        (p, idx) =>
                          (payload &&
                            payload.param === p.parameter &&
                            ProductRow(p, idx, tagsObj)) ||
                          (payload.param === '' && ProductRow(p, idx, tagsObj))
                      )
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

export default connect(
  'selectProductItems',
  'selectTagItemsObject',
  'doProductFetch',
  Products
);
