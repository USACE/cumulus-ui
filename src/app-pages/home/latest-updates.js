import React from 'react';

const Entry = (props) => {
  return (
    <div className='flex relative pt-5 pb-5 sm:items-center md:w-full mx-auto'>
      <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
        <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
      </div>
      <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-400 text-white relative z-10 title-font font-medium text-sm'>
        {/* {empty dot} */}
      </div>
      <div className='flex-grow md:pl-6 pl-4 flex sm:items-center items-start flex-col sm:flex-row'>
        {/* <div class='flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'> */}
        <div className='flex-shrink-0 text-gray-500 inline-flex items-center justify-center text-sm'>
          {props.date}
        </div>
        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
          <h2 className='font-medium title-font text-gray-900 mb-1 text-md'>
            {props.title}
          </h2>
          <p className='leading-relaxed text-sm text-gray-500 body-font'>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

function LatestUpdates() {
  return (
    <section className='text-gray-600 body-font bg-white rounded-lg shadow-md'>
      <div className='container px-5 py-5 mx-auto flex flex-wrap'>
        <div className='w-full text-2xl font-bold py-5'>Latest Updates</div>
        <Entry
          date='June 2021'
          title='MBRFC (KRF) Forecast and Airtemp Products Added'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus sagittis est sed accumsan. '
        />
        <Entry
          date='June 2021'
          title='NAEFS QPF and QTF Products Added'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus sagittis est sed accumsan. Morbi volutpat, ex vitae blandit hendrerit, felis nibh suscipit urna, non malesuada lacus libero vitae lorem. Duis quis aliquam nibh. Morbi tempor eros risus, sit amet bibendum nibh scelerisque eu. Etiam eu lobortis nunc. Duis vulputate odio magna, non consectetur nisi vulputate sit amet. Vivamus quis ipsum elementum, congue libero eget, viverra lorem. Etiam a porta justo. Ut vel vestibulum nunc. Phasellus vitae egestas quam.'
        />
        <Entry
          date='May 2021'
          title='WRF Columbia Precip and AirTemp Archive Loaded'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus sagittis est sed accumsan. Morbi volutpat, ex vitae blandit hendrerit, felis nibh suscipit urna, non malesuada lacus libero vitae lorem. Duis quis aliquam nibh. Morbi tempor eros risus, sit amet bibendum nibh scelerisque eu. Etiam eu lobortis nunc. Duis vulputate odio magna, non consectetur nisi vulputate sit amet.'
        />
      </div>
    </section>
  );
}

export default LatestUpdates;
