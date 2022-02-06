export default function FilterPanel({ activeView }) {
  return (
    <div>
      <div>
        <label
          htmlFor='search'
          className='block text-sm font-medium text-gray-700'
        >
          Search
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <input
            type='text'
            name='search'
            className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
            placeholder='search...'
          />
        </div>
      </div>

      {/* This should probably be broken out when we start adding logic */}
      <div className='mt-5'>
        <label
          htmlFor='bbox'
          className='block text-sm font-medium text-gray-700'
        >
          Bounding Box (left, top, right, bottom)
        </label>
        <div className='mt-1 flex rounded-md shadow-sm'>
          <div className='relative flex items-stretch flex-grow focus-within:z-10'>
            <input
              disabled={activeView !== 'map'}
              type='email'
              name='email'
              id='email'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300'
              placeholder='-180, 90, 180, -90'
            />
          </div>
          <button
            disabled={activeView !== 'map'}
            type='button'
            className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
