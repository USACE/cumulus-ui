import React from 'react';

export default function page_heading(props) {
  return (
    <>
      <div className='mb-3 pl-3 bg-gray-100 rounded-md p-3'>
        <h2 className='text-2xl lg:text-4xl font-bold text-gray-800 m-0'>
          {props.heading}
        </h2>
        <div className='text-secondary text-gray-600 font-medium tracking-tight'>
          {props.subHeading}
        </div>
      </div>
    </>
  );
}
