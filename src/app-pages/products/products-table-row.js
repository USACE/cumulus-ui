import { connect } from 'redux-bundler-react';
import { classNames } from '../../utils';

const Tag = ({ tags, id }) => {
  const tag = tags[id];
  const cls = classNames(
    `px-2 inline-flex text-xs leading-5 font-semibold rounded-full`,
    tag.name === 'Realtime'
      ? 'bg-teal-300'
      : tag.name === 'Forecast'
      ? 'bg-yellow-300'
      : tag.name === 'Precipitation'
      ? 'bg-sky-300'
      : tag.name === 'Temperature'
      ? 'bg-red-400'
      : tag.name === 'Archive'
      ? 'bg-slate-300'
      : tag.name === 'Snow'
      ? 'bg-cyan-300'
      : 'bg-red-800'
  );
  return (
    <span className={cls} title={tag.description}>
      {tag.name}
    </span>
  );
};

export default connect(
  'selectTagItemsObject',
  function ProductsTableRow({ product, tagItemsObject: tags }) {
    return (
      <tr key={product.id}>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='flex items-center'>
            <div className='flex-shrink-0 h-10 w-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-gray-400'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                {product.parameter === 'PRECIP' ? (
                  <path
                    fill='currentColor'
                    d='M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z'
                  />
                ) : product.parameter === 'AIRTEMP' ? (
                  <path
                    fill='currentColor'
                    d='M10 7C7.2 7 5 9.2 5 12S7.2 17 10 17 15 14.8 15 12 12.8 7 10 7M10 15C8.3 15 7 13.7 7 12S8.3 9 10 9 13 10.3 13 12 11.7 15 10 15M10 2L12.4 5.4C11.6 5.2 10.8 5 10 5S8.4 5.2 7.6 5.4L10 2M1.3 7L5.5 6.7C4.9 7.2 4.4 7.8 3.9 8.5C3.5 9.2 3.2 10 3.1 10.8L1.3 7M1.4 17L3.2 13.2C3.3 14 3.5 14.8 4 15.5C4.4 16.2 5 16.9 5.5 17.4L1.4 17M10 22L7.6 18.6C8.3 18.8 9.1 19 10 19C10.8 19 11.6 18.8 12.4 18.6L10 22M20.8 13.6V6.8C20.8 5.8 20 5 19 5S17.2 5.8 17.2 6.8V13.6C16.5 14.1 16 15 16 16C16 17.7 17.3 19 19 19S22 17.7 22 16C22 15 21.5 14.1 20.8 13.6M18.2 6.8C18.2 6.3 18.6 6 19 6S19.8 6.3 19.8 6.8V8H18.3V6.8Z'
                  />
                ) : null}
              </svg>
            </div>
            <div className='ml-4 max-w-md'>
              <div className='text-sm font-medium text-gray-900'>
                {product.name}
              </div>
              <div className='text-sm text-gray-500 truncate'>
                {product.description}
              </div>
            </div>
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-900'>
            {product.tags.map((tagId, i) => {
              return <Tag key={i} tags={tags} id={tagId} />;
            })}
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
            Active
          </span>
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
          {product.productfile_count}
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
          <a href='#' className='text-indigo-600 hover:text-indigo-900'>
            Edit
          </a>
        </td>
      </tr>
    );
  }
);
