import React from 'react';
import { connect } from 'redux-bundler-react';
import EditUnitModal from '../../modals/edit-unit-modal';
import { Table } from '../table';
import { EditIcon, DeleteIcon } from '../icons';
import { NewButton } from '../../forms/buttons';

const UnitTable = connect(
  'doModalOpen',
  'selectUnitItems',
  'doUnitDelete',
  'doUnitFetch',
  ({ doModalOpen, unitItems: items, doUnitDelete }) => {
    return (
      <Table
        headers={['Name', 'Abbreviation', 'Tools']}
        items={items}
        itemFields={['name', 'abbreviation']}
        tools={[
          {
            icon: <EditIcon />,
            handleClick: (item) => {
              doModalOpen(EditUnitModal, item);
            },
          },
          {
            icon: <DeleteIcon />,
            handleClick: (item) => {
              doUnitDelete(item);
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
      <div className='w-full bg-red-400 p-2 mb-5 text-white font-medium rounded-md'>
        Warning: Changing the Unit Name could break the DSS Packager.
      </div>
      <div className='flex justify-end'>
        <NewButton
          label={'New Unit'}
          onClick={() => doModalOpen(EditUnitModal)}
        />
      </div>
    </div>
    <UnitTable />
  </>
));
