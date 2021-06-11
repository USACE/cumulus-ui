import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
import Select from 'react-select';
// import FormInput from '../forms/forms';

const EditWatershedRolesModal = connect(
  'selectAppDefaultsFormSelectPlaceholder',
  'selectModalProps',
  'doWatershedSave',
  'doModalClose',
  ({
    appDefaultsFormSelectPlaceholder,
    modalProps: w,
    doWatershedSave,
    doModalClose,
  }) => {
    const [payload, setPayload] = useState({
      id: (w && w.id) || null,
      slug: (w && w.slug) || null,
      name: (w && w.name) || null,
      bbox: (w && w.bbox) || [],
      area_groups: (w && w.area_groups) || [],
      office_symbol: (w && w.office_symbol) || null,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!payload || (!payload.id && w) || !payload.name) {
        console.log('Missing one or more required fields for watershed');
        return;
      }
      doWatershedSave(payload);
      doModalClose();
    };

    const DummyMemberRoles = [
      {
        id: 123,
        profile_id: 998,
        username: 'User, Dummy',
        email: 'test.user@fake.com',
        role_id: '2962bdde-7007-4ba0-943f-cb8e72e90704',
        role: 'member',
      },
      {
        id: 345,
        profile_id: 723,
        username: 'Smith, Bob',
        email: 'test.user@fake.com',
        role_id: '2962bdde-7007-4ba0-943f-cb8e72e90704',
        role: 'member',
      },
      {
        id: 648,
        profile_id: 452,
        username: 'Jones, Dummy',
        email: 'test.user@fake.com',
        role_id: '2962bdde-7007-4ba0-943f-cb8e72e90704',
        role: 'member',
      },
      {
        id: 910,
        profile_id: 798,
        username: 'Sure, Not',
        email: 'test.user@fake.com',
        role_id: '2962bdde-7007-4ba0-943f-cb8e72e90704',
        role: 'member',
      },
    ];

    const MemberRolesTableHeader = () => (
      <thead className='bg-gray-100'>
        <tr>
          {['Name', 'Email', 'Role', 'Tools'].map((c) => {
            return (
              <th
                scope='col'
                className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'
                key={c}
              >
                {c}
              </th>
            );
          })}
        </tr>
      </thead>
    );

    const MemberTableRow = ({ m }) => (
      <tr className='border-0 border-b-2 border-gray-200'>
        <td className='p-2'>{m.username}</td>
        <td className='p-2'>{m.email}</td>
        <td className='p-2'>{m.role}</td>
        <td>
          <button onClick={() => alert('bazinga')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-400 hover:text-red-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <title>Delete Watershed</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
        </td>
      </tr>
    );

    return (
      <div
        className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-3/4 max-w-2xl'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-headline'
      >
        <form className='p-6' onSubmit={handleSubmit}>
          <fieldset>
            <div className='flex flex-row justify-between p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
              <legend className='mb-3 text-xl'>
                <span className='font-bold'>{w.name}</span> Watershed (
                {w.office_symbol}) Roles
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

            <div className='mt-3'>
              <label className='block mt-6 mb-2 w-full' forhtml='tags'>
                <span className='text-gray-600'>User(s)</span>
              </label>
              <div className='bg-blue-100 flex'>
                <Select
                  className='flex-auto w-2/3'
                  isMulti
                  // placeholder={appDefaultsFormSelectPlaceholder}
                  options={[
                    { id: 123, name: 'Test User1' },
                    { id: 345, name: 'Test User2' },
                  ].map((t, index) => ({
                    value: t.id,
                    label: t.name,
                  }))}
                  onChange={(selectedOption) => {
                    setPayload({
                      ...payload,
                      tags:
                        selectedOption && selectedOption.length
                          ? selectedOption.map((s) => s.value)
                          : [],
                    });
                  }}
                />

                <button className='flex-auto ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded mt-3'>
                  Add
                </button>
              </div>
            </div>

            <div className='mt-3'>
              <table className='table-auto w-full text-left whitespace-no-wrap'>
                <MemberRolesTableHeader />

                <tbody>
                  {DummyMemberRoles.map((m, idx) => {
                    return <MemberTableRow m={m} />;
                  })}
                </tbody>
              </table>
            </div>

            <div className='mt-3'>
              <textarea
                className='w-full h-20'
                readOnly
                value={JSON.stringify(payload)}
              ></textarea>
            </div>

            <div className='flex'>
              <button
                onClick={handleSubmit}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded mt-3'
              >
                Submit
              </button>
              <button
                onClick={(e) => {
                  doModalClose();
                }}
                className='ml-3 bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 mt-10 rounded mt-3'
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
);

export default EditWatershedRolesModal;
