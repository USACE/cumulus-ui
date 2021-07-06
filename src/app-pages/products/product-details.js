import React, { useState, useCallback } from 'react';
import { connect } from 'redux-bundler-react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import ProductTags from '../../app-components/ProductTags';

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
      ? 'text-green-200'
      : count > 24
      ? 'text-green-700'
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
  'doProductavailabilityFetch',
  ({
    productByRoute: product,
    productYearsByRoute: productYears,
    productavailabilityByRoute: productAvailability,
    productavailabilityIsLoading: isLoading,
    doProductavailabilityFetch,
  }) => {
    // Color Ramp Depends on Hourly vs. Daily temporal_resolution
    const classForValue = (resolution) => {
      return parseInt(resolution) === 3600
        ? colorClassHourly
        : colorClassBinary;
    };
    const [sidebarOpen, setSidebarOpen] = useState(false);

    let heatmap_truncate_message = null;
    if (productYears.length > 20) {
      productYears = productYears.slice(-20);
      heatmap_truncate_message =
        'The heatmap below has been truncated for performance reasons.';
    }

    // const [reload, setReload] = useState(1);

    const handleRefreshClick = useCallback(() => {
      doProductavailabilityFetch();
      //setReload((p) => p + 1);
    }, [doProductavailabilityFetch]);

    return (
      product && (
        <div className='flex h-screen overflow-hidden'>
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden  bg-gray-100'>
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
              <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
                {/* Welcome banner */}
                {/* <WelcomeBanner /> */}

                <div className='mb-3 pl-3 bg-gray-100 rounded-md p-3'>
                  <h2 className='text-2xl lg:text-4xl font-bold text-gray-600 m-0'>
                    {product.name}
                  </h2>
                  <div className='text-secondary text-gray-600 font-medium tracking-tight'>
                    {product.suite}
                  </div>
                </div>

                {/* <!--main grid container--> */}

                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
                  {/* {Start Left Grid Column} */}
                  <div className='col-span-2'>
                    <div className='bg-white p-3 shadow-md'>
                      <span className='block font-bold text-gray-500 text-md text-secondary uppercase tracking-wider border-gray-100 border-b-2'>
                        Product Description
                      </span>

                      <p className='p-2 h-56 lg:max-h-60 lg:overflow-y-auto'>
                        {product.description}
                      </p>
                    </div>

                    {/* {Start Availability} */}
                    <div className='mt-8 min-h-0'>
                      <div className='bg-white p-3 shadow-md'>
                        <div className='flex justify-between'>
                          <span className='font-bold text-gray-500 text-md text-secondary uppercase tracking-wider mr-4 border-gray-100 border-b-2'>
                            Availability Details
                          </span>
                          <span className='text-sm text-gray-500 bg-yellow-200'>
                            {heatmap_truncate_message}
                          </span>
                          <span
                            className='cursor-pointer text-gray-400 hover:text-black'
                            onClick={handleRefreshClick}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 inline'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                              />
                            </svg>
                          </span>
                        </div>

                        <hr />
                        <div className='w-full overflow-y-auto overscroll-contain h-96'>
                          {isLoading || !productAvailability ? (
                            <Loader opt={'dissolve-cube'} color={'#9ae6b4'} />
                          ) : (
                            productYears
                              .slice()
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
                    </div>
                    {/* {End Availability} */}
                  </div>
                  {/* {Start Left Grid Column} */}

                  {/* {Start Right Grid Column} */}
                  <div className='col-span-1 row-span-1 m-0 p-3 min-h-0 bg-white shadow-md'>
                    <span className='font-bold text-gray-500 text-md text-secondary uppercase tracking-wider block border-b-2 border-gray-100'>
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
                                  formatDistanceToNow(parseISO(product.after), {
                                    addSuffix: true,
                                  })}
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
                                    parseISO(product.before),
                                    { addSuffix: true }
                                  )}
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
                              <ProductTags productTags={product.tags} />
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
