import React, { useState } from 'react';

import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline';

const Entry = ({ question, answer }) => {
  const [q, setq] = useState(question);
  return (
    <li className=''>
      <div className='flex justify-between items-center border-gray-100 border-solid border-b border-2 bg-gray-200 py-3 px-3 rounded-md'>
        <h3
          onClick={() => (q === 0 ? setq(null) : setq(0))}
          className='text-gray-800 p-2 text-base cursor-pointer md:text-md xl:text-xl w-10/12 '
        >
          {question}
        </h3>
        <div
          className='cursor-pointer'
          onClick={() => (q === 0 ? setq(null) : setq(0))}
        >
          {q === 0 ? (
            <MinusCircleIcon
              className='text-gray-400 w-10'
              aria-label='Close'
            />
          ) : (
            <PlusCircleIcon className='text-gray-400 w-10' aria-label='Open' />
          )}
        </div>
      </div>
      {q === 0 && (
        <p className='p-5 pl-8 md:pt-3 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
          {answer}
        </p>
      )}
    </li>
  );
};

const Faqs = () => {
  //   const [question, setquestion] = useState(0);
  return (
    <div className='pt-2'>
      <div className='container mx-auto pt-2'>
        <div className='text-center pb-3 md:pb-10 xl:pb-20'>
          <p className='text-gray-500 text-base lg:text-md uppercase leading-tight mb-4'>
            let's start with the basics
          </p>
          <h1 className='px-2 xl:px-0 xl:text-3xl md:text-3xl text-2xl font-extrabold text-gray-800'>
            Frequently Asked Questions
          </h1>
        </div>
        <div className='w-10/12 mx-auto'>
          <ul>
            <Entry
              question='What version of DSS does Cumulus create?'
              answer='Cumulus currently produces DSS version 7 downloads.'
            />
            <Entry
              question='What is SNODAS Interpolated?'
              answer='SNODAS Interpolated provides estimates of snow pack parameters over water bodies. This may be useful for modeling water volume contained in the snowpack atop frozen lakes in cold climates. '
            />
            <Entry
              question='Why am I only getting forecast products at the end of my time window?'
              answer='In order to accomodate both observed and forecast data in the same download request, Cumulus currently only serves the last 
              forecast "set" or "version" for a requested time window. This serves the typical realtime
              modeling need, allows for the fastest download processing and prevents overlapping/merging of forecast sets (which may lead to incorrect results).
              If you wish to download a past forecast, ensure the end date is close to the desired time.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
