import React from 'react';
import { connect } from 'redux-bundler-react';
import { Table } from '../../../app-components/admin/Table';

const TopWatershedTable = connect(
  'selectDownloadMetricsItems',

  ({ downloadMetricsItems: metrics }) => {
    // Limit items while testing
    const items = metrics[0].top_watersheds.slice(0, 5);

    return (
      <Table
        headers={['Watershed', 'Office', 'Count', '']}
        items={items}
        itemFields={[
          { key: 'watershed_name' },
          { key: 'office' },
          { key: 'count' },
        ]}
        tools={[]}
      />
    );
  }
);

export default connect('doModalOpen', ({ doModalOpen }) => (
  <>
    <div className='py-3'>
      <div className='flex justify-end'>
        {/* <NewButton
          label={'New Product'}
          onClick={() => doModalOpen(EditProductModal)}
        /> */}
      </div>
    </div>
    <TopWatershedTable />
  </>
));
