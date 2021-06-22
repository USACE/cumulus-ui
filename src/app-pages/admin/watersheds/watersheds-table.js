import React from 'react';
import { connect } from 'redux-bundler-react';
import EditWatershedModal from '../../modals/edit-watershed-modal';
import EditWatershedRolesModal from '../../modals/edit-watershed-roles-modal';
import { Table } from '../table';
import { EditIcon, DeleteIcon, UsersIcon } from '../icons';
import { NewButton } from '../../forms/buttons';

const WatershedTable = connect(
  'doModalOpen',
  'selectWatershedItems',
  'doWatershedDelete',
  'doWatershedFetch',
  ({ doModalOpen, watershedItems: items, doWatershedDelete }) => {
    return (
      <Table
        headers={['Name', 'Office', 'Area Groups', 'Extents', 'Tools']}
        items={items}
        itemFields={[
          { key: 'name' },
          { key: 'office_symbol' },
          {
            key: 'area_groups',
            render: (area_groups) => {
              return area_groups.length;
            },
          },
          {
            key: 'bbox',
            render: (bbox) => {
              return bbox.map((ext, idx) => (
                <span key={idx}>
                  {ext}
                  {idx !== bbox.length - 1 ? ', ' : ''}
                </span>
              ));
            },
          },
        ]}
        tools={[
          {
            icon: <UsersIcon title='Manage User Roles' />,
            handleClick: (item) => {
              doModalOpen(EditWatershedRolesModal, item);
            },
          },
          {
            icon: <EditIcon />,
            handleClick: (item) => {
              doModalOpen(EditWatershedModal, item);
            },
          },
          {
            icon: <DeleteIcon />,
            handleClick: (item) => {
              doWatershedDelete(item);
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
      <div className='flex justify-end'>
        <NewButton
          label={'New Watershed'}
          onClick={() => doModalOpen(EditWatershedModal)}
        />
      </div>
    </div>
    <WatershedTable />
  </>
));
