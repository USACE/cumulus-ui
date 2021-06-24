import React, { useState, useEffect } from 'react';
import { connect } from 'redux-bundler-react';
// import Select from 'react-select';
// import FormInput from '../forms/forms';
// import { SaveButton, CancelButton } from '../forms/buttons';
import { AddIcon, RemoveIcon } from '../admin/icons';
import { Table } from '../admin/table';

const EditProductTagsModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectModalProps',
  'doProductTagAdd',
  'doProductTagRemove',
  'selectTagItems',
  'doTagFetch',
  'doModalClose',
  ({
    appDefaultsFormSelectPlaceholder,
    modalProps: p,
    doTagFetch,
    doProductTagAdd,
    doProductTagRemove,
    tagItems: tags,
    doModalClose,
  }) => {
    useEffect(() => {
      doTagFetch();
    }, [doTagFetch]);

    const [payload] = useState(p);

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (!payload || (!payload.tags.length > 0 && p)) {
    //     console.log('Missing one or more required fields for parameter');
    //     return;
    //   }
    //   // doProductSave(payload);
    //   doModalClose();
    // };

    // const handleToggle = (e) => {
    //   e.preventDefault();
    //   return;
    // };

    const TagsTable = ({ payload }) => {
      return (
        <Table
          headers={['Name', 'Description', 'Toggle']}
          items={tags}
          itemFields={[
            {
              key: 'name',
              render: (name) => {
                return (
                  <span
                    style={{
                      backgroundColor: `#${name.color}`,
                    }}
                  >
                    {name}
                  </span>
                );
              },
            },
            {
              key: 'description',
              render: (description) => {
                return (
                  <span className='text-sm text-gray-500'>{description}</span>
                );
              },
            },
          ]}
          tools={[
            {
              icon: <AddIcon />,
              handleClick: (item) => {
                // doModalOpen(EditUnitModal, item);
                doProductTagAdd(payload.id, item.id);
              },
            },
            {
              icon: <RemoveIcon />,
              handleClick: (item) => {
                // doUnitDelete(item);
                doProductTagRemove(payload.id, item.id);
              },
            },
          ]}
        />
      );
    };

    return (
      <div
        className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-3/4 max-w-2xl'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-headline'
      >
        <form className='p-6'>
          <fieldset>
            <div className='flex flex-row justify-between p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
              <legend className='mb-3 text-2xl'>
                {payload.tags ? payload.name + ' Tags' : 'Add Product Tags'}
              </legend>
              <svg
                className='w-6 h-6 cursor-pointer'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                onClick={(e) => {
                  doModalClose();
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </div>

            <TagsTable payload={payload} />
          </fieldset>
        </form>
      </div>
    );
  }
);

export default EditProductTagsModal;
