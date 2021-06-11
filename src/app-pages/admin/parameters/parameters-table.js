import React, { useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import EditParameterModal from '../../modals/edit-parameter-modal';
import { Table } from '../table';
import { EditIcon, DeleteIcon } from '../icons';

const ParameterTable = connect(
  'doModalOpen',
  'selectParameterItems',
  'doParameterDelete',
  'doParameterFetch',
  ({ doModalOpen, parameterItems: items, doParameterDelete }) => {
    return (
      <Table
        headers={['Name', 'Tools']}
        items={items}
        tools={[
          {
            icon: <EditIcon />,
            handleClick: (item) => {
              doModalOpen(EditParameterModal, item);
            },
          },
          {
            icon: <DeleteIcon />,
            handleClick: (item) => {
              doParameterDelete(item);
            },
          },
        ]}
      />
    );
  }
);

export default connect('doModalOpen', ({ doModalOpen }) => (
  <>
    <div className='py-3'>
      <div className='w-full bg-yellow-200 text-gray-600 p-2 mb-5 font-medium rounded-md'>
        Warning: Changing the Parameter Name could impact applications consuming
        DSS files.
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
        onClick={() => doModalOpen(EditParameterModal)}
      >
        New Parameter
      </button>
    </div>
    <ParameterTable />
  </>
));
