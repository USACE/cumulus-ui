import React from 'react';
import { connect } from 'redux-bundler-react';
import EditProductModal from '../../../app-components/admin/modals/edit-product-modal';
import EditProductTagsModal from '../../../app-components/admin/modals/edit-product-tags-modal';
import { Table } from '../../../app-components/admin/Table';
// import { TagIcon, EditIcon, DeleteIcon } from '../icons';
// import { NewButton } from '../../forms/buttons';
import { TagIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { parseISO, formatDistanceToNowStrict } from 'date-fns';

const DownloadTable = connect(
  'doModalOpen',
  'selectProductItems',
  'selectTagItemsObject',

  ({ doModalOpen, productItems: items, tagItemsObject: tagsObj }) => {
    // const statusStyles = {
    //   SUCCESS: 'bg-green-100 text-green-800',
    //   INITIALIZED: 'bg-yellow-100 text-yellow-800',
    //   FAILED: 'bg-red-200 text-red-800',
    // };

    // function classNames(...classes) {
    //   return classes.filter(Boolean).join(' ');
    // }

    const DisplayTags = ({ tags }) => {
      return tagsObj && Object.keys(tagsObj).length !== 0 ? (
        <div>
          {/* {JSON.stringify(productTags.productTags)} */}
          {tags &&
            tags.map((productTagId, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: `#${tagsObj[productTagId].color}`,
                }}
                className='text-xs font-light px-2 py-1 rounded-xl'
              >
                {tagsObj[productTagId].name}
              </span>
            ))}
        </div>
      ) : null;
    };

    const LastFile = ({ before, last_forecast_version }) => {
      return last_forecast_version
        ? formatDistanceToNowStrict(parseISO(last_forecast_version), {
            //unit: 'hour',
            addSuffix: true,
          })
        : before &&
            formatDistanceToNowStrict(parseISO(before), {
              //unit: 'hour',
              addSuffix: true,
            });
    };

    return (
      items && (
        <Table
          headers={['Name', 'Parameter', 'Tags', 'Last File', 'Actions']}
          items={items}
          itemFields={[
            { key: 'name' },

            {
              key: 'parameter',
            },
            { key: 'tags', render: DisplayTags },
            {
              key: 'before',
              render: LastFile,
            },
            // {
            //   key: 'status',
            //   render: (status) => {
            //     return (
            //       <span
            //         className={classNames(
            //           statusStyles[status],
            //           'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
            //         )}
            //       >
            //         {status}
            //       </span>
            //     );
            //   },
            // },
          ]}
          tools={[
            {
              icon: <TagIcon className='w-5 text-gray-600' />,
              handleClick: (item) => {
                doModalOpen(EditProductTagsModal, item);
              },
            },
            {
              icon: <PencilSquareIcon className='w-5 text-gray-600' />,
              handleClick: (item) => {
                doModalOpen(EditProductModal, item);
              },
            },
            // {
            //   icon: null,
            //   handleClick: (item) => {
            //     //   doProductDelete(item);
            //   },
            // },
          ]}
          // tools={[]}
        />
      )
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
    <DownloadTable />
  </>
));
