import { connect } from 'redux-bundler-react';
import { formatDistanceToNow, formatDistance } from 'date-fns';
import ProductTags from '../product-tags';
import { ClockIcon } from '@heroicons/react/24/outline';

export default connect(
  'selectProductByRoute',
  'selectProductIngestStatusItemsObject',
  'selectTagItemsObject',

  ({
    productByRoute: product,
    productIngestStatusItemsObject: productStatusObj,
    tagItemsObject: tagObj,
  }) => {
    const productHasTag = (tag, productTags, tagObj) => {
      // loop over the assigned product tags searching for a match to tag
      return Boolean(productTags.find((pt) => tagObj[pt]?.name === tag));
    };

    return (
      <div className='bg-white shadow-md overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Product Metadata
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>{product.name}</p>
        </div>
        <div className='border-t border-gray-200'>
          <dl>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Parameter</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {product.parameter}
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Unit</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {product.unit}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Earliest Record
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {product.after}
                <div className='text-sm text-gray-900'>
                  {product.after &&
                    formatDistanceToNow(new Date(product.after), {
                      addSuffix: true,
                    })}
                </div>
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Latest Record
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {product.before}
                <div className='text-sm text-gray-900'>
                  {product.before &&
                    formatDistanceToNow(new Date(product.before), {
                      addSuffix: true,
                    })}
                </div>
              </dd>
            </div>
            {product.last_forecast_version && product.last_forecast_version && (
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Latest Forecast
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  {product.last_forecast_version}
                  <div className='text-sm text-gray-900'>
                    {product.last_forecast_version &&
                      formatDistanceToNow(
                        new Date(product.last_forecast_version),
                        {
                          addSuffix: true,
                        }
                      )}
                  </div>
                </dd>
              </div>
            )}

            {/* Check for late product */}
            {!productStatusObj[product.slug]?.is_current &&
            !productHasTag('Archive', product.tags, tagObj) ? (
              <div className='bg-red-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dd className='mt-1 text-sm text-red-900 sm:mt-0 sm:col-span-3'>
                  Last Received:{' '}
                  {productStatusObj[product.slug]?.actual_timedelta} ago.
                  Threshold is{' '}
                  {productStatusObj[product.slug]?.acceptable_timedelta}
                </dd>
              </div>
            ) : null}

            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Availability
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {/* {Math.round(product.percent_coverage)}%
                                {' over '} */}
                {product.after &&
                  product.before &&
                  formatDistance(
                    new Date(product.after),
                    new Date(product.before)
                  )}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Total Files</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {product.productfile_count}
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>DSS Version</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {product.dss_fpart}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Tags</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                <ProductTags product={product} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }
);
