import React, { useEffect } from 'react';
import { connect } from 'redux-bundler-react';
import EditUnitsModal from '../../modals/edit-unit-modal';

export default connect(
  'selectUnitItemsArray',
  'doUnitDelete',
  'doUnitFetch',
  'doModalOpen',
  ({ unitItemsArray: units, doUnitFetch, doUnitDelete, doModalOpen }) => {
    useEffect(() => {
      doUnitFetch();
    }, [doUnitFetch]);

    return (
      <>
        <div className='py-3'>
          <div className='w-full bg-red-400 p-2 mb-5 text-white font-medium rounded-md'>
            Warning: Changing the Unit Name could break the DSS Packager.
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
            onClick={() => doModalOpen(EditUnitsModal)}
          >
            New Unit
          </button>
        </div>
        <table className='table-auto w-full text-left whitespace-no-wrap'>
          <thead>
            <tr>
              <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
                Name
              </th>

              <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
                Abbreviation
              </th>

              <th className='px-4 py-3 w-32 text-center title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'>
                Tools
              </th>
            </tr>
          </thead>

          <tbody>
            {!units || !units.length
              ? null
              : units.map((u, idx) => (
                  // Item Attributes
                  <tr className='border-b' key={u.id + idx}>
                    <td className='px-4 py-3'>{u.name}</td>
                    <td className='px-4 py-3 text-gray-600 text-sm'>
                      {u.abbreviation}
                    </td>

                    {/* Tools */}
                    <td className='px-4 py-3'>
                      <div className='flex justify-around'>
                        {/* Edit Button */}
                        <button onClick={() => doModalOpen(EditUnitsModal, u)}>
                          <svg
                            xmlns='http://wwu.w3.org/2000/svg'
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
                        <button onClick={() => doUnitDelete(u)}>
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
      </>
    );
  }
);
