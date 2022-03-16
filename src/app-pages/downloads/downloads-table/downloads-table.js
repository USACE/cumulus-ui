import { connect } from 'redux-bundler-react';
import DownloadsTableRow from './downloads-table-row';

export default connect(
  'selectDownloadItems',
  'selectProductItemsObject',
  function DownloadsTable({ downloadItems, productItemsObject: productsById }) {
    downloadItems = [
      ...downloadItems,
      {
        id: 'c1de1eb6-5de9-4bd4-b4b9-ac3980ce2ec7',
        sub: 'f9982695-8ff7-44d9-9b65-b7f0f1b029f2',
        datetime_start: '2022-03-06T12:00:08Z',
        datetime_end: '2022-03-09T20:18:08.172Z',
        watershed_id: 'd79acbe5-7767-4b1f-b07c-03f399265dc9',
        product_id: ['8b5672d2-2cf1-4ccf-8785-8a9d9302b3a8'],
        format: null,
        status: 'SUCCESS',
        progress: 100,
        file: 'https://develop-cumulus-api.corps.cloud/cumulus/download/dss7/download_c1de1eb6-5de9-4bd4-b4b9-ac3980ce2ec7.dss',
        processing_start: '2022-03-09T20:18:18.319931Z',
        processing_end: '2022-03-09T20:18:27.845405Z',
        watershed_slug: 'ohio-river-2',
        watershed_name: 'Ohio River',
      },
    ];

    return (
      <div className='flex flex-col w-full ml-5 mr-5'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-t border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Watershed
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Products
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Time Window
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Requested
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Processing Time
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {downloadItems.map((download) => {
                    return (
                      <DownloadsTableRow
                        key={download.id}
                        item={download}
                        productsById={productsById}
                      />
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
