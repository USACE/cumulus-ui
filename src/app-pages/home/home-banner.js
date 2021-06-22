import React from 'react';

function HomeBanner() {
  return (
    <section class='text-gray-600 body-font'>
      <div className='text-center mb-10'>
        <h1 className='text-5xl'>
          <strong className='font-sans font-black'>Meteorology</strong>
          <span className='font-light'> With Simple Data Access</span>
        </h1>
        <p className='text-gray-800 mt-2 font-thin text-2xl'>
          Realtime Processing Engine and REST API to Support Hydrologic Modeling
        </p>
      </div>
    </section>
  );
}

export default HomeBanner;
