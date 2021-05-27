import React, { useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import EditTagModal from '../../modals/edit-tag-modal';

export default connect(
  'selectTagItemsArray',
  'doTagDelete',
  'doTagFetch',
  'doModalOpen',
  ({ tagItemsArray: items, doTagFetch, doTagDelete, doModalOpen }) => {
    useEffect(() => {
      doTagFetch();
    }, []);
    return (
      <table className='table-auto w-full text-left whitespace-no-wrap'>
        <thead>
          <tr>
            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              Name
            </th>
            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
              Color
            </th>
            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
              Description
            </th>
            <th className='px-4 py-3 w-32 text-center title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'>
              Tools
            </th>
          </tr>
        </thead>

        <tbody>
          {!items || !items.length
            ? null
            : items.map((t, idx) => (
                // Item Attributes
                <tr className='border-b'>
                  <td className='px-4 py-3'>{t.name}</td>
                  <td className='px-4 py-3'>
                    <span
                      style={{ backgroundColor: `#${t.color}` }}
                      className='text-xs font-light px-2 py-1 rounded-xl'
                    >
                      {t.color}
                    </span>
                  </td>
                  <td className='px-4 py-3'>{t.description}</td>
                  {/* Tools */}
                  <td className='px-4 py-3'>
                    <div className='flex justify-around'>
                      {/* Edit Button */}
                      <button onClick={() => doModalOpen(EditTagModal, t)}>
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
                      <button onClick={() => doTagDelete(t)}>
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
