import { connect } from 'redux-bundler-react';

const timeline = [
  {
    date: 'Jun 2022',
    title: 'Download speed improvements, DSS packager memory leak resolved',
    content:
      'DSS Packager refactored using custom C code to convert tifs to DSS.',
  },
  {
    date: 'Jun 2022',
    title: 'NDGD RTMA Airtemp 1hr (partial) archives loaded for WY2019-2021.',
    content:
      'Added approx 5,351 files/hours for Jan-2019 - Jun-2021 to fill data gaps.',
  },
  {
    date: 'May 2022',
    title: 'Fixed NBM QPF Precip 1hr.',
    content:
      'Fixed processor to select correct band after changes to source product.',
  },
  {
    date: 'May 2022',
    title: 'Fixed HRRR results showing as multiple cumulative totals.',
    content:
      'Fixed processor to select correct band after changes to source product.',
  },
  {
    date: 'May 2022',
    title: 'Fixed NAEFS MEAN QPF and QTF.',
    content: 'Fixed NAEFS aquisition issue and processing code.',
  },
  {
    date: 'Mar 2022',
    title: 'NDGD RTMA Precip 1hr archives loaded for WY2020.',
    content:
      'Added approx 8,355 files/hours for Oct-2019 - Jun-2021 to fill data gaps.',
  },
  {
    date: 'Jan 2022',
    title: 'MARFC 6hr forecasted surface temperatures',
    content:
      'Middle Atlantic River Forecast Center (MARFC) 06 hour forecasted surface temperatures',
  },
  {
    date: 'Jan 2022',
    title: 'MARFC 1hr observed surface temperatures',
    content:
      'Middle Atlantic River Forecast Center (MARFC) 01 hour Realtime Mesoscale Analysis observed surface temperatures',
  },
  {
    date: 'Jan 2022',
    title: 'MARFC 1hr & 3hr NBM forecasted surface temperatures',
    content:
      'Added Middle Atlantic River Forecast Center (MARFC) 1 hour & 3 hour National Blend of Models (NBM) forecasted surface temperatures.',
  },
  {
    date: 'Jan 2022',
    title: 'NCEP MRMS v12 QPE Pass 1 & Pass 2 for Alaska and Caribbean',
    content: 'Added Multi-Radar Multi-Sensor (MRMS) observed precip product.',
  },
  {
    date: 'Jan 2022',
    title: 'NCRFC QPE Precip',
    content:
      'Added North Central River Forecast Center (NCRFC) observed precip product.',
  },
  {
    date: 'Jan 2022',
    title: 'NCRFC Surface Air Temperature',
    content:
      'Added North Central River Forecast Center (NCRFC) observed and forecast Mesoscale Surface Temperature products.',
  },
  {
    date: 'Jul 2021',
    title: 'National Snow & Ice Data Center (NSIDC) Archive',
    content:
      'Added daily data set of 4 km snow water equivalent (SWE) and snow depth over the contiguous United States from 1981 to 2020. Product was developed at the University of Arizona (UA) under the support of the NASA MAP and SMAP Programs.',
  },
  {
    date: 'Jun 2021',
    title: 'MBRFC (KRF) Forecast and Airtemp Products',
    content:
      'Added additional gridded products krf qpe, krf qpf, krf airtemp to Cumulus. KRF products are related to the Missouri Basin River Forecast Center (MBRFC).',
  },
  {
    date: 'Jun 2021',
    title: 'NAEFS QPF and QTF (CONUS, Forecast) Products',
    content:
      'Added additional gridded products NAEFS QPF and NAEFS QTF to Cumulus. North America Ensemble Forecast System (NAEFS) products where requested by MVD for precipitation and air temperature forecasts.',
  },
  {
    date: 'May 2021',
    title: 'WRF Columbia Precip and AirTemp Archive',
    content:
      'Weather Research and Forecasting (WRF) Model is a mesocale numerical weather prediction framework designed for operational forecasting and atmospheric research needs.  Precip and AirTemp data for the period of Water Year 1928-2017 was loaded for the Columbia River Basin.',
  },
  {
    date: 'May 2021',
    title: 'NDFD QPF and AirTemp Products (CONUS, Forecast)',
    content:
      'The National Digital Forecast Database (NDFD) is a suite of gridded forecasts of sensible weather elements (e.g., cloud cover, maximum temperature).',
  },
  {
    date: 'May 2021',
    title: 'NBM QPF and AirTemp Products (CONUS, Forecast)',
    content:
      'The National Blend of Models (NBM) is a nationally consistent and skillful suite of calibrated forecast guidance based on a blend of both NWS and non-NWS numerical weather prediction model data and post-processed model guidance. The goal of the NBM is to create a highly accurate, skillful and consistent starting point for the gridded forecast. This new way to produce NDFD grids will be helpful providing forecasters with a suite of information to use for their forecasts. The NBM is considered an important part of the efforts to evolve NWS capabilities to achieve a Weather-Ready Nation.',
  },
  {
    date: 'Apr 2021',
    title: 'SNODAS Interpolated',
    content:
      'Added processing for SNODAS Interpolated Products and loaded archive back to 2010.  SNODAS Interpolated provides estimates of snow pack parameters over water bodies. This may be useful for modeling water volume contained in the snowpack atop frozen lakes in cold climates.',
  },
];

export default connect(() => {
  return (
    <div className='mt-12 w-2/3 mx-auto'>
      <div className='text-center mb-5'>
        <h2 className='text-2xl font-extrabold text-indigo-600 tracking-wide uppercase'>
          Latest Updates
        </h2>
      </div>

      <div className='flow-root'>
        <ul className='-mb-8'>
          {timeline.map((event, i) => (
            <li key={i}>
              <div className='relative pb-8'>
                {i !== timeline.length - 1 ? (
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                ) : null}
                <div className='relative flex space-x-3'>
                  <div>
                    <span className='bg-gray-200 text-white h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-50'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z' />
                        <path d='M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z' />
                        <path d='M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z' />
                      </svg>
                    </span>
                  </div>
                  <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                    <div>
                      <a
                        href={event.href}
                        className='font-medium text-gray-900'
                      >
                        {event.title}
                      </a>
                      <p className='text-sm text-gray-500'>{event.content} </p>
                    </div>
                    <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                      <time dateTime={event.date}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
