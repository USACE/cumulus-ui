import React, { useState } from 'react';
import { connect } from 'redux-bundler-react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import PageHeading from '../../app-components/page-heading';

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import { formatDistance, formatDistanceToNow, parseISO } from 'date-fns';
//import Map from '../../app-components/class-map';
import Loader from '../../app-components/loader';

const colorClassBinary = (value) => {
  if (!value || !value.count) {
    return 'fill-current text-gray-300';
  } else {
    return 'fill-current text-green-400';
  }
};

const colorClassHourly = (value) => {
  const color = ({ count }) =>
    count === 24
      ? 'text-green-500'
      : count < 24 && count > 10
      ? 'text-green-300'
      : count <= 10 && count > 0
      ? 'text-green-100'
      : 'text-gray-200';

  return `fill-current ${value ? color(value) : 'text-gray-200'}`;
};

const AvailabilityCalendar = ({ year, dates, classForValue }) => {
  return (
    <div className='p-2 m-4 border-0 border-black'>
      <div className='mx-2'>
        <h1 className='text-md mb-2'>{`WY${year}`}</h1>
      </div>
      <div className=''>
        <CalendarHeatmap
          startDate={new Date(`${year - 1}-10-01`)}
          endDate={new Date(`${year}-09-30`)}
          values={dates}
          classForValue={classForValue}
          tooltipDataAttrs={(value) =>
            value &&
            value.date && {
              'data-tip': `${moment.utc(value.date).format('YYYY-MM-DD')}: ${
                value.count
              } Grids`,
            }
          }
        />
        <ReactTooltip />
      </div>
    </div>
  );
};

export default connect(
  'selectProductByRoute',
  'selectProductYearsByRoute',
  'selectProductavailabilityByRoute',
  'selectProductavailabilityIsLoading',
  ({
    productByRoute: product,
    productYearsByRoute: productYears,
    productavailabilityByRoute: productAvailability,
    productavailabilityIsLoading: isLoading,
  }) => {
    // Color Ramp Depends on Hourly vs. Daily temporal_resolution
    const classForValue = (resolution) => {
      return parseInt(resolution) === 3600
        ? colorClassHourly
        : colorClassBinary;
    };
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      product && (
        <div className='flex h-screen overflow-hidden'>
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden lg:bg-red-200 sm:bg-yellow-300 xl:bg-green-400 2xl:bg-white'>
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
              <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
                {/* Welcome banner */}
                {/* <WelcomeBanner /> */}

                <PageHeading
                  heading={product.name}
                  subHeading={product.suite}
                />

                {/* <div className='flex flex-wrap'>
                  <div className='p-5 w-full xl:w-1/2'></div>
                  <div className='w-full xl:w-1/2'>hello</div>
                </div> */}

                {/* <!--main grid container--> */}

                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
                  {/* {Start Left Grid Column} */}
                  <div className='col-span-2 p-3 bg-white'>
                    <span className='block font-bold text-gray-500 text-md text-secondary uppercase tracking-wider border-gray-100 border-b-2'>
                      Product Description
                    </span>

                    <p className='p-2 lg:max-h-60 lg:overflow-y-auto'>
                      {product.description}
                    </p>

                    {/* {Start Availability} */}
                    <div className='mt-8 bg-white min-h-0'>
                      <span className='font-bold text-gray-500 text-md text-secondary uppercase tracking-wider mr-4 border-gray-100 border-b-2'>
                        Availability Details
                      </span>
                      <hr />
                      <div className='w-full overflow-y-scroll overscroll-contain h-96'>
                        {isLoading || !productAvailability ? (
                          <Loader opt={'dissolve-cube'} color={'#9ae6b4'} />
                        ) : (
                          productYears
                            .reverse()
                            .map((year, idx) => (
                              <AvailabilityCalendar
                                key={idx}
                                year={year}
                                dates={productAvailability.date_counts}
                                classForValue={classForValue(
                                  product.temporal_resolution
                                )}
                              />
                            ))
                        )}
                      </div>
                    </div>
                    {/* {End Availability} */}
                  </div>
                  {/* {Start Left Grid Column} */}

                  {/* {Start Right Grid Column} */}
                  <div className='col-span-1 row-span-1 m-0 p-3 min-h-0 bg-gray-50 border-2 border-gray-100'>
                    <span className='font-bold text-gray-500 text-md text-secondary uppercase tracking-wider block'>
                      Product Metadata
                    </span>

                    <div className='overflow-hidden border-b border-gray-200'>
                      <table className='min-w-full divide-y divide-gray-200 mt-3'>
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr>
                            <td className='bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3'>
                              Parameter
                            </td>
                            <td className='p-1'>{product.parameter}</td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3'>
                              Unit
                            </td>
                            <td className='p-1'>{product.unit}</td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3'>
                              Earliest Product:
                            </td>
                            <td className='p-1'>
                              {product.after}
                              <div className='text-sm text-gray-900'>
                                {product.after &&
                                  formatDistanceToNow(parseISO(product.after)) +
                                    ' ago'}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3'>
                              Latest Product:
                            </td>
                            <td className='p-1'>
                              {product.before}
                              <div className='text-sm text-gray-900'>
                                {product.before &&
                                  formatDistanceToNow(
                                    parseISO(product.before)
                                  ) + ' ago'}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3'>
                              Availability:
                            </td>
                            <td className='p-1'>
                              {/* {Math.round(product.percent_coverage)}%
                                {' over '} */}
                              {product.after &&
                                product.before &&
                                formatDistance(
                                  parseISO(product.after),
                                  parseISO(product.before)
                                )}
                            </td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-b-2 border-gray-200 p-2 w-1/3'>
                              Total Files:
                            </td>
                            <td className='p-1'>{product.productfile_count}</td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-gray-200 p-2 w-1/3'>
                              DSS Version:
                            </td>
                            <td className='p-1'>{product.dss_fpart}</td>
                          </tr>
                          <tr>
                            <td className='bg-gray-100 border-gray-200 p-2 w-1/3'>
                              Tags:
                            </td>
                            <td className='p-1'>
                              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                {product.is_realtime && 'Realtime'}
                              </span>
                              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800'>
                                {product.is_forecast && 'Forecast'}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='col-span-1 opacity-70 m-0 px-1 py-10 min-h-0'>
                      {/* <Map
                        mapKey={'productDetailMap'}
                        height={300}
                        options={{
                          center: [-98.0, 37.0],
                          zoom: 3,
                        }}
                      /> */}
                      <div className='h-48 bg-gray-200'></div>
                    </div>
                  </div>
                  {/* {End Right Grid Column} */}
                </div>
              </div>
            </main>
          </div>
        </div>
      )
    );
  }
);
