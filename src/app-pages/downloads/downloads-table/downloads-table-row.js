import { connect } from 'redux-bundler-react';
import {
  formatDistanceToNow,
  formatDistanceStrict,
  format,
  parseISO,
} from 'date-fns';

const Products = connect(
  'selectProductItemsObject',
  'doProductFetch',
  ({ productItemsObject: productsObj, downloadProducts }) => {
    return (
      <div className='max-w-md'>
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

export default connect(function DownloadsTableRow({ item, productsById }) {
  //const product = productsById[item.product_id] || { name: 'Not Found...' };
  const duration =
    item && item.processing_start && item.processing_end
      ? formatDistanceStrict(
          parseISO(item.processing_start),
          parseISO(item.processing_end),
          { roundingMethod: 'ceil' }
        )
      : item.status;
  // console.log(
  //   item,
  //   'start',
  //   item.processing_start,
  //   parseISO(item.processing_start)
  // );
  // console.log('end', item.processing_end, parseISO(item.processing_end));
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap' title='Queue for Download'>
        {item.watershed_name}
      </td>
      <td className='px-6 py-4'>
        <Products downloadProducts={item.product_id} />
      </td>
      <td className='px-6 py-4 whitespace-nowrap  text-sm text-gray-500'>
        {
          <>
            <div className='text-black'>
              {formatDistanceStrict(
                new Date(item.datetime_start),
                new Date(item.datetime_end)
              )}
            </div>
            <div title={item.datetime_start}>
              From:{' '}
              {format(new Date(item.datetime_start), 'yyyy-MM-dd kk:mm O')}
            </div>
            <div title={item.datetime_end}>
              <span className='mr-4'>To:</span>{' '}
              {format(new Date(item.datetime_end), 'yyyy-MM-dd kk:mm O')}
            </div>
          </>
        }
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {
          <>
            <div title={item.datetime_start} className='text-black'>
              {' '}
              {formatDistanceToNow(new Date(item.processing_start), {
                addSuffix: true,
              })}
            </div>
            <div title={item.datetime_end}>
              {' '}
              {format(new Date(item.processing_start), 'yyyy-MM-dd kk:mm O')}
            </div>
          </>
        }
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {duration}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
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
      </td>
    </tr>
  );
});
