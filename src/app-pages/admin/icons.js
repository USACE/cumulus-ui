import React from 'react';

const EditIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 text-gray-400 hover:text-green-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <title>Edit</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 text-gray-400 hover:text-red-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <title>Delete</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
    />
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 text-gray-400 hover:text-blue-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <title>Tags</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
    />
  </svg>
);

const AddIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 text-gray-400 hover:text-green-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <title>Add</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const RemoveIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 text-gray-400 hover:text-red-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <title>Remove</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const UsersIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 text-gray-400 hover:text-blue-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <title>{props.title}</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
);

export { EditIcon, DeleteIcon, TagIcon, AddIcon, RemoveIcon, UsersIcon };
