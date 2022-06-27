import React from 'react';
import { connect } from 'redux-bundler-react';
import { Table } from '../../../app-components/admin/Table';
import { parseISO, format, formatDistanceStrict } from 'date-fns';

const Products = connect(
  'selectProductItemsObject',
  'doProductFetch',
  ({ productItemsObject: productsObj, downloadProducts }) => {
    return (
      <div className='max-w-md inline-block'>
        {downloadProducts &&
          Object.keys(productsObj).length &&
          downloadProducts.map((dp, idx) => (
            <a key={idx} href={'/products/' + productsObj[dp].id}>
              <span className='inline-block bg-gray-200 hover:bg-indigo-300 cursor-pointer mr-1 mb-1 p-1 text-xs rounded whitespace-nowrap'>
                {productsObj[dp].name}
              </span>
            </a>
          ))}
      </div>
    );
  }
);

const DownloadTable = connect(
  'doModalOpen',
  'selectAdminDownloadItems',

  ({ doModalOpen, adminDownloadItems: items, limitRows }) => {
    // const xitems = [
    //   {
    //     id: '88ed388f-4982-486b-9cda-7852e8aa5164',
    //     sub: '99d6ce15-742a-45c8-8147-26563c1f97d9',
    //     datetime_start: '2022-01-24T16:00:00Z',
    //     datetime_end: '2022-01-24T16:00:00Z',
    //     watershed_id: 'c54eab5b-1020-476b-a5f8-56d77802d9bf',
    //     product_id: ['002125d6-2c90-4c24-9382-10a535d398bb'],
    //     format: null,
    //     status: 'SUCCESS',
    //     progress: 100,
    //     file: 'http://localhost/cumulus/download/dss/download_88ed388f-4982-486b-9cda-7852e8aa5164.dss',
    //     processing_start: '2022-02-25T21:20:12.097443Z',
    //     processing_end: '2022-02-25T21:20:22.097443Z',
    //     watershed_slug: 'tennessee-river',
    //     watershed_name: 'Tennessee River',
    //   },
    // ];

    // Limit items while testing
    items = items.slice(0, limitRows);

    const statusStyles = {
      SUCCESS: 'bg-green-100 text-green-800',
      INITIALIZED: 'bg-yellow-100 text-yellow-800',
      FAILED: 'bg-red-200 text-red-800',
    };

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
    }

    const DownloadButton = ({ item }) => {
      return (
        <button
          onClick={() => {
            window.open(item.file);
          }}
          title='Download Data'
          type='button'
          className='inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30'
          disabled={item.status !== 'SUCCESS'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
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
        </button>
      );
    };

    return (
      <Table
        headers={[
          'Watershed',
          'Products',
          'Time Window',
          'Requested',
          'Processing Time',
          'Status',
          'File',
          '',
        ]}
        items={items}
        itemFields={[
          { key: 'watershed_name' },
          {
            key: 'product_id',
            render: ({ product_id }) => {
              // return product_id.length;
              return <Products downloadProducts={product_id} />;
            },
            className: '!whitespace-normal max-w-96',
          },
          {
            key: 'datetime_start',
            render: (item) => {
              return formatDistanceStrict(
                parseISO(item.datetime_start),
                parseISO(item.datetime_end)
              );
            },
          },
          {
            key: 'processing_start',
            render: (item) => {
              return format(parseISO(item.processing_start), 'dd-LLL-yyyy @ p');
            },
          },
          {
            key: 'processing_start',
            render: (item) => {
              return item.processing_end
                ? formatDistanceStrict(
                    parseISO(item.processing_start),
                    parseISO(item.processing_end)
                  )
                : '-';
            },
          },
          {
            key: 'status',
            render: ({ status }) => {
              return (
                <span
                  className={classNames(
                    statusStyles[status],
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                  )}
                >
                  {status}
                </span>
              );
            },
          },
          {
            key: 'file',
            render: (item) => {
              return <DownloadButton item={item} />;
            },
          },
        ]}
        tools={[]}
      />
    );
  }
);

export default connect('doModalOpen', ({ doModalOpen, limitRows }) => (
  <>
    <div className='py-3'>
      <div className='flex justify-end'>
        {/* <NewButton
          label={'New Product'}
          onClick={() => doModalOpen(EditProductModal)}
        /> */}
      </div>
    </div>
    <DownloadTable limitRows={limitRows} />
  </>
));
