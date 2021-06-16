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

export { NewButton };
