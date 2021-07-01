import React, { useState } from 'react';

const Entry = ({ question, answer }) => {
  const [q, setq] = useState(question);
  return (
    <li className='py-6 px-3 border-gray-100 border-solid border-b border-2 bg-gray-200'>
      <div className='flex justify-between items-center'>
        <h3
          onClick={() => (q === 0 ? setq(null) : setq(0))}
          className='text-gray-800 p-2 text-base cursor-pointer  md:text-xl  xl:text-2xl w-10/12'
        >
          {question}
        </h3>
        <div
          className='cursor-pointer'
          onClick={() => (q === 0 ? setq(null) : setq(0))}
        >
          {q === 0 ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={36}
              height={36}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#A0AEC0'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-label='Close'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx={12} cy={12} r={9} />
              <line x1={9} y1={12} x2={15} y2={12} />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={36}
              height={36}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#A0AEC0'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-label='Open'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx={12} cy={12} r={9} />
              <line x1={9} y1={12} x2={15} y2={12} />
              <line x1={12} y1={9} x2={12} y2={15} />
            </svg>
          )}
        </div>
      </div>
      {q === 0 && (
        <p className='p-3 md:pt-3 lg:pt-3 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
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
          <p className='text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4'>
            let's start with the basics
          </p>
          <h1 className='px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800'>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
