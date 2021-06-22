import React from 'react';
import { connect } from 'redux-bundler-react';
import EditParameterModal from '../../modals/edit-parameter-modal';
import { Table } from '../table';
import { EditIcon, DeleteIcon } from '../icons';
import { NewButton } from '../../forms/buttons';

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
        itemFields={[{ key: 'name' }]}
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
      <div className='flex justify-end'>
        <NewButton
          label={'New Parameter'}
          onClick={() => doModalOpen(EditParameterModal)}
        />
      </div>
    </div>
    <ParameterTable />
  </>
));
