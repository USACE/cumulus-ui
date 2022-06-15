import { connect } from 'redux-bundler-react';
import ProductsTableRow from './products-table-row';

export default connect(
  'selectProductSelectSelected',
  'doProductSelectToggleAll',
  function ProductsTable({
    products = [],
    productSelectSelected: selectedProducts,
    doProductSelectToggleAll,
  }) {
    return (
      <div className='flex flex-col ml-5 mr-5'>
        <div className='-my-2 overflow-x-auto sm:-mx-3'>
          <div className='py-2 align-middle inline-block min-w-full lg:px-3'>
            <div className='shadow overflow-hidden border-b border-t border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      <div className='flex items-center h-5'>
                        <input
                          id='selectall'
                          name='selectall'
                          type='checkbox'
                          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                          checked={
                            products.length > 0 &&
                            products.length === selectedProducts.length
                          }
                          onChange={doProductSelectToggleAll}
                        />
                        <span className='ml-3'>
                          <label htmlFor='selectall'>All</label>
                        </span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Tags
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Timespan
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Stats
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {products.map((product) => {
                    return (
                      <ProductsTableRow key={product.id} product={product} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
