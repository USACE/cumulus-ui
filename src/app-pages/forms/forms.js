import React from 'react';

const FormInput = (props) => {
  return (
    <>
      <label className='block mt-6 mb-2 w-full' forhtml={props.id}>
        <span className='text-gray-600'>{props.label}</span>
      </label>
      <input
        className='w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-gray-100 p-2'
        defaultValue={props.value}
        maxLength={props.maxLength}
      />
    </>
  );
};

export default FormInput;
