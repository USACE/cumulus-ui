import React from 'react';
import { connect } from 'redux-bundler-react';
import EditTagModal from '../../../app-components/admin/modals/edit-tag-modal';
import { Table } from '../../../app-components/admin/Table';
import { EditIcon, DeleteIcon } from '../icons';
import { NewButton } from '../../../app-components/forms/buttons';

const TagTable = connect(
  'doModalOpen',
  'selectTagItems',
  'doTagDelete',
  'doTagFetch',
  ({ doModalOpen, tagItems: items, doTagDelete }) => {
    return (
      <Table
        headers={['Name', 'Color', 'Description', 'Tools']}
        items={items}
        itemFields={[
          { key: 'name' },
          {
            key: 'color',
            render: ({ color }) => {
              return (
                <span
                  className='text-xs font-light px-2 py-1 rounded-xl'
                  style={{ backgroundColor: `#${color}` }}
                >
                  {color}
                </span>
              );
            },
          },
          { key: 'description' },
        ]}
        tools={[
          {
            icon: <EditIcon />,
            handleClick: (item) => {
              doModalOpen(EditTagModal, item);
            },
          },
          {
            icon: <DeleteIcon />,
            handleClick: (item) => {
              //doTagDelete(item);
              alert('this needs a confirm dialog');
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
          label={'New Tag'}
          onClick={() => doModalOpen(EditTagModal)}
        />
      </div>
    </div>
    <TagTable />
  </>
));
