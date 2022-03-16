import React from 'react';
import { connect } from 'redux-bundler-react';
import { Table } from '../../../app-components/admin/Table';

const TopProductTable = connect(
  'selectDownloadMetricsItems',

  ({ downloadMetricsItems: metrics }) => {
    // Limit items while testing
    const items = metrics[0].top_products.slice(0, 5);

    return (
      <Table
        headers={['Name', 'Count', '']}
        items={items}
        itemFields={[{ key: 'name' }, { key: 'count' }]}
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
    <TopProductTable />
  </>
));
