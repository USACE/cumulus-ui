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
    <section className='text-gray-600 body-font bg-white rounded-lg shadow-md h-96 lg:h-2/3  overflow-y-auto'>
      <div className='container px-5 py-5 mx-auto flex flex-wrap'>
        <div className='w-full text-2xl font-bold py-5'>Latest Updates</div>
        <Entry
          date='Jan 2022'
          title='MARFC 6hr forecasted surface temperatures'
          content='Middle Atlantic River Forecast Center (MARFC) 06 hour forecasted surface temperatures'
        />
        <Entry
          date='Jan 2022'
          title='MARFC 1hr observed surface temperatures'
          content='Middle Atlantic River Forecast Center (MARFC) 01 hour Realtime Mesoscale Analysis observed surface temperatures'
        />
        <Entry
          date='Jan 2022'
          title='MARFC 1hr & 3hr NBM forecasted surface temperatures'
          content='Added Middle Atlantic River Forecast Center (MARFC) 1 hour & 3 hour National Blend of Models (NBM) forecasted surface temperatures.'
        />
        <Entry
          date='Jan 2022'
          title='NCEP MRMS v12 QPE Pass 1 & Pass 2 for Alaska and Caribbean'
          content='Added Multi-Radar Multi-Sensor (MRMS) observed precip product.'
        />
        <Entry
          date='Jan 2022'
          title='NCRFC QPE Precip'
          content='Added North Central River Forecast Center (NCRFC) observed precip product.'
        />
        <Entry
          date='Jan 2022'
          title='NCRFC Surface Air Temperature'
          content='Added North Central River Forecast Center (NCRFC) observed and forecast Mesoscale Surface Temperature products.'
        />
        <Entry
          date='Jul 2021'
          title='National Snow & Ice Data Center (NSIDC) Archive'
          content='Added daily data set of 4 km snow water equivalent (SWE) and snow depth over the contiguous United States from 1981 to 2020. Product was developed at the University of Arizona (UA) under the support of the NASA MAP and SMAP Programs.'
        />
        <Entry
          date='Jun 2021'
          title='MBRFC (KRF) Forecast and Airtemp Products'
          content='Added additional gridded products krf qpe, krf qpf, krf airtemp to Cumulus. KRF products are related to the Missouri Basin River Forecast Center (MBRFC).'
        />
        <Entry
          date='Jun 2021'
          title='NAEFS QPF and QTF (CONUS, Forecast) Products'
          content='Added additional gridded products NAEFS QPF and NAEFS QTF to Cumulus. North America Ensemble Forecast System (NAEFS) products where requested by MVD for precipitation and air temperature forecasts.'
        />
        <Entry
          date='May 2021'
          title='WRF Columbia Precip and AirTemp Archive'
          content='Weather Research and Forecasting (WRF) Model is a mesocale numerical weather prediction framework designed for operational forecasting and atmospheric research needs.  Precip and AirTemp data for the period of Water Year 1928-2017 was loaded for the Columbia River Basin.'
        />
        <Entry
          date='May 2021'
          title='NDFD QPF and AirTemp Products (CONUS, Forecast)'
          content='The National Digital Forecast Database (NDFD) is a suite of gridded forecasts of sensible weather elements (e.g., cloud cover, maximum temperature).'
        />
        <Entry
          date='May 2021'
          title='NBM QPF and AirTemp Products (CONUS, Forecast)'
          content='The National Blend of Models (NBM) is a nationally consistent and skillful suite of calibrated forecast guidance based on a blend of both NWS and non-NWS numerical weather prediction model data and post-processed model guidance. The goal of the NBM is to create a highly accurate, skillful and consistent starting point for the gridded forecast. This new way to produce NDFD grids will be helpful providing forecasters with a suite of information to use for their forecasts. The NBM is considered an important part of the efforts to evolve NWS capabilities to achieve a Weather-Ready Nation.'
        />
        <Entry
          date='Apr 2021'
          title='SNODAS Interpolated'
          content='Added processing for SNODAS Interpolated Products and loaded archive back to 2010.  SNODAS Interpolated provides estimates of snow pack parameters over water bodies. This may be useful for modeling water volume contained in the snowpack atop frozen lakes in cold climates.'
        />
      </div>
    </section>
  );
}

export default LatestUpdates;
