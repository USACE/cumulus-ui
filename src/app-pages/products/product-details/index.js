import { connect } from 'redux-bundler-react';
import ProductAvailability from './product-availability';
import ProductProperties from './product-properties';

export default connect(
  'selectProductByRoute',
  'selectProductavailabilityByRoute',
  ({ productByRoute: product }) => {
    return (
      product && (
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-1'>
          <div className='col-span-2'>
            <div className='max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold leading-tight text-gray-900'>
                {product.name}
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                {product.description}
              </p>
            </div>
            <div className='max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8'>
              <div className='bg-white overflow-hidden shadow rounded-lg px-3 py-3'>
                <ProductAvailability />
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8'>
              <ProductProperties />
            </div>
          </div>
        </div>
      )
    );
  }
);
