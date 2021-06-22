import React from 'react';

const NewButton = (props) => (
  <button
    className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
    onClick={props.onClick}
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
    {props.label}
  </button>
);

const SaveButton = (props) => (
  <button
    className='bg-blue-500 hover:bg-blue-700 text-white py-2 pl-2 pr-4 text-lg rounded'
    onClick={props.onClick}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 inline'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M5 13l4 4L19 7'
      />
    </svg>
    {props.label}
  </button>
);

const CancelButton = (props) => (
  <button
    className={
      'bg-red-300 hover:bg-red-500 text-white py-2 pl-3 pr-4 text-lg rounded ' +
      props.className
    }
    onClick={props.onClick}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 mr-1 inline'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
      />
    </svg>
    {props.label}
  </button>
);

export { NewButton, SaveButton, CancelButton };
