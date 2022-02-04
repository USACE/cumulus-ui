/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <>
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <a href='/' className='inline-flex'>
              <span className='sr-only'>Cumulus</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-blue-500 h-24 w-auto'
              >
                <line x1='8' y1='19' x2='8' y2='21'></line>
                <line x1='8' y1='13' x2='8' y2='15'></line>
                <line x1='16' y1='19' x2='16' y2='21'></line>
                <line x1='16' y1='13' x2='16' y2='15'></line>
                <line x1='12' y1='21' x2='12' y2='23'></line>
                <line x1='12' y1='15' x2='12' y2='17'></line>
                <path d='M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25'></path>
              </svg>
            </a>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-blue-600 uppercase tracking-wide'>
                404 error
              </p>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Page not found.
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className='mt-6'>
                <a
                  href='/'
                  className='text-base font-medium text-blue-600 hover:text-indigo-500'
                >
                  Go back home<span aria-hidden='true'> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className='flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <a
              href='/'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Contact Support
            </a>
            <span
              className='inline-block border-l border-gray-300'
              aria-hidden='true'
            />
            <a
              href='/'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Status
            </a>
            <span
              className='inline-block border-l border-gray-300'
              aria-hidden='true'
            />
            <a
              href='/'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
