import React from 'react';
// import Flatpickr from 'react-flatpickr';

function Datepicker() {
  return (
    <div className='relative'>
      <div className='absolute inset-0 right-auto flex items-center pointer-events-none'>
        <svg
          className='w-4 h-4 fill-current text-gray-500 ml-3'
          viewBox='0 0 16 16'
        >
          <path d='M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z' />
        </svg>
      </div>
    </div>
  );
}

export default Datepicker;
