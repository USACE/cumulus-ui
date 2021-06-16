import React, { useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import EditProductModal from '../../modals/edit-product-modal';

export default connect(
  'selectProductItemsArray',
  'selectTagItemsObject',
  'doProductDelete',
  'doProductFetch',
  'doTagFetch',
  'doModalOpen',
  ({
    productItemsArray: items,
    tagItemsObject: tagsObj,
    doProductFetch,
    doTagFetch,
    doProductDelete,
    doModalOpen,
  }) => {
    useEffect(() => {
      doProductFetch();
      doTagFetch();
    }, [doProductFetch, doTagFetch]);

    const DisplayTags = ({ productTags }) => {
      return tagsObj && Object.keys(tagsObj).length !== 0 ? (
        <div>
          {/* {JSON.stringify(props.productTags)} */}
          {productTags.map((productTagId, idx) => (
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
      <table className='table-auto w-full text-left whitespace-no-wrap'>
        <thead>
          <tr>
            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              Name
            </th>

            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              Parameter
            </th>
            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              Duration
            </th>
            <th className='hidden 2xl:block px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              DSS F-Part
            </th>

            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
              Tags
            </th>
            <th className='px-4 py-3 w-32 text-center title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'>
              Tools
            </th>
          </tr>
        </thead>

        <tbody>
          {!items || !items.length
            ? null
            : items.map((p, idx) => (
                // Item Attributes
                <tr className='border-b' key={p.slug}>
                  <td className='px-4 py-3'>{p.name}</td>
                  <td className='px-4 py-3 text-gray-600 text-sm'>
                    {p.parameter}
                  </td>
                  <td className='px-4 py-3 text-gray-600 text-sm'>
                    {p.temporal_duration / 60 / 60} hr
                  </td>
                  <td className='px-4 py-3 hidden 2xl:block text-gray-600 text-sm'>
                    {p.dss_fpart}
                  </td>

                  <td className='px-4 py-3'>
                    <DisplayTags productTags={p.tags} />
                  </td>
                  {/* Tools */}
                  <td className='px-4 py-3'>
                    <div className='flex justify-around'>
                      {/* Edit Button */}
                      <button onClick={() => doModalOpen(EditProductModal, p)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                          />
                        </svg>
                      </button>
                      {/* Delete Button */}
                      <button onClick={() => doProductDelete(p)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    );
  }
);
