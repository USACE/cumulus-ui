import React from 'react';
import { connect } from 'redux-bundler-react';
import { Table } from '../table';
import EditSuiteModal from '../../modals/edit-suite-modal';
import { EditIcon, DeleteIcon } from '../icons';
import { NewButton } from '../../forms/buttons';

const SuiteTable = connect(
  'doModalOpen',
  'selectSuiteItems',
  'doSuiteDelete',
  'doSuiteFetch',
  ({ doModalOpen, suiteItems: items, doSuiteDelete }) => {
    return (
      <Table
        headers={['Name', 'Slug', 'Tools']}
        items={items}
        itemFields={[{ key: 'name' }, { key: 'slug' }]}
        tools={[
          {
            icon: <EditIcon />,
            handleClick: (item) => {
              doModalOpen(EditSuiteModal, item);
            },
          },
          {
            icon: <DeleteIcon />,
            handleClick: (item) => {
              doSuiteDelete(item);
            },
          },
        ]}
      />
    );
  }
);

export default connect('doModalOpen', ({ doModalOpen }) => (
  <>
    <div className='flex justify-end py-3'>
      {/* <button
        className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
        onClick={() => doModalOpen(EditSuiteModal)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 inline mb-1'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
        New Suite
      </button> */}
      <NewButton
        label={'New Suite'}
        onClick={() => doModalOpen(EditSuiteModal)}
      />
    </div>
    <SuiteTable />
  </>
));
