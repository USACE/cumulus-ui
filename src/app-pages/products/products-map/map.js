import { connect } from 'redux-bundler-react';

export default connect(function Map() {
  return (
    <div className='shadow bg-slate-100 h-full ml-5 mr-5 overflow-hidden border-b border-t border-gray-200 sm:rounded-lg'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Coming Soon
          </p>
          <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
            View product footprints and create spatial queries for downloads
            here soon.
          </p>
        </div>
      </div>
    </div>
  );
});
