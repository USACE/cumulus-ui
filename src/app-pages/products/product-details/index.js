import { useCallback } from 'react';
import { connect } from 'redux-bundler-react';
import ProductAvailability from './product-availability';
import ProductProperties from './product-properties';
import ButtonGroup from '../../../app-components/button-group/button-group';
import ButtonGroupButton from '../../../app-components/button-group/button-group-button';
import DownloadModal from '../../products/download-modal';

export default connect(
  'selectAuthIsLoggedIn',
  'selectProductByRoute',
  'selectProductavailabilityByRoute',
  'selectProductSelectSelected',
  'doProductSelectSetSelected',
  'doModalOpen',
  ({
    authIsLoggedIn,
    productByRoute: product,
    productSelectSelected: selectedProducts,
    doProductSelectSetSelected,
    doModalOpen,
  }) => {
    const selected = product && selectedProducts.indexOf(product.id) !== -1;
    const handleAddToDownload = () => {
      //console.log(product.id);
      if (!selectedProducts.indexOf(product.id) !== -1) {
        console.log(product);
        doProductSelectSetSelected([...selectedProducts, product.id]);
      }
    };

    // open the download modal
    const handleDownloadClick = useCallback(() => {
      doModalOpen(DownloadModal);
    }, [doModalOpen]);

    return (
      product && (
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-1'>
          <div className='col-span-2'>
            <div className='max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8'>
              <div className='flex'>
                <h1 className='flex-auto text-3xl font-bold leading-tight text-gray-900'>
                  {product.name}
                </h1>
                <div className=''>
                  <ButtonGroup className='ml-5'>
                    <ButtonGroupButton
                      title='Add to Download'
                      disabled={!authIsLoggedIn || selected}
                      onClick={handleAddToDownload}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                        />
                      </svg>
                      Add to Download
                    </ButtonGroupButton>
                    <ButtonGroupButton
                      title='Download Selection'
                      disabled={
                        !authIsLoggedIn || selectedProducts.length === 0
                      }
                      onClick={handleDownloadClick}
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

                      {selectedProducts.length > 0 ? (
                        <div className='bg-indigo-600 text-white rounded-full px-1 ml-1 text-xs'>
                          {selectedProducts.length}
                        </div>
                      ) : null}
                    </ButtonGroupButton>
                  </ButtonGroup>
                </div>
              </div>
              <p className='mt-3 mb-10 text-gray-600 text-md sm:mx-auto md:text-lg lg:mx-0'>
                {product.suite}
              </p>
              <p className='mt-3 text-gray-500 text-md sm:mx-auto md:text-lg lg:mx-0'>
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
