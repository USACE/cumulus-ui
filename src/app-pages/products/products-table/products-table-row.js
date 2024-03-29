import { connect } from 'redux-bundler-react';
import { formatDistanceToNow, formatDistance } from 'date-fns';
import ProductTags from '../product-tags';
import { ClockIcon } from '@heroicons/react/24/outline';

export default connect(
  'selectProductSelectSelected',
  'doProductSelectSetSelected',
  'selectProductIngestStatusItemsObject',
  'selectTagItemsObject',
  function ProductsTableRow({
    product,
    productSelectSelected: selectedProducts,
    doProductSelectSetSelected,
    productIngestStatusItemsObject: productStatusObj,
    tagItemsObject: tagObj,
  }) {
    const selected = selectedProducts.indexOf(product.id) !== -1;
    const toggleSelected = (checked) => {
      if (checked) {
        doProductSelectSetSelected([...selectedProducts, product.id]);
      } else {
        selectedProducts.splice(selectedProducts.indexOf(product.id), 1);
        doProductSelectSetSelected([...selectedProducts]);
      }
    };

    const productHasTag = (tag, productTags, tagObj) => {
      // loop over the assigned product tags searching for a match to tag
      return Boolean(productTags.find((pt) => tagObj[pt]?.name === tag));
    };

    return (
      <tr key={product.id}>
        <td className='px-6 py-4 whitespace-nowrap' title='Queue for Download'>
          <input
            type='checkbox'
            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            checked={selected}
            onChange={(e) => {
              toggleSelected(e.target.checked);
            }}
          />
        </td>
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
                ) : product.parameter.includes('AIRTEMP') ? (
                  <path
                    fill='currentColor'
                    d='M10 7C7.2 7 5 9.2 5 12S7.2 17 10 17 15 14.8 15 12 12.8 7 10 7M10 15C8.3 15 7 13.7 7 12S8.3 9 10 9 13 10.3 13 12 11.7 15 10 15M10 2L12.4 5.4C11.6 5.2 10.8 5 10 5S8.4 5.2 7.6 5.4L10 2M1.3 7L5.5 6.7C4.9 7.2 4.4 7.8 3.9 8.5C3.5 9.2 3.2 10 3.1 10.8L1.3 7M1.4 17L3.2 13.2C3.3 14 3.5 14.8 4 15.5C4.4 16.2 5 16.9 5.5 17.4L1.4 17M10 22L7.6 18.6C8.3 18.8 9.1 19 10 19C10.8 19 11.6 18.8 12.4 18.6L10 22M20.8 13.6V6.8C20.8 5.8 20 5 19 5S17.2 5.8 17.2 6.8V13.6C16.5 14.1 16 15 16 16C16 17.7 17.3 19 19 19S22 17.7 22 16C22 15 21.5 14.1 20.8 13.6M18.2 6.8C18.2 6.3 18.6 6 19 6S19.8 6.3 19.8 6.8V8H18.3V6.8Z'
                  />
                ) : product.parameter === 'SNOW DEPTH' ? (
                  <path
                    fill='currentColor'
                    d='M4,16.36C3.86,15.82 4.18,15.25 4.73,15.11L7,14.5L5.33,12.86C4.93,12.46 4.93,11.81 5.33,11.4C5.73,11 6.4,11 6.79,11.4L8.45,13.05L9.04,10.8C9.18,10.24 9.75,9.92 10.29,10.07C10.85,10.21 11.17,10.78 11,11.33L10.42,13.58L12.67,13C13.22,12.83 13.79,13.15 13.93,13.71C14.08,14.25 13.76,14.82 13.2,14.96L10.95,15.55L12.6,17.21C13,17.6 13,18.27 12.6,18.67C12.2,19.07 11.54,19.07 11.15,18.67L9.5,17L8.89,19.27C8.75,19.83 8.18,20.14 7.64,20C7.08,19.86 6.77,19.29 6.91,18.74L7.5,16.5L5.26,17.09C4.71,17.23 4.14,16.92 4,16.36M1,10A5,5 0 0,1 6,5C7,2.65 9.3,1 12,1C15.43,1 18.24,3.66 18.5,7.03L19,7A4,4 0 0,1 23,11A4,4 0 0,1 19,15A1,1 0 0,1 18,14A1,1 0 0,1 19,13A2,2 0 0,0 21,11A2,2 0 0,0 19,9H17V8A5,5 0 0,0 12,3C9.5,3 7.45,4.82 7.06,7.19C6.73,7.07 6.37,7 6,7A3,3 0 0,0 3,10C3,10.85 3.35,11.61 3.91,12.16C4.27,12.55 4.26,13.16 3.88,13.54C3.5,13.93 2.85,13.93 2.47,13.54C1.56,12.63 1,11.38 1,10M14.03,20.43C14.13,20.82 14.5,21.04 14.91,20.94L16.5,20.5L16.06,22.09C15.96,22.5 16.18,22.87 16.57,22.97C16.95,23.08 17.35,22.85 17.45,22.46L17.86,20.89L19.03,22.05C19.3,22.33 19.77,22.33 20.05,22.05C20.33,21.77 20.33,21.3 20.05,21.03L18.89,19.86L20.46,19.45C20.85,19.35 21.08,18.95 20.97,18.57C20.87,18.18 20.5,17.96 20.09,18.06L18.5,18.5L18.94,16.91C19.04,16.5 18.82,16.13 18.43,16.03C18.05,15.92 17.65,16.15 17.55,16.54L17.14,18.11L15.97,16.95C15.7,16.67 15.23,16.67 14.95,16.95C14.67,17.24 14.67,17.7 14.95,17.97L16.11,19.14L14.54,19.55C14.15,19.65 13.92,20.05 14.03,20.43Z'
                  />
                ) : product.parameter === 'SWE' ? (
                  <path
                    fill='currentColor'
                    d='M4,16.36C3.86,15.82 4.18,15.25 4.73,15.11L7,14.5L5.33,12.86C4.93,12.46 4.93,11.81 5.33,11.4C5.73,11 6.4,11 6.79,11.4L8.45,13.05L9.04,10.8C9.18,10.24 9.75,9.92 10.29,10.07C10.85,10.21 11.17,10.78 11,11.33L10.42,13.58L12.67,13C13.22,12.83 13.79,13.15 13.93,13.71C14.08,14.25 13.76,14.82 13.2,14.96L10.95,15.55L12.6,17.21C13,17.6 13,18.27 12.6,18.67C12.2,19.07 11.54,19.07 11.15,18.67L9.5,17L8.89,19.27C8.75,19.83 8.18,20.14 7.64,20C7.08,19.86 6.77,19.29 6.91,18.74L7.5,16.5L5.26,17.09C4.71,17.23 4.14,16.92 4,16.36M1,10A5,5 0 0,1 6,5C7,2.65 9.3,1 12,1C15.43,1 18.24,3.66 18.5,7.03L19,7A4,4 0 0,1 23,11A4,4 0 0,1 19,15A1,1 0 0,1 18,14A1,1 0 0,1 19,13A2,2 0 0,0 21,11A2,2 0 0,0 19,9H17V8A5,5 0 0,0 12,3C9.5,3 7.45,4.82 7.06,7.19C6.73,7.07 6.37,7 6,7A3,3 0 0,0 3,10C3,10.85 3.35,11.61 3.91,12.16C4.27,12.55 4.26,13.16 3.88,13.54C3.5,13.93 2.85,13.93 2.47,13.54C1.56,12.63 1,11.38 1,10M14.03,20.43C14.13,20.82 14.5,21.04 14.91,20.94L16.5,20.5L16.06,22.09C15.96,22.5 16.18,22.87 16.57,22.97C16.95,23.08 17.35,22.85 17.45,22.46L17.86,20.89L19.03,22.05C19.3,22.33 19.77,22.33 20.05,22.05C20.33,21.77 20.33,21.3 20.05,21.03L18.89,19.86L20.46,19.45C20.85,19.35 21.08,18.95 20.97,18.57C20.87,18.18 20.5,17.96 20.09,18.06L18.5,18.5L18.94,16.91C19.04,16.5 18.82,16.13 18.43,16.03C18.05,15.92 17.65,16.15 17.55,16.54L17.14,18.11L15.97,16.95C15.7,16.67 15.23,16.67 14.95,16.95C14.67,17.24 14.67,17.7 14.95,17.97L16.11,19.14L14.54,19.55C14.15,19.65 13.92,20.05 14.03,20.43Z'
                  />
                ) : product.parameter === 'COLD CONTENT' ? (
                  <path
                    fill='currentColor'
                    d='M16.46,9.41L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L16.46,14.61M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44M19,13V7H21V13H19M19,17V15H21V17H19Z'
                  />
                ) : product.parameter === 'SNOW MELT' ? (
                  <path
                    fill='currentColor'
                    d='M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z'
                  />
                ) : product.parameter === 'SNOWTEMP' ? (
                  <path
                    fill='currentColor'
                    d='M4,16.36C3.86,15.82 4.18,15.25 4.73,15.11L7,14.5L5.33,12.86C4.93,12.46 4.93,11.81 5.33,11.4C5.73,11 6.4,11 6.79,11.4L8.45,13.05L9.04,10.8C9.18,10.24 9.75,9.92 10.29,10.07C10.85,10.21 11.17,10.78 11,11.33L10.42,13.58L12.67,13C13.22,12.83 13.79,13.15 13.93,13.71C14.08,14.25 13.76,14.82 13.2,14.96L10.95,15.55L12.6,17.21C13,17.6 13,18.27 12.6,18.67C12.2,19.07 11.54,19.07 11.15,18.67L9.5,17L8.89,19.27C8.75,19.83 8.18,20.14 7.64,20C7.08,19.86 6.77,19.29 6.91,18.74L7.5,16.5L5.26,17.09C4.71,17.23 4.14,16.92 4,16.36M1,10A5,5 0 0,1 6,5C7,2.65 9.3,1 12,1C15.43,1 18.24,3.66 18.5,7.03L19,7A4,4 0 0,1 23,11A4,4 0 0,1 19,15A1,1 0 0,1 18,14A1,1 0 0,1 19,13A2,2 0 0,0 21,11A2,2 0 0,0 19,9H17V8A5,5 0 0,0 12,3C9.5,3 7.45,4.82 7.06,7.19C6.73,7.07 6.37,7 6,7A3,3 0 0,0 3,10C3,10.85 3.35,11.61 3.91,12.16C4.27,12.55 4.26,13.16 3.88,13.54C3.5,13.93 2.85,13.93 2.47,13.54C1.56,12.63 1,11.38 1,10M14.03,20.43C14.13,20.82 14.5,21.04 14.91,20.94L16.5,20.5L16.06,22.09C15.96,22.5 16.18,22.87 16.57,22.97C16.95,23.08 17.35,22.85 17.45,22.46L17.86,20.89L19.03,22.05C19.3,22.33 19.77,22.33 20.05,22.05C20.33,21.77 20.33,21.3 20.05,21.03L18.89,19.86L20.46,19.45C20.85,19.35 21.08,18.95 20.97,18.57C20.87,18.18 20.5,17.96 20.09,18.06L18.5,18.5L18.94,16.91C19.04,16.5 18.82,16.13 18.43,16.03C18.05,15.92 17.65,16.15 17.55,16.54L17.14,18.11L15.97,16.95C15.7,16.67 15.23,16.67 14.95,16.95C14.67,17.24 14.67,17.7 14.95,17.97L16.11,19.14L14.54,19.55C14.15,19.65 13.92,20.05 14.03,20.43Z'
                  />
                ) : null}
              </svg>
            </div>
            <div className='ml-4 max-w-md'>
              <a href={`/products/${product.id}`}>
                <div className='flex text-sm font-medium text-gray-900'>
                  {product.name}
                  {!productStatusObj[product.slug]?.is_current &&
                  !productHasTag('Archive', product.tags, tagObj) ? (
                    <>
                      <span
                        title={`Last product was ${
                          productStatusObj[product.slug]?.actual_timedelta
                        } ago. Threshold is ${
                          productStatusObj[product.slug]?.acceptable_timedelta
                        }`}
                        className='ml-2 inline-flex items-center gap-x-1 rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'
                      >
                        <ClockIcon className='text-red-700 w-4' />
                        Late
                      </span>
                    </>
                  ) : null}
                </div>
                <div className='text-sm text-gray-500 truncate'>
                  {product.suite}
                </div>
              </a>
            </div>
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <ProductTags product={product} />
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
          {product.productfile_count > 0 ? (
            <>
              <div title={product.after}>
                From:{' '}
                {formatDistanceToNow(new Date(product.after), {
                  addSuffix: true,
                })}
              </div>
              <div title={product.before}>
                To:{' '}
                {formatDistanceToNow(new Date(product.before), {
                  addSuffix: true,
                })}
              </div>
            </>
          ) : (
            <div>Coming Soon</div>
          )}
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
          <div title={product.after}>
            {product.productfile_count} Grids Available
          </div>
          {product.productfile_count > 0 ? (
            <div title={product.before}>
              Spanning{' '}
              {product.after &&
                product.before &&
                formatDistance(
                  new Date(product.after),
                  new Date(product.before)
                )}
            </div>
          ) : null}
        </td>
      </tr>
    );
  }
);
