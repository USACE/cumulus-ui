import React from 'react';
import { connect } from 'redux-bundler-react';
import EditProductModal from '../../modals/edit-product-modal';
import EditProductTagsModal from '../../modals/edit-product-tags-modal';
import { Table } from '../table';
import { TagIcon, EditIcon, DeleteIcon } from '../icons';
import { NewButton } from '../../forms/buttons';

const ProductTable = connect(
  'doModalOpen',
  'selectProductItems',
  'selectTagItemsObject',
  'doProductDelete',
  'doProductFetch',
  ({
    doModalOpen,
    productItems: items,
    doProductDelete,
    tagItemsObject: tagsObj,
  }) => {
    const DisplayTags = (productTags) => {
      return tagsObj && Object.keys(tagsObj).length !== 0 ? (
        <div>
          {/* {JSON.stringify(productTags.productTags)} */}
          {productTags &&
            productTags.map((productTagId, idx) => (
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

    return (
      <Table
        headers={['Name', 'Parameter', 'Duration', 'Tags', 'Tools']}
        items={items}
        itemFields={[
          { key: 'name' },
          { key: 'parameter' },
          {
            key: 'temporal_duration',
            render: (duration) => {
              return duration / 60 / 60 + 'hr';
            },
          },

          { key: 'tags', render: DisplayTags },
        ]}
        tools={[
          {
            icon: <TagIcon />,
            handleClick: (item) => {
              doModalOpen(EditProductTagsModal, item);
            },
          },
          {
            icon: <EditIcon />,
            handleClick: (item) => {
              doModalOpen(EditProductModal, item);
            },
          },
          {
            icon: <DeleteIcon />,
            handleClick: (item) => {
              doProductDelete(item);
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
          label={'New Product'}
          onClick={() => doModalOpen(EditProductModal)}
        />
      </div>
    </div>
    <ProductTable />
  </>
));
